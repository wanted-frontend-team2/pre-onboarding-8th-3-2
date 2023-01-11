import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  // eslint-disable-next-line react/require-default-props
  disabled?: boolean;
  // eslint-disable-next-line react/require-default-props
  isFocus?: boolean;
}

const HOVER_BACKGROUND_COLOR = "hover:bg-slate-100";
const FOCUS_BACKGROUND_COLOR = "bg-slate-100";

export function Item({ children, disabled = false, isFocus = false }: Props) {
  const hoverBackground = !disabled ? HOVER_BACKGROUND_COLOR : "";
  const FocusBackground = !isFocus ? "" : FOCUS_BACKGROUND_COLOR;

  return (
    <div
      className={`${hoverBackground} ${FocusBackground} flex justify-between px-12 py-4`}
    >
      {children}
    </div>
  );
}
