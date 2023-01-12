import { Dispatch, SetStateAction } from 'react';
import { SearchResultType } from '../types';
import SearchItem from './SearchItem';

interface Props {
  searchResults: SearchResultType[];
  inputValue: string;
  setInputValue: Dispatch<SetStateAction<string>>;
}

function Recommendations({ searchResults, inputValue, setInputValue }: Props) {
  return (
    <div className='bg-white peer-focus-within/label:block hidden border'>
      {searchResults.map((sick) => (
        <SearchItem
          key={Math.random() * 100}
          sick={sick.sickNm}
          inputValue={inputValue}
          setInputValue={setInputValue}
        />
      ))}
    </div>
  );
}

export default Recommendations;
