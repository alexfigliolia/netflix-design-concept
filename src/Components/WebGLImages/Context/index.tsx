"use client";
import { createContext, useEffect, useMemo } from "react";
import { OptionalChildren } from "Types/React";
import { WebGLImagesController } from "./Controller";

export const WebGLImagesContext = createContext<WebGLImagesController>(
  new WebGLImagesController("shim"),
);

export const WebGLImagesContextProvider = ({ children, root }: Props) => {
  const controller = useMemo(() => new WebGLImagesController(root), [root]);
  if (typeof document !== "undefined") {
    controller.initialize();
  }

  useEffect(() => {
    return () => {
      controller.destroy();
    };
  }, [controller]);

  return <WebGLImagesContext value={controller}>{children}</WebGLImagesContext>;
};

interface Props extends OptionalChildren {
  root?: HTMLElement | string;
}

export * from "./Controller";
export * from "./types";
