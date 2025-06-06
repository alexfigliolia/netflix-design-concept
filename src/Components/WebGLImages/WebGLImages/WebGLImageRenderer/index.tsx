"use client";
import { Fragment, use, useEffect, useState } from "react";
import { Propless } from "Types/React";
import { IImage, WebGLImagesContext } from "../../Context";
import { WebGLImage } from "./WebGLImage";

export const WebGLImageRenderer = (_: Propless) => {
  const controller = use(WebGLImagesContext);
  const [images, setImages] = useState<IImage[]>([]);

  useEffect(() => {
    const ID = controller.subscribeToImages(setImages);
    return () => {
      controller.unsubscribeFromImages(ID);
    };
  }, [controller]);

  return (
    <Fragment>
      {images.map((img, i) => (
        <WebGLImage key={i} {...img} />
      ))}
    </Fragment>
  );
};
