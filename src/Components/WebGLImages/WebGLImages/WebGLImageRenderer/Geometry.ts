import gsap from "gsap";
import { Vector2 } from "three";
import { degToRad } from "three/src/math/MathUtils.js";
import {
  DEFAULT_MOUSE_COORDINATES,
  IWaveShaderMaterial,
  WaveImageMesh,
} from "Components/GLWaveImage";
import { IPointerEvent } from "Components/WebGLImages";
import { Callback, Point } from "Types/Generics";

export class Geometry {
  public mesh: WaveImageMesh | null = null;

  public cacheReference = (mesh: WaveImageMesh) => {
    this.mesh = mesh;
  };

  public revealMesh = () => {
    this.withMaterial(material => {
      gsap.to(material.uniforms.uOpacity, {
        duration: 0.1,
        value: 1,
      });
    });
  };

  public get meshPosition() {
    if (this.mesh) {
      const { x, y } = this.mesh.position;
      return { "position-x": x, "position-y": y };
    }
  }

  public onPointer = ({ type, position }: IPointerEvent) => {
    switch (type) {
      case "pointer-enter":
        return this.onPointerEnter(position);
      case "pointer-move":
        return this.onPointerMove(position);
      case "pointer-leave":
        return this.onPointerLeave();
      case "activation":
        return this.fadeMesh();
      default:
        return;
    }
  };

  public withMesh<F extends Callback<[WaveImageMesh], any>>(fn: F) {
    if (!this.mesh) {
      return;
    }
    return fn(this.mesh);
  }

  public withMaterial(fn: Callback<[IWaveShaderMaterial]>) {
    this.withMesh(mesh => {
      fn(mesh.material);
    });
  }

  private onPointerEnter({ x, y }: Point) {
    this.withMaterial(material => {
      this.transitionUniforms([[material.uniforms.uHoverState, 1]]);
      material.uniforms.uMouseCoordinates.value = new Vector2(x, y);
    });
  }

  private onPointerMove(position: Point) {
    const { x, y } = this.pointerEventFromCenter(position);
    this.withMaterial(material => {
      this.transitionVector2(
        material.uniforms.uMouseCoordinates.value,
        new Vector2(position.x, position.y),
        0.25,
      );
      this.transitionUniforms([[material.uniforms.uXPointerFromCenter, x]]);
    });
    this.withMesh(mesh => {
      this.rotateMesh(mesh, x * 0.1, y * -0.1);
    });
  }

  private onPointerLeave() {
    this.withMaterial(material => {
      this.transitionUniforms([
        [material.uniforms.uHoverState, 0],
        [material.uniforms.uXPointerFromCenter, 0],
      ]);
      this.transitionVector2(
        material.uniforms.uMouseCoordinates.value,
        DEFAULT_MOUSE_COORDINATES,
        0.25,
      );
    });
    this.withMesh(mesh => {
      this.rotateMesh(mesh, 0, 0);
    });
  }

  public activate(positionX = 0) {
    this.withMesh(mesh => {
      const { x, y } = mesh.scale;
      const xSize = Math.min(window.innerWidth, 400);
      const ySize = (y * xSize) / x;
      gsap
        .timeline()
        .to(mesh.scale, {
          y: ySize,
          x: xSize,
          duration: 1,
          ease: "power2.inOut",
        })
        .to(
          mesh.position,
          {
            x: 0,
            y: 0,
            z: 200,
            duration: 1,
            ease: "power2.inOut",
          },
          0,
        )
        .to(
          mesh.rotation,
          {
            y: this.rotateBy(positionX, true),
            duration: 0.5,
          },
          0,
        )
        .to(
          mesh.rotation,
          {
            y: 0,
            duration: 0.25,
          },
          0.5,
        );
    });
  }

  public deactivate({
    width,
    height,
    positionX = 0,
    positionY = 0,
    onTransitionComplete,
  }: IOriginalPosition) {
    this.withMesh(mesh => {
      gsap
        .timeline({
          // @ts-ignore
          onComplete: onTransitionComplete,
        })
        .to(mesh.scale, {
          x: width,
          y: height,
          duration: 1,
          ease: "power2.inOut",
        })
        .to(
          mesh.position,
          {
            x: positionX,
            y: positionY,
            z: 1,
            duration: 1,
            ease: "power2.inOut",
          },
          0,
        )
        .to(
          mesh.rotation,
          {
            y: this.rotateBy(positionX, true),
            duration: 0.5,
          },
          0,
        )
        .to(
          mesh.rotation,
          {
            y: 0,
            duration: 0.25,
          },
          0.5,
        );
    });
  }

  private rotateBy(positionX: number, forward: boolean) {
    return degToRad(
      (50 * positionX) / (window.innerWidth / (2 * (forward ? -1 : 1))),
    );
  }

  private pointerEventFromCenter(position: Point) {
    return {
      x: this.pointerFromCenter(position.x),
      y: this.pointerFromCenter(position.y),
    };
  }

  private pointerFromCenter(uv: number) {
    return uv <= 0.5 ? 0.5 - uv : -(uv - 0.5);
  }

  private transitionUniforms(transitions: [{ value: number }, number][]) {
    for (const [property, value] of transitions) {
      gsap.to(property, {
        duration: 0.5,
        value,
      });
    }
  }

  private transitionVector2(uniform: Vector2, value: Vector2, duration = 0.5) {
    gsap.to(uniform, {
      ...value,
      duration,
    });
  }

  private rotateMesh(mesh: WaveImageMesh, x: number, y: number) {
    gsap.to(mesh.rotation, {
      duration: 0.5,
      y: x,
      x: y,
    });
  }

  private fadeMesh() {
    this.withMaterial(material => {
      gsap.to(material.uniforms.uOpacity, {
        duration: 0.25,
        value: 0,
      });
    });
  }
}

export interface IOriginalPosition {
  width: number;
  height: number;
  positionX?: number;
  positionY?: number;
  onTransitionComplete: Callback;
}
