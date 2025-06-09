import { ForwardedRef, forwardRef, HTMLProps, useMemo } from "react";
import { classnames } from "@figliolia/classnames";
import { ContentClient } from "Tools/ContentClient";
import { Callback } from "Types/Generics";
import "./styles.scss";

export const Poster = forwardRef(function Poster(
  { id: _id, title, posterURL, className, onClick, ...rest }: IPoster,
  ref: ForwardedRef<HTMLImageElement>,
) {
  const imagePath = useMemo(
    () => ContentClient.imageURL(posterURL),
    [posterURL],
  );
  const imageNode = useMemo(
    () => <img ref={ref} src={imagePath} alt={title} />,
    [imagePath, title, ref],
  );
  return (
    <div
      role="group"
      className={classnames("content-poster", className)}
      {...rest}>
      {onClick ? (
        <button onClick={onClick} aria-label={`View details of ${title}`}>
          {imageNode}
        </button>
      ) : (
        imageNode
      )}
    </div>
  );
});

export interface IPoster extends Omit<HTMLProps<HTMLDivElement>, "id" | "ref"> {
  id: number;
  title: string;
  className?: string;
  posterURL: string;
  onClick?: Callback;
}
