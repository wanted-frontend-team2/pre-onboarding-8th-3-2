import type { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLInputElement>;

export function SearchInput(props: Props) {
  return <input className="flex-1 text-lg" {...props} />;
}
