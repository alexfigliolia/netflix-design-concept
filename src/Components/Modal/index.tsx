"use client";
import { HTMLProps, useEffect } from "react";
import { useClassNames } from "@figliolia/classnames";
import { useFocusTrap } from "@figliolia/modal-stack";
import { Portal } from "Components/Portal";
import { useWindowHeight } from "Hooks/useWindowHeight";
import "./styles.scss";

export const Modal = ({ className, open, children, ...rest }: Props) => {
  const height = useWindowHeight();
  const [ref, focusTrap] = useFocusTrap<HTMLDialogElement>();
  const classes = useClassNames("modal-view", className, { open });

  useEffect(() => {
    if (open) {
      return focusTrap.current?.resume?.();
    }
    focusTrap.current?.pause?.();
  }, [open, focusTrap]);

  return (
    <Portal>
      <dialog
        ref={ref}
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

interface Props extends HTMLProps<HTMLDialogElement> {
  open: boolean;
  className?: string;
}
