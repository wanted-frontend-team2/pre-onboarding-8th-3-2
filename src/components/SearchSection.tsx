import { useSearchSick } from "src/hooks/useSearchSick";
import { useChangeFocusItem } from "src/hooks/useChangeFocusItem";

import { SearchBar } from "./SearchBar";
import { SearchList } from "./SearchList";

export function SearchSection() {
  const { searchValue, autoSearchList, isFocus, onChange, setTrue, setFalse } =
    useSearchSick();
  const { onKeyDown, focusIndex } = useChangeFocusItem(
    searchValue,
    autoSearchList
  );

  return (
    <section className=" h-[300px] w-full bg-sky-200 py-6">
      <div className="m-auto w-[450px]">
        <SearchBar
          placeholder="질환명을 입력해 주세요."
          onChange={onChange}
          onFocus={setTrue}
          onBlur={setFalse}
          isFocus={isFocus}
          onKeyDown={onKeyDown}
        />
        {isFocus && (
          <SearchList
            searchValue={searchValue}
            sickList={autoSearchList}
            focusIndex={focusIndex}
          />
        )}
      </div>
    </section>
  );
}
