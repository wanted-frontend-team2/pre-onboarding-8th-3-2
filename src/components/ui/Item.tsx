import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  // eslint-disable-next-line react/require-default-props
  disabled?: boolean;
}

const HOVER_BACKGROUND_COLOR = "hover:bg-slate-100";

export function Item({ children, disabled = false }: Props) {
  const hoverBackground = !disabled ? HOVER_BACKGROUND_COLOR : "";

  return (
    <div className={`${hoverBackground} flex justify-between px-12 py-4`}>
      {children}
    </div>
  );
}
