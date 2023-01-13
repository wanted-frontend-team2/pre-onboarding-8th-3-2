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
    (async () => {
      setSearchResults([]);
      if (inputValue.length > 0) {
        const data = await getSearchResults(inputValue);
        setSearchResults(data);
        setIsLoading(false);
      }
    })();
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
