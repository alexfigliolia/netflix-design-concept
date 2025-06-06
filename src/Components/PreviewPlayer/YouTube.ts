"use client";
import createYouTubePlayerAPI from "youtube-player";

export class YouTube {
  public static createPlayer(nodeID: string, videoID: string) {
    return createYouTubePlayerAPI(nodeID, {
      videoId: videoID,
      width: window.innerWidth,
      height: window.innerHeight,
      playerVars: {
        controls: 0,
        autoplay: 1,
        enablejsapi: 1,
        loop: 0,
        rel: 0,
        fs: 0,
        playsinline: 1,
        modestbranding: 1,
      },
    });
  }
}

export type YouTubePlayer = ReturnType<typeof createYouTubePlayerAPI>;
