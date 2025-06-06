import {
  ForwardedRef,
  forwardRef,
  useLayoutEffect,
  useMemo,
  useRef,
} from "react";
import { BufferGeometry, Color, Mesh, ShaderMaterial, Side } from "three";
import { useTexture } from "@react-three/drei";
import { extend, ThreeElements, useThree } from "@react-three/fiber";
import { useMergedRefs } from "Hooks/useMergedRefs";
import { createImageMaterial, UniformValue } from "./createImageMaterial";

export const WebGLImageGenerator = <T extends Record<string, UniformValue>>(
  ...args: Parameters<typeof createImageMaterial<T>>
) => {
  const material = createImageMaterial(...args);
  const WebGLImage = forwardRef(function WebGLImage(
    {
      url,
      color,
      side,
      segments = 1,
      zoom = 1,
      grayscale = 0,
      opacity = 1,
      radius = 0,
      toneMapped,
      transparent,
      scale = [1, 1],
      ...props
    }: WebGLImageProps,
    forwardedRef: ForwardedRef<Mesh<IGeometry, IMaterial>>,
  ) {
    extend({ ImageMaterial: material });
    const [width, height] = scale;
    const texture = useTexture(url);
    const size = useThree(state => state.size);
    const mesh = useRef<Mesh<IGeometry, IMaterial>>(null);
    const cacheRef = useMergedRefs(mesh, forwardedRef);
    const imageBounds = useMemo(
      () => [texture.image.width, texture.image.height],
      [texture],
    );
    const resolution = useMemo(() => Math.max(size.width, size.height), [size]);

    useLayoutEffect(() => {
      if (!mesh.current) {
        return;
      }
      if (mesh.current.geometry.parameters) {
        const { width: pWidth, height: pHeight } =
          mesh.current.geometry.parameters;
        mesh.current.material.scale.set(width * pWidth, height * pHeight);
      }
    }, [width, height]);

    return (
      <mesh ref={cacheRef} {...props} scale={[width, height, 1]}>
        <planeGeometry args={[1, 1, segments, segments]} />
        <imageMaterial
          color={color}
          map={texture}
          zoom={zoom}
          grayscale={grayscale}
          opacity={opacity}
          scale={scale}
          imageBounds={imageBounds}
          resolution={resolution}
          radius={radius}
          toneMapped={toneMapped}
          transparent={transparent}
          side={side}
        />
      </mesh>
    );
  });
  return WebGLImage;
};

export interface WebGLImageProps
  extends Omit<ThreeElements["mesh"], "scale" | "children"> {
  segments?: number;
  scale?: [number, number];
  color?: Color;
  zoom?: number;
  radius?: number;
  grayscale?: number;
  toneMapped?: boolean;
  transparent?: boolean;
  opacity?: number;
  side?: Side;
  url: string;
}

export interface IGeometry extends BufferGeometry {
  parameters?: { width: number; height: number };
}

export interface IMaterial extends ShaderMaterial {
  scale: {
    set: (x: number, y: number) => void;
  };
}
