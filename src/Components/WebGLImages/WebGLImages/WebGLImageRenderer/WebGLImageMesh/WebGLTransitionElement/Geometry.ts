import gsap from "gsap";
import { degToRad } from "three/src/math/MathUtils.js";
import { IWaveShaderMaterial, WaveImageMesh } from "Components/GLWaveImage";
import { Geometry } from "Tools/Geometry";
import { Callback } from "Types/Generics";

export class GeometryController extends Geometry<
  WaveImageMesh,
  IWaveShaderMaterial
> {
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
            duration: 0.2,
          },
          0.2,
        )
        .to(
          mesh.rotation,
          {
            y: 0,
            duration: 0.6,
          },
          0.4,
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
            duration: 0.4,
          },
          0.2,
        )
        .to(
          mesh.rotation,
          {
            y: 0,
            duration: 0.25,
          },
          0.6,
        );
    });
  }

  private rotateBy(positionX: number, forward: boolean) {
    return degToRad(
      (50 * positionX) / (window.innerWidth / (2 * (forward ? -1 : 1))),
    );
  }
}

export interface IOriginalPosition {
  width: number;
  height: number;
  positionX?: number;
  positionY?: number;
  onTransitionComplete: Callback;
}
