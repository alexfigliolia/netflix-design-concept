import { MovieUpcomingList200ResponseResultsInner } from "API/models";
import { MovieClient } from "Tools/MovieClient";
import { Propless } from "Types/React";
import { UpcomingMoviesConsumer } from "./Consumer";
import { UpcomingMoviesContextProvider } from "./Context";

export const UpcomingMovies = async (_: Propless) => {
  const { results } = await MovieClient.movieUpcomingList();
  const list = results as Required<MovieUpcomingList200ResponseResultsInner>[];
  return (
    <UpcomingMoviesContextProvider list={list}>
      <UpcomingMoviesConsumer />
    </UpcomingMoviesContextProvider>
  );
};
