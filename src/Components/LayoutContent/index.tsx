import { HTMLAttributes } from "react";
import { classnames } from "@figliolia/classnames";
import "./styles.scss";

export const LayoutContent = ({
  className,
  children,
  ...rest
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={classnames("layout-content", className)} {...rest}>
      {children}
    </div>
  );
};
