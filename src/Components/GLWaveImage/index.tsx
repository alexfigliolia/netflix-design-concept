"use client";
import { Mesh, ShaderMaterial, Vector2 } from "three";
import {
  IGeometry,
  IMaterial,
  WebGLImageGenerator,
} from "HOCs/WebGLImageGenerator";
import fragmentShader from "./fragment.glsl";
import vertexShader from "./vertex.glsl";

export const DEFAULT_MOUSE_COORDINATES = new Vector2(0.5, 0.5);

export const GLWaveImage = WebGLImageGenerator(
  {
    uTime: 0,
    uHoverState: 0,
    uXPointerFromCenter: 0,
    uMouseCoordinates: DEFAULT_MOUSE_COORDINATES.clone(),
  },
  vertexShader,
  fragmentShader,
);

export type IWaveShaderMaterial = ShaderMaterial & {
  uTime: number;
  uXPointerFromCenter: number;
  uHoverState: number;
  uMouseCoordinates: Vector2;
};

export type WaveImageMesh = Mesh<IGeometry, IMaterial & IWaveShaderMaterial>;
