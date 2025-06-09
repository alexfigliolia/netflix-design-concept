"use client";
import { HTMLProps } from "react";
import { useClassNames } from "@figliolia/classnames";
import { Portal } from "Components/Portal";
import { useWindowHeight } from "Hooks/useWindowHeight";
import "./styles.scss";

export const Modal = ({ className, open, children, ...rest }: Props) => {
  const height = useWindowHeight();
  const classes = useClassNames("modal-view", className, { open });

  return (
    <Portal>
      <dialog
        aria-modal
        aria-hidden={!open}
        className={classes}
        style={{ height }}
        {...rest}>
        <div>
          <div className="modal-view__content">{children}</div>
        </div>
      </dialog>
    </Portal>
  );
};

export interface Props extends HTMLProps<HTMLDialogElement> {
  open: boolean;
  className?: string;
}
