import { Mesh } from "three";
import { Callback } from "Types/Generics";

export interface IImage extends DOMRect {
  ID: ImageID;
  mesh?: Mesh;
  image: HTMLImageElement;
}

export interface IScrollView {
  scrollX: number;
  scrollY: number;
  images: Map<string, HTMLImageElement>;
}

export type RootNode = Window | HTMLElement;

export type IImageCallback = Callback<[IImage[]]>;

export type WebGLImageStream = {
  images: IImage[];
  [key: ImageID]: IPointerEvent;
};

export interface IPointerEvent {
  type: PointerType;
  position: { x: number; y: number };
}

export type PointerType = "pointer-enter" | "pointer-move" | "pointer-leave";

export type ImageID = `${number}`;
