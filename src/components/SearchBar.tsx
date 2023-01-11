import { HTMLAttributes } from "react";
import { SearchButton } from "./SearchButton";
import { SearchInput } from "./SearchInput";

interface Props extends HTMLAttributes<HTMLInputElement> {
  isFocus: boolean;
}

const FOCUS_COLOR_STYLE = "border-sky-500";

export function SearchBar({ isFocus, ...props }: Props) {
  const focusColor = isFocus ? FOCUS_COLOR_STYLE : "";
  return (
    <div
      className={`flex h-[70px] w-full items-center justify-center gap-3 rounded-full border-2 bg-white px-8 py-4 ${focusColor}`}
    >
      <SearchInput {...props} />
      <SearchButton />
    </div>
  );
}
