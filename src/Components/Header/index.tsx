import { FullLogo } from "Components/FullLogo";
import { Navigation } from "Components/Navigation";
import "./styles.scss";

export const Header = () => {
  return (
    <header className="main-header">
      <div>
        <div>
          <FullLogo />
          <Navigation />
        </div>
      </div>
    </header>
  );
};
