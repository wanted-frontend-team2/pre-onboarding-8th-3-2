import { SickListType } from "src/types/sick.type";
import * as UI from "src/components/ui";
import { SearchItem } from "./SearchItem";

const SEARCH_LIST_TITLE = "추천 검색어";
const NOT_FOUND_MESSAGE = "검색어 없음";

interface Props {
  searchValue: string;
  sickList: SickListType;
}

export function SearchList({ searchValue, sickList }: Props) {
  return (
    <div className="rounded-2xl w-full py-6 mt-2 bg-white border-2">
      <div className="h-8 px-6">{SEARCH_LIST_TITLE}</div>
      <div className="w-full">
        {!sickList.length ? (
          <UI.Item disabled>{NOT_FOUND_MESSAGE}</UI.Item>
        ) : (
          sickList.map((sick) => (
            <SearchItem
              key={sick.sickCd}
              searchValue={searchValue}
              sick={sick}
            />
          ))
        )}
      </div>
    </div>
  );
}
