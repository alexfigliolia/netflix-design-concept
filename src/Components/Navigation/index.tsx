import { Link } from "Components/Link";
import { Propless } from "Types/React";
import "./styles.scss";

export const Navigation = (_: Propless) => {
  return (
    <nav className="main-navigation">
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/shows">TV Shows</Link>
        </li>
        <li>
          <Link href="/movies">Movies</Link>
        </li>
        <li>
          <Link href="/new-and-popular">New & Popular</Link>
        </li>
      </ul>
    </nav>
  );
};
