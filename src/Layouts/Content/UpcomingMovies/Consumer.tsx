"use client";
import { use } from "react";
import { MoviewPreview } from "Components/MoviePreview";
import { Propless } from "Types/React";
import { UpcomingMoviesContext } from "./Context";

export const UpcomingMoviesConsumer = (_: Propless) => {
  const { movie } = use(UpcomingMoviesContext);
  return (
    <div role="marquee">
      <MoviewPreview {...movie} />
    </div>
  );
};
