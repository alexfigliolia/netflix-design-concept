import { TvSeriesTopRatedList200ResponseResultsInner } from "API/models";
import { ContentPosterLink } from "Components/ContentPosterLink";
import { WebGLContentList } from "Components/WebGLImages";
import { WebGLPoster } from "Components/WebGLPoster";
import { ContentClient } from "Tools/ContentClient";
import { Routing } from "Tools/Routing";
import { Propless } from "Types/React";

export const TopRatedTVShows = async (_: Propless) => {
  const {
    page = 0,
    results = [],
    totalPages = 0,
  } = await ContentClient.tvSeriesTopRatedList();
  const list =
    results as Required<TvSeriesTopRatedList200ResponseResultsInner>[];
  return (
    <WebGLContentList
      title="Top Rated TV Shows"
      aria-label="Top Rated TV Shows"
      param={Routing.TV_SHOW_DETAILS_PARAM}>
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
