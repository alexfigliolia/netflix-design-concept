import {
  Color,
  Matrix3,
  Matrix4,
  Quaternion,
  Texture,
  TypedArray,
  Vector2,
  Vector3,
  Vector4,
} from "three";
import { MeshBVHUniformStruct } from "three-mesh-bvh";
import { shaderMaterial } from "@react-three/drei";
import fragmentShader from "./fragment.glsl";
import vertexShader from "./vertex.glsl";

export const createImageMaterial = <T extends Record<string, UniformValue>>(
  unforms: T,
  vertex: string = vertexShader,
  fragment: string = fragmentShader,
) =>
  shaderMaterial(
    {
      color: new Color("white"),
      scale: new Vector2(1, 1),
      imageBounds: new Vector2(1, 1),
      resolution: 1024,
      map: null,
      zoom: 1,
      radius: 0,
      grayscale: 0,
      opacity: 1,
      ...unforms,
    },
    vertex,
    fragment,
  );

export type UniformValue =
  | Texture
  | TypedArray
  | Matrix4
  | Matrix3
  | Quaternion
  | Vector4
  | Vector3
  | Vector2
  | Color
  | MeshBVHUniformStruct
  | number
  | boolean
  | null;
