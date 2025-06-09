import { MoviePopularList200ResponseResultsInner } from "API/models";
import { ContentPosterLink } from "Components/ContentPosterLink";
import { WebGLContentList } from "Components/WebGLImages";
import { WebGLPoster } from "Components/WebGLPoster";
import { ContentClient } from "Tools/ContentClient";
import { Routing } from "Tools/Routing";
import { Propless } from "Types/React";

export const PopularMovies = async (_: Propless) => {
  const {
    page = 0,
    results = [],
    totalPages = 0,
  } = await ContentClient.moviePopularList();
  const list = results as Required<MoviePopularList200ResponseResultsInner>[];
  return (
    <WebGLContentList
      title="Popular Movies"
      aria-label="Popular Movies"
      param={Routing.MOVIE_DETAILS_PARAM}>
      {list.map(movie => {
        return (
          <ContentPosterLink
            id={movie.id}
            key={movie.id}
            title={movie.title}
            Component={WebGLPoster}
            posterURL={movie.posterPath}
            queryParam={Routing.MOVIE_DETAILS_PARAM}
          />
        );
      })}
    </WebGLContentList>
  );
};
