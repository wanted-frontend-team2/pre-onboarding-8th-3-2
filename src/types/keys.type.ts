export type NavigationKeysType =
  | "ArrowDown"
  | "ArrowLeft"
  | "ArrowRight"
  | "ArrowUp"
  | "End"
  | "Home"
  | "GoHome"
  | "PageDown"
  | "PageUp";

export type ArrowKeysType = Extract<
  NavigationKeysType,
  "ArrowDown" | "ArrowLeft" | "ArrowRight" | "ArrowUp"
>;
