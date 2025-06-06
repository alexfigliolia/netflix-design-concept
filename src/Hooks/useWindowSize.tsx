import { useCallback, useEffect, useState } from "react";

export const useWindowSize = () => {
  const [dimensions, setDimensions] = useState(getDimensions());

  const onResize = useCallback(() => {
    setDimensions(getDimensions());
  }, []);

  useEffect(() => {
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, [onResize]);

  return dimensions;
};

function getDimensions() {
  if (typeof window === "undefined") {
    return { width: undefined, height: undefined };
  }
  return {
    width: window.innerWidth,
    height: window.innerHeight,
  };
}
