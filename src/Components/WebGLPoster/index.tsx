"use client";
import {
  MouseEvent,
  TouchEvent,
  use,
  useCallback,
  useEffect,
  useMemo,
  useRef,
} from "react";
import { IPoster, Poster } from "Components/Poster";
import {
  PointerType,
  WebGLContentListContext,
  WebGLImagesContext,
} from "Components/WebGLImages";

export const WebGLPoster = (props: IPoster) => {
  const ID = useRef<`${number}`>("-1");
  const controller = use(WebGLImagesContext);
  const node = useRef<HTMLImageElement>(null);
  const scrollViewParents = use(WebGLContentListContext);

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
    ID.current = controller.registerImage(node.current, scrollViews);
    return () => {
      controller.unmountImage(ID.current, scrollViews);
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
      if (position) {
        controller.emitEvent(ID.current, {
          type,
          position,
        });
      }
    },
    [getPointerPosition, controller],
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
      onMouseEnter={onPointerEnter}
      onTouchStart={onPointerEnter}
      onMouseMove={onPointerMove}
      onTouchMove={onPointerMove}
      onMouseLeave={onPointerLeave}
      onTouchEnd={onPointerLeave}
    />
  );
};

type PointerEvent = MouseEvent<HTMLDivElement> | TouchEvent<HTMLDivElement>;
