"use client";
import { ComponentType, useCallback } from "react";
import { IPoster, Poster } from "Components/Poster";
import { useSearchParamsBuilder } from "Hooks/useSearchParamsBuilder";

export const ContentPosterLink = ({
  queryParam,
  Component = Poster,
  ...props
}: Props) => {
  const { appendParam } = useSearchParamsBuilder();

  const onClick = useCallback(() => {
    appendParam(queryParam, String(props.id));
  }, [appendParam, queryParam, props.id]);

  return <Component {...props} onClick={onClick} />;
};

interface Props extends IPoster {
  id: number;
  queryParam: string;
  Component?: ComponentType<IPoster>;
}
