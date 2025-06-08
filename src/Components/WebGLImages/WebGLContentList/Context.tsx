"use client";
import { createContext, RefObject, use, useMemo } from "react";
import { OptionalChildren } from "Types/React";

export const WebGLContentListContext = createContext<{
  queryParam: string;
  scrollViews: ScrollViewRef[];
}>({
  queryParam: "",
  scrollViews: [],
});

export const WebGLContentListContextProvider = ({
  param,
  scrollView,
  children,
}: Props) => {
  const { scrollViews: parents } = use(WebGLContentListContext);
  const value = useMemo(
    () => ({
      queryParam: param,
      scrollViews: [...parents, scrollView],
    }),
    [parents, scrollView, param],
  );
  return (
    <WebGLContentListContext value={value}>{children}</WebGLContentListContext>
  );
};

interface Props extends OptionalChildren {
  param: string;
  scrollView: ScrollViewRef;
}

type ScrollViewRef = RefObject<HTMLDivElement | null>;
