"use client";
import { Fragment, use, useEffect, useState } from "react";
import { Propless } from "Types/React";
import { IImage, WebGLImagesContext } from "../../Context";
import { WebGLImageMesh } from "./WebGLImageMesh";

export const WebGLImageRenderer = (_: Propless) => {
  const controller = use(WebGLImagesContext);
  const [state, setState] = useState<IImage[]>([]);

  useEffect(() => {
    const ID = controller.subscribeToImages(({ images }) => setState(images));
    return () => {
      controller.unsubscribeFromImages(ID);
    };
  }, [controller]);

  return (
    <Fragment>
      {state.map(({ width, height, ID, image }) => (
        <WebGLImageMesh
          ID={ID}
          key={ID}
          image={image}
          width={width}
          height={height}
        />
      ))}
    </Fragment>
  );
};
