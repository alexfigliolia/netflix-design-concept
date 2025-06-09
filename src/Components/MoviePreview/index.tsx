import { useCallback, useEffect, useRef, useState } from "react";
import { MovieUpcomingList200ResponseResultsInner } from "API/models";
import { ContentRating } from "Components/ContentRating";
import { PreviewPlayer, YouTubePlayer } from "Components/PreviewPlayer";
import { MuteIcon } from "Icons/Mute";
import { PauseIcon } from "Icons/Pause";
import { PlayIcon } from "Icons/Play";
import { SoundIcon } from "Icons/SoundIcon";
import { ContentClient } from "Tools/ContentClient";
import { Controller } from "./Controller";
import "./styles.scss";

export const MoviewPreview = ({
  id,
  title,
  overview,
  voteAverage,
}: Required<MovieUpcomingList200ResponseResultsInner>) => {
  const [muted, setMuted] = useState(false);
  const [playing, setPlaying] = useState(false);
  const player = useRef<YouTubePlayer | null>(null);
  const [videoKey, setVideoKey] = useState<string>();

  const withPlayer = useCallback(
    (action: (instance: YouTubePlayer) => void) => {
      if (player.current) {
        return action(player.current);
      }
    },
    [],
  );

  useEffect(() => {
    void ContentClient.movieVideos({
      movieId: id,
    }).then(({ results }) => {
      setVideoKey(
        results?.filter(v => v.site === "YouTube" && v.type === "Trailer")[0]
          ?.key,
      );
    });
  }, [id]);

  const playPause = useCallback(() => {
    withPlayer(async p => {
      if ((await p.getPlayerState()) === 1) {
        setPlaying(false);
        void p.pauseVideo();
      } else {
        setPlaying(true);
        void p.playVideo();
      }
    });
  }, [withPlayer]);

  const toggleMute = useCallback(() => {
    withPlayer(async p => {
      if (await p.isMuted()) {
        setMuted(false);
        void p.unMute();
      } else {
        setMuted(true);
        void p.mute();
      }
    });
  }, [withPlayer]);

  return (
    <PreviewPlayer ref={player} videoID={videoKey} className="movie-preview">
      <h1>{title}</h1>
      <p>{overview}</p>
      <div>
        <ContentRating voteAverage={voteAverage} />
        <Controller
          onClick={playPause}
          toggled={playing}
          aria-label={playing ? "Pause the preview" : "Play the preview"}>
          <PlayIcon aria-hidden />
          <PauseIcon aria-hidden />
        </Controller>
        <Controller
          onClick={toggleMute}
          toggled={muted}
          className="mute-toggle"
          aria-label={muted ? "Unmute the preview" : "Mute the preview"}>
          <MuteIcon aria-hidden />
          <SoundIcon aria-hidden />
        </Controller>
      </div>
    </PreviewPlayer>
  );
};
