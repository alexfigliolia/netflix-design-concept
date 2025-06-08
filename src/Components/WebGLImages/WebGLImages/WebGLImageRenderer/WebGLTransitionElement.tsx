"use client";
import { use, useEffect } from "react";
import { useController } from "@figliolia/react-hooks";
import { useFrame } from "@react-three/fiber";
import { GLWaveImage } from "Components/GLWaveImage";
import { WebGLImagesContext } from "Components/WebGLImages/Context";
import { Callback } from "Types/Generics";
import { Geometry } from "./Geometry";
import { type Props as GLImageProps } from "./WebGLImage";

export const WebGLTransitionElement = ({
  ID: _ID,
  image,
  width,
  height,
  fadeBackIn,
  activating,
  deactivating,
  "position-x": positionX,
  "position-y": positionY,
  ...rest
}: Props) => {
  const controller = use(WebGLImagesContext);
  const geometry = useController(new Geometry());

  useFrame((_, delta) => {
    geometry.withMaterial(material => {
      material.uniforms.uTime.value = material.uniforms.uTime.value + delta;
    });
  });

  useEffect(() => {
    if (activating) {
      geometry.activate(positionX);
    } else if (deactivating) {
      geometry.deactivate({
        width,
        height,
        positionX,
        positionY,
        onTransitionComplete: () => {
          fadeBackIn();
          controller.resetDeactivatedImage();
        },
      });
    }
  }, [
    fadeBackIn,
    activating,
    deactivating,
    geometry,
    positionX,
    positionY,
    width,
    height,
    controller,
  ]);

  return (
    <GLWaveImage
      {...rest}
      position-z={1}
      position-x={positionX}
      position-y={positionY}
      scale={[width, height]}
      ref={geometry.cacheReference}
      url={`${image.src}?bypass-cors-please`}
    />
  );
};

interface Props extends Omit<GLImageProps, "active"> {
  "position-x"?: number;
  "position-y"?: number;
  activating: boolean;
  deactivating: boolean;
  fadeBackIn: Callback;
}
