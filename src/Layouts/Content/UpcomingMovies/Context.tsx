"use client";
import { createContext, useCallback, useMemo, useState } from "react";
import { MovieUpcomingList200ResponseResultsInner } from "API/models";
import { Callback } from "Types/Generics";
import { OptionalChildren } from "Types/React";

export const UpcomingMoviesContext = createContext<IContext>({
  next: () => {},
  previous: () => {},
  movie: {
    adult: false,
    backdropPath: "",
    genreIds: [],
    id: -1,
    originalLanguage: "",
    originalTitle: "",
    overview: "",
    popularity: 0,
    posterPath: "",
    releaseDate: "",
    title: "",
    video: false,
    voteAverage: 0,
    voteCount: 0,
  },
});

export const UpcomingMoviesContextProvider = ({ list, children }: Props) => {
  const [current, setCurrent] = useState(1);

  const next = useCallback(() => {
    setCurrent(c => (c + 1 >= list.length ? 0 : c + 1));
  }, [list.length]);

  const previous = useCallback(() => {
    setCurrent(c => (c - 1 < 0 ? list.length - 1 : c - 1));
  }, [list.length]);

  const movie = useMemo(() => list[current], [list, current]);

  const value = useMemo(
    () => ({ next, previous, movie }),
    [next, previous, movie],
  );

  return (
    <UpcomingMoviesContext value={value}>{children}</UpcomingMoviesContext>
  );
};

interface Props extends OptionalChildren {
  list: Required<MovieUpcomingList200ResponseResultsInner>[];
}

interface IContext {
  next: Callback;
  previous: Callback;
  movie: Required<MovieUpcomingList200ResponseResultsInner>;
}
