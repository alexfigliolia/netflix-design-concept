import { MovieUpcomingList200ResponseResultsInner } from "API/models";
import { ContentClient } from "Tools/ContentClient";
import { Propless } from "Types/React";
import { UpcomingMoviesConsumer } from "./Consumer";
import { UpcomingMoviesContextProvider } from "./Context";

export const UpcomingMovies = async (_: Propless) => {
  const { results } = await ContentClient.movieUpcomingList();
  const list = results as Required<MovieUpcomingList200ResponseResultsInner>[];
  return (
    <UpcomingMoviesContextProvider list={list}>
      <UpcomingMoviesConsumer />
    </UpcomingMoviesContextProvider>
  );
};
