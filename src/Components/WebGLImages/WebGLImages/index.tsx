"use client";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OptionalChildren } from "Types/React";
import { WebGLImagesContextProvider } from "../Context";
import { Camera } from "./Camera";
import { WebGLImageRenderer } from "./WebGLImageRenderer";
import { WebGLTransitionRenderer } from "./WebGLTransitionRenderer";
import "./styles.scss";

export const WebGLImages = ({ children }: OptionalChildren) => {
  return (
    <WebGLImagesContextProvider>
      {children}
      <div className="webgl-images" aria-hidden>
        <Canvas
          flat
          linear
          style={{ pointerEvents: "none" }}
          gl={{ antialias: true, alpha: true }}>
          <Suspense>
            <Camera />
            <WebGLImageRenderer />
          </Suspense>
        </Canvas>
      </div>
      <div className="webgl-transition-element">
        <Canvas
          flat
          linear
          style={{ pointerEvents: "none" }}
          gl={{ antialias: true, alpha: true }}>
          <Suspense>
            <Camera />
            <WebGLTransitionRenderer />
          </Suspense>
        </Canvas>
      </div>
    </WebGLImagesContextProvider>
  );
};
