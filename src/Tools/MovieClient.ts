import { DefaultApi } from "API/apis";
import { Configuration } from "API/runtime";

class API extends DefaultApi {
  public imageURL(path: string) {
    return `http://image.tmdb.org/t/p/w500/${path}`;
  }
}

export const MovieClient = new API(
  new Configuration({
    apiKey: `Bearer ${process.env.NEXT_PUBLIC_MOVIE_API_KEY}`,
  }),
);
