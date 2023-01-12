import { Dispatch, SetStateAction } from 'react';
import { SearchResultType } from '../types';
import SearchItem from './SearchItem';
import Spinner from './spinner';

interface Props {
  searchResults: SearchResultType[];
  inputValue: string;
  setInputValue: Dispatch<SetStateAction<string>>;
  isLoading: boolean;
}

function Recommendations({
  searchResults,
  inputValue,
  setInputValue,
  isLoading,
}: Props) {
  return (
    <ul className='h-[500px] bg-white peer-focus-within/label:block hidden border'>
      <h3>추천검색어</h3>
      {searchResults.map((sick) => (
        <SearchItem
          key={sick.sickCd}
          sick={sick.sickNm}
          inputValue={inputValue}
          setInputValue={setInputValue}
        />
      ))}
      {inputValue && <li>검색어 없음</li>}
      {isLoading && inputValue && <Spinner />}
    </ul>
  );
}

export default Recommendations;
