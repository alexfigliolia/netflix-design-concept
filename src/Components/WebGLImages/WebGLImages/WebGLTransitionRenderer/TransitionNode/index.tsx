"use client";
import { ImageID } from "Components/WebGLImages/Context";
import { WebGLTransitionElement } from "./WebGLTransitionElement";

export const TransitionNode = (props: Props) => {
  if (!props.activating && !props.deactivating) {
    return null;
  }

  return <WebGLTransitionElement {...props} />;
};

export interface Props {
  ID: ImageID;
  image: HTMLImageElement;
  width: number;
  height: number;
  activating: boolean;
  deactivating: boolean;
}
