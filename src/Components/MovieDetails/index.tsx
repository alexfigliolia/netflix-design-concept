"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { useLoadingState } from "@figliolia/react-hooks";
import { MovieDetails200Response } from "API/models";
import { ContentRating } from "Components/ContentRating";
import { Modal } from "Components/Modal";
import { useWindowHeight } from "Hooks/useWindowHeight";
import { Content } from "Tools/Content";
import { MovieClient } from "Tools/MovieClient";
import { Routing } from "Tools/Routing";
import { Propless } from "Types/React";
import "./styles.scss";

export const MovieDetails = (_: Propless) => {
  const height = useWindowHeight();
  const searchParams = useSearchParams();
  const selectedMovie = useMemo(
    () => searchParams.get(Routing.MOVIE_DETAILS_PARAM),
    [searchParams],
  );

  const { loading, error, setState } = useLoadingState();
  const [info, setInfo] = useState<MovieDetails200Response>();

  useEffect(() => {
    if (!selectedMovie) {
      return;
    }
    void MovieClient.movieDetails({ movieId: Number(selectedMovie) })
      .then(setInfo)
      .catch(() => {
        setInfo(undefined);
        setState("error", true);
      })
      .finally(() => setState("loading", false));
  }, [selectedMovie, setState]);

  return (
    <Modal className="movie-info" open={!!selectedMovie}>
      <p>{info?.overview}</p>
      <div className="meta-data">
        <span>Released {info?.releaseDate?.slice?.(0, 4)}</span>
        <span>{Content.parseRuntime(info?.runtime ?? 0)}</span>
        <ContentRating voteAverage={info?.voteAverage ?? 0} />
      </div>
      <div className="genres">
        {info?.genres?.map?.(genre => {
          return <span key={genre.id}>{genre.name}</span>;
        })}
      </div>
      <div className="about">
        <h2>About {info?.title}</h2>
        <div>
          <strong>Produced By:</strong>&nbsp;&nbsp;
          {info?.productionCompanies?.map?.(c => c.name).join?.(", ") ??
            "Unknown"}
        </div>
        <div>
          <strong>Spoken Languages:</strong>&nbsp;&nbsp;
          {info?.spokenLanguages?.map?.(c => c.englishName).join?.(", ") ??
            "Unknown"}
        </div>
      </div>
    </Modal>
  );
};
