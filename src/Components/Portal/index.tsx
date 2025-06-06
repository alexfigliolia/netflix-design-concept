"use client";
import { useLayoutEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { OptionalChildren } from "Types/React";

export const Portal = ({ children, nodeID }: Props) => {
  const [target, setTarget] = useState<Element | null>(null);

  useLayoutEffect(() => {
    if (typeof document === "undefined") {
      return;
    }
    if (nodeID) {
      const node = document.getElementById(nodeID);
      if (!node) {
        throw new Error(
          `Portal Error: A DOM node with the id '${nodeID}' was not found`,
        );
      }
      return setTarget(node);
    }
    setTarget(document.body);
  }, [nodeID]);

  const portal = useMemo(
    () => (target ? createPortal(children, target) : target),
    [children, target],
  );

  return portal;
};

interface Props extends OptionalChildren {
  nodeID?: string;
}
