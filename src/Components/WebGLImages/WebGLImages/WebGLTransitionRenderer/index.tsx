"use client";
import { Fragment, use, useEffect, useState } from "react";
import { Propless } from "Types/React";
import { IImageState, WebGLImagesContext } from "../../Context";
import { TransitionNode } from "./TransitionNode";

export const WebGLTransitionRenderer = (_: Propless) => {
  const controller = use(WebGLImagesContext);
  const [state, setState] = useState<IImageState>({
    images: [],
    activeImage: null,
    deactivatingImage: null,
  });

  useEffect(() => {
    const ID = controller.subscribeToImages(setState);
    return () => {
      controller.unsubscribeFromImages(ID);
    };
  }, [controller]);

  return (
    <Fragment>
      {state.images.map(({ width, height, ID, image }) => (
        <TransitionNode
          ID={ID}
          key={ID}
          image={image}
          width={width}
          height={height}
          activating={ID === state.activeImage}
          deactivating={ID === state.deactivatingImage}
        />
      ))}
    </Fragment>
  );
};
