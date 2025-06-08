import { useSearchParams } from "next/navigation";
import { use, useEffect, useRef } from "react";
import { ImageID, WebGLImagesContext } from "Components/WebGLImages";

export const useActivationListener = (
  imageID: ImageID | null,
  contentID: number,
  queryParam: string,
) => {
  const active = useRef(false);
  const searchParams = useSearchParams();
  const controller = use(WebGLImagesContext);

  useEffect(() => {
    if (!imageID) {
      return;
    }
    const contentMatch = searchParams.get(queryParam) === contentID.toString();
    if (contentMatch && !active.current) {
      active.current = true;
      controller.activateImage(imageID);
    } else if (active.current && !contentMatch) {
      active.current = false;
      controller.activateImage(null);
    }
  }, [searchParams, queryParam, contentID, controller, imageID]);
};
