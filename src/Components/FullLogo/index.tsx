import Link from "next/link";
import { NetflixLogo } from "Icons/Netflix";
import { Propless } from "Types/React";
import "./styles.scss";

export const FullLogo = (_: Propless) => {
  return (
    <Link href="/" aria-label="Navigate Home" className="full-logo">
      <NetflixLogo />
    </Link>
  );
};
