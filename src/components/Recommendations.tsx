import { Dispatch, SetStateAction } from 'react';
import { SearchResultType } from '../types';
import SearchItem from './Recommendation';
import Spinner from './Spinner';

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
      {inputValue.length > 0 && searchResults.length <= 0 && (
        <li>검색어 없음</li>
      )}
      {isLoading && inputValue.length > 0 && <Spinner />}
    </ul>
  );
}

export default Recommendations;
