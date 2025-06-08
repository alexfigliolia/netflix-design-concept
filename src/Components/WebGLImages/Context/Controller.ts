import debounce from "lodash.debounce";
import { Mesh } from "three";
import { EventEmitter, Listener } from "@figliolia/event-emitter";
import { AutoIncrementingID } from "@figliolia/event-emitter";
import { FramePooler } from "@figliolia/frame-pooler";
import {
  IImage,
  IImageCallback,
  ImageID,
  IScrollView,
  RootNode,
  WebGLImageStream,
} from "./types";

export class WebGLImagesController {
  public rootScrollX = 0;
  public rootScrollY = 0;
  public root?: RootNode;
  public initialized = false;
  public desiredRoot: RootNode | string;
  private FramePooler = new FramePooler();
  public activeImage: ImageID | null = null;
  public deactivatingImage: ImageID | null = null;
  private debounceImageEmission = debounce(() => {
    this.emitEvent("images", this.imageState);
  }, 50);
  private imageIDs = new AutoIncrementingID();
  private imageData = new Map<string, IImage>();
  private Emitter = new EventEmitter<WebGLImageStream>();
  private scrollViews = new Map<HTMLElement, IScrollView>();
  constructor(
    desiredRoot: RootNode | string = typeof window === "undefined"
      ? "shim"
      : window,
  ) {
    this.desiredRoot = desiredRoot;
  }

  public initialize() {
    if (this.initialized) {
      return;
    }
    this.initialized = true;
    this.root = this.findRoot(this.desiredRoot);
    const { y, x } = this.getScrollCoordinates(this.root);
    this.rootScrollY = y;
    this.rootScrollX = x;
    window.addEventListener("resize", this.onWindowResize);
    this.root.addEventListener("scroll", this.onScrollRoot);
  }

  public destroy() {
    this.Emitter.storage.clear();
    if (!this.initialized) {
      return;
    }
    this.initialized = false;
    window.removeEventListener("resize", this.onWindowResize);
    this.withRoot(root =>
      root.removeEventListener("scroll", this.onScrollRoot),
    );
    for (const [node] of this.scrollViews) {
      node.removeEventListener("scroll", this.onScrollViewScroll);
    }
  }

  public subscribeToImages(callback: IImageCallback) {
    callback(this.imageState);
    return this.subscribe("images", callback);
  }

  public unsubscribeFromImages(ID: string) {
    return this.unsubscribe("images", ID);
  }

  public unmountScrollView(node: HTMLElement) {
    this.scrollViews.delete(node);
    node.removeEventListener("scroll", this.onScrollViewScroll);
  }

  public registerImage(image: HTMLImageElement, scrollViews: HTMLDivElement[]) {
    const ID = this.imageIDs.get() as ImageID;
    for (const scrollView of scrollViews) {
      const data =
        this.scrollViews.get(scrollView) ?? this.registerScrollView(scrollView);
      data.images.set(ID, image);
      this.scrollViews.set(scrollView, data);
    }
    this.imageData.set(ID, {
      ID,
      image,
      ...(image.getBoundingClientRect().toJSON() as DOMRect),
    });
    this.debounceImageEmission();
    return ID;
  }

  public unmountImage(ID: ImageID, scrollViews: HTMLDivElement[]) {
    const cachedImage = this.imageData.get(ID);
    if (!cachedImage) {
      return;
    }
    for (const scrollView of scrollViews) {
      const data = this.scrollViews.get(scrollView);
      if (data) {
        data.images.delete(cachedImage.ID);
        this.scrollViews.set(scrollView, data);
      }
    }
    this.imageData.delete(ID);
    this.debounceImageEmission();
  }

  public registerMesh(ID: ImageID, mesh: Mesh) {
    const data = this.imageData.get(ID);
    if (!data) {
      return;
    }
    data.mesh = mesh;
    this.imageData.set(ID, data);
    this.FramePooler.run(() => {
      this.resizeImage(ID);
      this.repositionImage(ID);
    });
  }

  public disposeMesh(ID: ImageID) {
    const data = this.imageData.get(ID);
    if (!data) {
      return;
    }
    data.mesh = undefined;
    this.imageData.set(ID, data);
  }

  public emitEvent<K extends Extract<keyof WebGLImageStream, string>>(
    event: K,
    payload: WebGLImageStream[K],
  ) {
    return this.Emitter.emit(event, payload);
  }

  public subscribe<K extends Extract<keyof WebGLImageStream, string>>(
    event: K,
    callback: Listener<WebGLImageStream[K]>,
  ) {
    return this.Emitter.on(event, callback);
  }

