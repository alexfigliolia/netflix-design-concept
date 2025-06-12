import { LayoutContent } from "Components/LayoutContent";
import { MovieDetails } from "Components/MovieDetails";
import { SeriesDetails } from "Components/SeriesDetails";
import { WebGLImages } from "Components/WebGLImages";
import {
  PopularMovies,
  PopularTVShows,
  TopRatedMovies,
  TopRatedTVShows,
  UpcomingMovies,
} from "Layouts/Content";
import { Propless } from "Types/React";
import "./styles.scss";

export default function Home(_: Propless) {
  return (
    <WebGLImages>
      <main className="home">
        <UpcomingMovies />
        <LayoutContent>
          <PopularMovies />
          <PopularTVShows />
          <TopRatedMovies />
          <TopRatedTVShows />
        </LayoutContent>
      </main>
      <SeriesDetails />
      <MovieDetails />
    </WebGLImages>
  );
}
