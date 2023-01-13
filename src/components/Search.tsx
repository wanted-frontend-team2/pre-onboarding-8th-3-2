import { useEffect, useState } from 'react';

import { useDebounce } from '../hooks/useDebounce';
import useSelectedIndex from '../hooks/useSelectedIndex';
import { SearchResultType } from '../types';
import getSearchResults from '../util/api';
import Recommendations from './Recommendations';
import SearchInput from './SearchInput';

function Search() {
  const [inputValue, setInputValue] = useState<string>('');
  const [searchResults, setSearchResults] = useState<SearchResultType[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const MAX_RECOMMENDATION = Number(process.env.REACT_APP_MAX_FETCH);
  const [
    selectedIndex,
    increaseSelectedIndex,
    decreaseSelectedIndex,
    clearSelectedIndex,
  ] = useSelectedIndex(searchResults, MAX_RECOMMENDATION);

  const debouncedValue = useDebounce(inputValue);

  useEffect(() => {
    setIsLoading(true);
    (async () => {
      setSearchResults([]);
      if (debouncedValue.length > 0) {
        setIsLoading(true);
        const { data } = await getSearchResults(
          debouncedValue,
          MAX_RECOMMENDATION,
        );
        setSearchResults(data);
        setIsLoading(false);
      }
    })();
  }, [debouncedValue]);

  return (
    <section className="relative mt-10">
      <SearchInput
        inputValue={inputValue}
        setInputValue={setInputValue}
        onArrowKeyDown={[decreaseSelectedIndex, increaseSelectedIndex]}
        selectedIndex={selectedIndex}
        searchResults={searchResults}
        onBlur={clearSelectedIndex}
      />
      <Recommendations
        inputValue={inputValue}
        setInputValue={setInputValue}
        searchResults={searchResults}
        selectedIndex={selectedIndex}
        isLoading={isLoading}
      />
    </section>
  );
}

export default Search;
