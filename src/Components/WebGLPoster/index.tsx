"use client";
import {
  MouseEvent,
  TouchEvent,
  use,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { IPoster, Poster } from "Components/Poster";
import {
  ImageID,
  PointerType,
  WebGLContentListContext,
  WebGLImagesContext,
} from "Components/WebGLImages";
import { useActivationListener } from "./useParamListener";

export const WebGLPoster = ({ onClick, ...props }: IPoster) => {
  const controller = use(WebGLImagesContext);
  const node = useRef<HTMLImageElement>(null);
  const { scrollViews: scrollViewParents, queryParam } = use(
    WebGLContentListContext,
  );
  const [imageID, setImageID] = useState<ImageID | null>(null);

  useActivationListener(imageID, props.id, queryParam);

  useEffect(() => {
    if (!node.current) {
      return;
    }
    const scrollViews: HTMLDivElement[] = [];
    for (const { current } of scrollViewParents) {
      if (current) {
        scrollViews.push(current);
      }
    }
    const ID = controller.registerImage(node.current, scrollViews);
    setImageID(ID);
    return () => {
      controller.unmountImage(ID, scrollViews);
    };
  }, [controller, scrollViewParents]);

  const getPointerPosition = useCallback((e: PointerEvent) => {
    if (!node.current) {
      return;
    }
    let clientX: number;
    let clientY: number;
    if ("touches" in e) {
      if (!e.touches[0]) {
        return;
      }
      ({ clientX, clientY } = e.touches[0]);
    } else {
      ({ clientX, clientY } = e);
    }
    const { left, top, width, height } = node.current.getBoundingClientRect();
    return {
      x: Math.abs((clientX - left) / width),
      y: 1 - Math.abs((clientY - top) / height),
    };
  }, []);

  const pointerEmitter = useCallback(
    (type: PointerType) => (e: PointerEvent) => {
      const position = getPointerPosition(e);
      if (position && imageID) {
        controller.emitEvent(imageID, {
          type,
          position,
        });
      }
    },
    [getPointerPosition, controller, imageID],
  );

  const onPointerEnter = useMemo(
    () => pointerEmitter("pointer-enter"),
    [pointerEmitter],
  );
  const onPointerMove = useMemo(
    () => pointerEmitter("pointer-move"),
    [pointerEmitter],
  );
  const onPointerLeave = useMemo(
    () => pointerEmitter("pointer-leave"),
    [pointerEmitter],
  );

  return (
    <Poster
      ref={node}
      {...props}
      onClick={onClick}
      onMouseEnter={onPointerEnter}
      onTouchStart={onPointerEnter}
      onMouseMove={onPointerMove}
      onTouchMove={onPointerMove}
      onMouseLeave={onPointerLeave}
      onTouchEnd={onPointerLeave}
    />
  );
};

type PointerEvent = MouseEvent<HTMLElement> | TouchEvent<HTMLDivElement>;
