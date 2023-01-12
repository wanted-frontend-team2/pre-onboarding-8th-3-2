import { useEffect, useState } from 'react';
import { SearchResultType } from '../types';
import getSearchResults from '../util/api';
import Recommendations from './Recommendations';
import SearchInput from './SearchInput';

function Search() {
  const [inputValue, setInputValue] = useState<string>('');
  const [searchResults, setSearchResults] = useState<SearchResultType[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchSearchResults = async () => {
      const { state, data } = await getSearchResults(inputValue);
      if (state === 'success') setSearchResults(data);
      setIsLoading(false);
    };

    if (inputValue) fetchSearchResults();

    setSearchResults([]);
  }, [inputValue]);

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
