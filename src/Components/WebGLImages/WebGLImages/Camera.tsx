"use client";
import { useMemo } from "react";
import { PerspectiveCamera } from "@react-three/drei";
import { useWindowHeight } from "Hooks/useWindowHeight";
import { Propless } from "Types/React";

const DISTANCE = 1000;

export const Camera = (_: Propless) => {
  const height = useWindowHeight();

  const fov = useMemo(
    () => 2 * Math.atan(height / 2 / DISTANCE) * (180 / Math.PI),
    [height],
  );

  return <PerspectiveCamera fov={fov} makeDefault position-z={DISTANCE} />;
};
