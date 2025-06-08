"use client";
import { use, useEffect, useRef } from "react";
import { ContentList, IContentList } from "Components/ContentList";
import { WebGLImagesContext } from "../Context";
import { WebGLContentListContextProvider } from "./Context";

export const WebGLContentList = ({ param, ...props }: Props) => {
  const controller = use(WebGLImagesContext);
  const scrollViewRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scrollViewRef.current) {
      return;
    }
    const scrollView = scrollViewRef.current;
    return () => {
      controller.unmountScrollView(scrollView);
    };
  }, [controller]);

  return (
    <WebGLContentListContextProvider scrollView={scrollViewRef} param={param}>
      <ContentList ref={scrollViewRef} {...props} />
    </WebGLContentListContextProvider>
  );
};

interface Props extends IContentList {
  param: string;
}
