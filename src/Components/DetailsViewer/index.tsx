import { useClassNames } from "@figliolia/classnames";
import { ContentBottomSheet } from "Components/ContentBottomSheet";
import { Props } from "Components/Modal";
import "./styles.scss";

export const DetailsViewer = ({ className, ...rest }: Props) => {
  const classes = useClassNames("details-viewer", className);
  return <ContentBottomSheet className={classes} {...rest} />;
};
