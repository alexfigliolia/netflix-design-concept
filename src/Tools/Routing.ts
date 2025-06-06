import { URLSearchParams } from "url";

export class Routing {
  public static readonly MOVIE_DETAILS_PARAM = "movie-details";
  public static readonly TV_SHOW_DETAILS_PARAM = "show-details";

  public static buildSearchPath(pathname: string, params?: URLSearchParams) {
    const str = params?.toString?.() ?? "";
    const nextParams = str ? `?${str}` : str;
    return `${pathname}${nextParams}`;
  }
}
