"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { useLoadingState } from "@figliolia/react-hooks";
import { TvSeriesDetails200Response } from "API/models";
import { ContentRating } from "Components/ContentRating";
import { DetailsViewer } from "Components/DetailsViewer";
import { ContentClient } from "Tools/ContentClient";
import { Routing } from "Tools/Routing";
import { Propless } from "Types/React";
import "./styles.scss";

export const SeriesDetails = (_: Propless) => {
  const searchParams = useSearchParams();
  const selectedSeries = useMemo(
    () => searchParams.get(Routing.TV_SHOW_DETAILS_PARAM),
    [searchParams],
  );

  const { loading, error, setState } = useLoadingState();
  const [info, setInfo] = useState<TvSeriesDetails200Response>();

  useEffect(() => {
    if (!selectedSeries) {
      return;
    }
    void ContentClient.tvSeriesDetails({ seriesId: Number(selectedSeries) })
      .then(setInfo)
      .catch(() => {
        setInfo(undefined);
        setState("error", true);
      })
      .finally(() => setState("loading", false));
  }, [selectedSeries, setState]);

  return (
    <DetailsViewer className="series-details" open={!!selectedSeries}>
      <p>{info?.overview}</p>
      <div className="meta-data">
        <span>
          First Aired:{" "}
          <strong>{info?.firstAirDate?.slice?.(0, 4) ?? ""}</strong>
        </span>
        <span>
          Last Aired: <strong>{info?.lastAirDate?.slice?.(0, 4) ?? ""}</strong>
        </span>
        <ContentRating voteAverage={info?.voteAverage ?? 0} />
      </div>
      <div className="genres">
        {info?.genres?.map?.(genre => {
          return <span key={genre.id}>{genre.name}</span>;
        })}
      </div>
      <div className="about">
        <h2>About {info?.name}</h2>
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
    </DetailsViewer>
  );
};
