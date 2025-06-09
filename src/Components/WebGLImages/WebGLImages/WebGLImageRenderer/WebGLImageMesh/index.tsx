"use client";
import { use, useEffect } from "react";
import { useController } from "@figliolia/react-hooks";
import { useFrame } from "@react-three/fiber";
import { GLWaveImage } from "Components/GLWaveImage";
import { ImageID, WebGLImagesContext } from "Components/WebGLImages/Context";
import { GeometryController } from "./Geometry";

export const WebGLImageMesh = ({ ID, image, width, height }: Props) => {
  const controller = use(WebGLImagesContext);
  const geometry = useController(new GeometryController());

  useEffect(() => {
    if (!geometry.mesh) {
      return;
    }
    controller.registerMesh(ID, geometry.mesh);
    const listenerID = controller.subscribe(ID, geometry.onPointer);
    return () => {
      controller.disposeMesh(ID);
      controller.unsubscribe(ID, listenerID);
    };
  }, [controller, geometry, ID]);

  useFrame((_, delta) => {
    geometry.withMaterial(material => {
      material.uniforms.uTime.value = material.uniforms.uTime.value + delta;
    });
  });

  return (
    <GLWaveImage
      position-z={0}
      scale={[width, height]}
      ref={geometry.cacheReference}
      url={`${image.src}?bypass-cors-please`}
    />
  );
};

export interface Props {
  ID: ImageID;
  image: HTMLImageElement;
  width: number;
  height: number;
}
