import { ForwardedRef, RefCallback, RefObject, useCallback } from "react";

export const useMergedRefs = <T>(
  ...args: (RefObject<T> | RefCallback<T> | ForwardedRef<T> | undefined)[]
) => {
  return useCallback(
    (instance: T | null) => {
      for (const ref of args) {
        if (typeof ref === "function") {
          ref(instance);
        } else if (ref) {
          ref.current = instance;
        }
      }
    },
    [args],
  );
};
