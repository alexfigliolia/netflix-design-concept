"use client";
import {
  ForwardedRef,
  forwardRef,
  ReactNode,
  useCallback,
  useId,
  useRef,
} from "react";
import { useClassNames } from "@figliolia/classnames";
import { useMergedRefs } from "Hooks/useMergedRefs";
import { LeftChevron } from "Icons/LeftChevron";
import { RightChevron } from "Icons/RightChevron";
import { Callback } from "Types/Generics";
import { OptionalChildren } from "Types/React";
import "./styles.scss";

export const ContentList = forwardRef(function ContentList(
  {
    title,
    onNext,
    children,
    className,
    onPrevious,
    "aria-label": ariaLabel,
  }: IContentList,
  ref: ForwardedRef<HTMLDivElement>,
) {
  const scrollViewID = useId();
  const scrollView = useRef<HTMLDivElement>(null);
  const classes = useClassNames("content-list", className);

  const cacheRef = useMergedRefs(scrollView, ref);

  const withScrollView = useCallback(
    (callback: (view: HTMLDivElement) => void) => {
      if (scrollView.current) {
        return callback(scrollView.current);
      }
    },
    [],
  );

  const scrollViewDimensions = useCallback(() => {
    if (!scrollView.current) {
      return { width: 0, scrollWidth: 0, scrollLeft: 0 };
    }
    const { offsetWidth, scrollWidth, scrollLeft } = scrollView.current;
    return { width: offsetWidth, scrollWidth, scrollLeft };
  }, []);

  const previousPage = useCallback(() => {
    const { width, scrollLeft } = scrollViewDimensions();
    withScrollView(view => {
      if (scrollLeft > 0) {
        view.scrollBy({ left: -width, behavior: "smooth" });
        onPrevious?.();
      }
    });
  }, [onPrevious, scrollViewDimensions, withScrollView]);

  const nextPage = useCallback(() => {
    const { width, scrollWidth, scrollLeft } = scrollViewDimensions();
    withScrollView(view => {
      if (scrollLeft < scrollWidth) {
        view.scrollBy({ left: width, behavior: "smooth" });
        onNext?.();
      }
    });
  }, [withScrollView, scrollViewDimensions, onNext]);

  return (
    <section className={classes}>
      <h2>{title}</h2>
      <div className="content-list__content">
        <button
          onClick={previousPage}
          className="content-list__scroller previous"
          aria-controls={scrollViewID}
          aria-label="Previous Page">
          <LeftChevron aria-hidden />
        </button>
        <div
          ref={cacheRef}
          id={scrollViewID}
          className="content-list__items"
          aria-label={ariaLabel}
          aria-roledescription="carousel">
          {children}
        </div>
        <button
          onClick={nextPage}
          className="content-list__scroller next"
          aria-controls={scrollViewID}
          aria-label="Next Page">
          <RightChevron aria-hidden />
        </button>
      </div>
    </section>
  );
});

export interface IContentList extends OptionalChildren {
  title: ReactNode;
  className?: string;
  "aria-label": string;
  onPrevious?: Callback;
  onNext?: Callback;
}
