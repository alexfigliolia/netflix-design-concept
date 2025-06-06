import { ReactNode } from "react";

export type Propless<T = never> = {
  ref?: T;
};

export interface OptionalChildren {
  children?: ReactNode;
}

export interface PageProps<
  P extends Record<string, string> = Record<string, string>,
  S extends Record<string, string | undefined> = Record<
    string,
    string | undefined
  >,
> {
  params: Promise<P>;
  searchParams: Promise<S>;
}
