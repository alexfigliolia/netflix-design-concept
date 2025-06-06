import { classnames } from "@figliolia/classnames";
import { OptionalChildren } from "Types/React";
import "./styles.scss";

export const Page = ({ className, children }: Props) => {
  return <main className={classnames("page", className)}>{children}</main>;
};

interface Props extends OptionalChildren {
  className?: string;
}
