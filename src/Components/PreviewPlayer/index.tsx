"use client";
import {
  ForwardedRef,
  forwardRef,
  useEffect,
  useId,
  useImperativeHandle,
  useState,
} from "react";
import { useClassNames } from "@figliolia/classnames";
import { OptionalChildren } from "Types/React";
import { YouTube, YouTubePlayer } from "./YouTube";
import "./styles.scss";

export const PreviewPlayer = forwardRef(function PreviewPlayer(
  { videoID, children, className }: Props,
  ref: ForwardedRef<YouTubePlayer | null>,
) {
  const nodeID = useId();
  const classes = useClassNames("preview-player", className);
  const [player, setPlayer] = useState<YouTubePlayer | null>(null);

  // @ts-ignore
  useImperativeHandle(ref, () => player, [player]);

  useEffect(() => {
    if (!videoID) {
      return;
    }
    const Player = YouTube.createPlayer(nodeID, videoID);
    setPlayer(Player);
    return () => {
      setPlayer(null);
      void Player.destroy();
    };
  }, [videoID, nodeID]);

  useEffect(() => {
    if (!player) {
      return;
    }
    return () => {
      void player.destroy();
    };
  }, [player]);

  return (
    <div role="group" className={classes}>
      <div id={nodeID} className="preview-player__inject" />
      <div className="preview-player__content">{children}</div>
    </div>
  );
});

interface Props extends OptionalChildren {
  videoID?: string;
  className?: string;
}

export * from "./YouTube";
