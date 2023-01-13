import { useEffect, useState } from 'react';

import { useDebounce } from '../hooks/useDebounce';
import { SearchResultType } from '../types';
import getSearchResults from '../util/api';
import Recommendations from './Recommendations';
import SearchInput from './SearchInput';

function Search() {
  const [inputValue, setInputValue] = useState<string>('');
  const [searchResults, setSearchResults] = useState<SearchResultType[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const debouncedValue = useDebounce(inputValue);

  useEffect(() => {
    setIsLoading(true);
    (async () => {
      setSearchResults([]);
      if (debouncedValue.length > 0) {
        setIsLoading(true);
        const { data } = await getSearchResults(debouncedValue);
        setSearchResults(data);
        setIsLoading(false);
      }
    })();
  }, [debouncedValue]);

  return (
    <section>
      <SearchInput inputValue={inputValue} setInputValue={setInputValue} />
      <Recommendations
        inputValue={inputValue}
        setInputValue={setInputValue}
        searchResults={searchResults}
        isLoading={isLoading}
      />
    </section>
  );
}

export default Search;
