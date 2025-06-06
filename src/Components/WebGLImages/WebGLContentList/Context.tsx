"use client";
import { createContext, RefObject, use, useMemo } from "react";
import { OptionalChildren } from "Types/React";

export const WebGLContentListContext = createContext<ScrollViewRef[]>([]);

export const WebGLContentListContextProvider = ({
  scrollView,
  children,
}: Props) => {
  const parents = use(WebGLContentListContext);
  const value = useMemo(() => [...parents, scrollView], [parents, scrollView]);
  return (
    <WebGLContentListContext value={value}>{children}</WebGLContentListContext>
  );
};

interface Props extends OptionalChildren {
  scrollView: ScrollViewRef;
}

type ScrollViewRef = RefObject<HTMLDivElement | null>;
