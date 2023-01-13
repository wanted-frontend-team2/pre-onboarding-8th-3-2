import { Dispatch, SetStateAction } from 'react';

import { SearchResultType } from '../types';
import RecommendationItem from './RecommendationItem';
import Spinner from './Spinner';

interface Props {
  searchResults: SearchResultType[];
  inputValue: string;
  setInputValue: Dispatch<SetStateAction<string>>;
  selectedIndex: number;
  isLoading: boolean;
}

function Recommendations({
  searchResults,
  inputValue,
  setInputValue,
  selectedIndex,
  isLoading,
}: Props) {
  return (
    <div className="max-h-[400px] bg-white peer-focus-within/label:block px-7 py-5 rounded-2xl overflow-auto hidden">
      <p className="font-bold">{inputValue}</p>
      <h3 className="mt-2 text-sm text-[#BBB]">추천검색어</h3>
      <ul>
        {searchResults.map((sick, index) => (
          <RecommendationItem
            key={sick.sickCd}
            sick={sick.sickNm}
            inputValue={inputValue}
            setInputValue={setInputValue}
            isSelected={index === selectedIndex}
          />
        ))}
        {!isLoading && !searchResults.length && <li>검색어 없음</li>}
        {isLoading && inputValue.length > 0 && <Spinner />}
      </ul>
    </div>
  );
}

export default Recommendations;
