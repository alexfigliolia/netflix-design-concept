import { useClassNames } from "@figliolia/classnames";
import { Modal, Props } from "Components/Modal";
import "./styles.scss";

export const ContentBottomSheet = ({
  className,
  children,
  ...props
}: Props) => {
  const classes = useClassNames("content-bottom-sheet", className);
  return (
    <Modal className={classes} {...props}>
      <span className="notch" />
      {children}
    </Modal>
  );
};