  public unsubscribe<K extends Extract<keyof WebGLImageStream, string>>(
    event: K,
    ID: string,
  ) {
    return this.Emitter.off(event, ID);
  }

  public activateImage(image: ImageID | null) {
    if (this.activeImage) {
      this.deactivatingImage = this.activeImage;
    }
    if (image) {
      this.emitEvent(image, {
        type: "activation",
        position: { x: 0, y: 0 },
      });
    }
    this.activeImage = image;
    this.debounceImageEmission();
  }

  public resetDeactivatedImage() {
    this.deactivatingImage = null;
    this.debounceImageEmission();
  }

  private registerScrollView(scrollView: HTMLElement) {
    this.scrollViews.set(scrollView, {
      scrollY: scrollView.scrollTop,
      scrollX: scrollView.scrollLeft,
      images: new Map<string, HTMLImageElement>(),
    });
    scrollView.addEventListener("scroll", this.onScrollViewScroll);
    return this.scrollViews.get(scrollView)!;
  }

  private findRoot(root: RootNode | string) {
    if (typeof root === "string") {
      const node = document.querySelector(root);
      if (!node) {
        throw new Error('Root node with selector "${root}" as not found');
      }
      return node as HTMLElement;
    }
    return root;
  }

  private onScrollRoot = () => {
    this.withRoot(root => {
      const { x, y } = this.getScrollCoordinates(root);
      for (const [scrollView, { images }] of this.scrollViews) {
        if (this.isRootsChild(scrollView)) {
          this.FramePooler.run(() => {
            for (const [ID, image] of images) {
              const data = this.imageData.get(ID);
              if (!data) {
                continue;
              }
              this.imageData.set(ID, {
                ...data,
                ...(image.getBoundingClientRect().toJSON() as DOMRect),
              });
              this.repositionImage(ID);
            }
          });
        }
      }
      this.rootScrollY = y;
      this.rootScrollX = x;
    });
  };

  private onScrollViewScroll = (e: Event) => {
    const target = e.target as HTMLElement;
    const data = this.scrollViews.get(target);
    if (!data) {
      return;
    }
    const { scrollY, scrollX, images } = data;
    const { scrollLeft, scrollTop } = target;
    const deltaX = scrollX - scrollLeft;
    const deltaY = scrollY - scrollTop;
    if (deltaX !== 0 || deltaY !== 0) {
      this.FramePooler.run(() => {
        for (const [ID] of images) {
          const data = this.imageData.get(ID);
          if (data?.mesh) {
            data.mesh.position.x += deltaX;
            data.mesh.position.y += deltaY;
          }
        }
      });
      data.scrollX = scrollLeft;
      data.scrollY = scrollTop;
      this.scrollViews.set(target, data);
    }
  };

  private onWindowResize = () => {
    this.FramePooler.run(() => {
      for (const [ID, data] of this.imageData) {
        this.imageData.set(ID, {
          ...data,
          ...(data.image.getBoundingClientRect().toJSON() as DOMRect),
        });
        this.FramePooler.run(() => {
          this.resizeImage(ID);
          this.repositionImage(ID);
        });
      }
    });
  };

  private resizeImage(ID: string) {
    const data = this.imageData.get(ID);
    if (!data) {
      return;
    }
    const { width, height, mesh } = data;
    if (mesh) {
      mesh.scale.set(width, height, 1);
    }
  }

  private repositionImage(ID: string) {
    const data = this.imageData.get(ID);
    if (!data) {
      return;
    }
    const { width, height, left, top, mesh } = data;
    if (!mesh) {
      return;
    }
    const XPosition = left - window.innerWidth / 2 + width / 2;
    const YPosition = -top + window.innerHeight / 2 - height / 2;
    mesh.position.set(XPosition, YPosition, 0);
  }

  private getScrollCoordinates(node: RootNode) {
    if (node === window) {
      return { x: node.scrollX, y: node.scrollY };
    }
    if (node instanceof HTMLElement) {
      return { x: node.scrollLeft, y: node.scrollTop };
    }
    return { x: 0, y: 0 };
  }

  private withRoot(fn: (root: RootNode) => void | Promise<void>) {
    if (this.root) {
      void fn(this.root);
    }
  }

  private isRootsChild(node: HTMLElement) {
    if (!this.root) {
      return false;
    }
    if (this.root === window) {
      return true;
    }
    if (this.root instanceof HTMLElement) {
      return this.root.contains(node);
    }
    return false;
  }

  private get imageState() {
    return {
      activeImage: this.activeImage,
      deactivatingImage: this.deactivatingImage,
      images: Array.from(this.imageData.values()),
    };
  }
}
