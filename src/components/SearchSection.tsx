// import type { ReactNode } from "react";
import { useSearchSick } from "src/hooks/useSearchSick";
import { SearchBar } from "./SearchBar";
import { SearchList } from "./SearchList";

export function SearchSection() {
  const { searchValue, result, isFocus, onChange, setTrue, setFalse } =
    useSearchSick();

  return (
    <section className=" h-[300px] w-full bg-sky-200 py-6">
      <div className="m-auto w-[450px]">
        <SearchBar
          placeholder="질환명을 입력해 주세요."
          onChange={onChange}
          onFocus={setTrue}
          onBlur={setFalse}
          isFocus={isFocus}
        />
        {isFocus && <SearchList searchValue={searchValue} sickList={result} />}
      </div>
    </section>
  );
}
