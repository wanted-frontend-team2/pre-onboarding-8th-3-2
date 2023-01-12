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

  const startLoading = () => setIsLoading(true);
  const endLoading = () => setIsLoading(false);

  const debouncedValue = useDebounce(inputValue);

  useEffect(() => {
    startLoading();

    const fetchSearchResults = async () => {
      startLoading();
      const { state, data } = await getSearchResults(debouncedValue);
      if (state === 'success') setSearchResults(data);
      endLoading();
    };

    if (debouncedValue) {
      fetchSearchResults();
      return;
    }

    setSearchResults([]);
  }, [debouncedValue]);

  console.log('랜더링');

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
