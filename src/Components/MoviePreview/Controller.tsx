import { ReactNode } from "react";
import { useClassNames } from "@figliolia/classnames";
import { Callback } from "Types/Generics";

export const Controller = ({
  toggled,
  onClick,
  children,
  className,
}: Props) => {
  const classes = useClassNames("controller", className, { toggled });
  return (
    <button className={classes} onClick={onClick} aria-live="polite">
      {children}
    </button>
  );
};

interface Props {
  toggled: boolean;
  onClick: Callback;
  "aria-label": string;
  className?: string;
  children: [ReactNode, ReactNode];
}
