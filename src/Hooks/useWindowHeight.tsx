"use client";
import { useMemo } from "react";
import { useWindowSize } from "./useWindowSize";

export const useWindowHeight = () => {
  const { height = 0 } = useWindowSize();
  return useMemo(() => height, [height]);
};
