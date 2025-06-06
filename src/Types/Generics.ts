export type Callback<T extends any[] = never[], V = void> = (...args: T) => V;

export interface Point {
  x: number;
  y: number;
}
