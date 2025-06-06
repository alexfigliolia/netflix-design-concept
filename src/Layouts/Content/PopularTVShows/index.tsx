import { TvSeriesAiringTodayList200ResponseResultsInner } from "API/models";
import { ContentPosterLink } from "Components/ContentPosterLink";
import { WebGLContentList } from "Components/WebGLImages";
import { WebGLPoster } from "Components/WebGLPoster";
import { MovieClient } from "Tools/MovieClient";
import { Routing } from "Tools/Routing";
import { Propless } from "Types/React";

export const PopularTVShows = async (_: Propless) => {
  const {
    page = 0,
    results = [],
    totalPages = 0,
  } = await MovieClient.tvSeriesPopularList();
  const list =
    results as Required<TvSeriesAiringTodayList200ResponseResultsInner>[];
  return (
    <WebGLContentList title="Popular TV Shows" aria-label="Popular TV Shows">
      {list.map(series => {
        return (
          <ContentPosterLink
            id={series.id}
            key={series.id}
            title={series.name}
            Component={WebGLPoster}
            posterURL={series.posterPath}
            queryParam={Routing.TV_SHOW_DETAILS_PARAM}
          />
        );
      })}
    </WebGLContentList>
  );
};
