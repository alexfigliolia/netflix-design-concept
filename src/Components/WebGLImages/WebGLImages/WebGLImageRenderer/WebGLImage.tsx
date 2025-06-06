"use client";
import { use, useEffect } from "react";
import { useController } from "@figliolia/react-hooks";
import { useFrame } from "@react-three/fiber";
import { GLWaveImage } from "Components/GLWaveImage";
import { IImage, WebGLImagesContext } from "../../Context";
import { Geometry } from "./Geometry";

export const WebGLImage = ({ ID, image, width, height, ...rest }: IImage) => {
  const geometry = useController(new Geometry());
  const controller = use(WebGLImagesContext);

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

  // const onClick = useCallback(() => {
  //   withMesh(mesh => {
  //     const xSize = props?.scale?.[0] ?? 1;
  //     const ySize = props?.scale?.[1] ?? 1;
  //     const halfHeight = height / 2;
  //     gsap.to(mesh.scale, {
  //       y: halfHeight,
  //       x: (xSize * halfHeight) / ySize,
  //       duration: 1,
  //       ease: "power2.inOut",
  //     });
  //     gsap.to(mesh.position, {
  //       z: 100,
  //       x: 0,
  //       y: 0,
  //       duration: 1,
  //       ease: "power2.inOut",
  //     });
  //   });
  // }, [withMesh, height, props.scale]);

  return (
    <GLWaveImage
      {...rest}
      position-z={0}
      scale={[width, height]}
      ref={geometry.cacheReference}
      url={`${image.src}?bypass-cors-please`}
    />
  );
};
