import { useEffect, useState } from 'react';
import Recommendations from '../components/Recommendations';
import SearchInput from '../components/SearchInput';
import { SearchResultType } from '../types';
import getSearchResults from '../util/api';

function Home() {
  const [inputValue, setInputValue] = useState<string>('');
  const [searchResults, setSearchResults] = useState<SearchResultType[]>([]);

  useEffect(() => {
    const fetchSearchResults = async () => {
      const { state, data } = await getSearchResults(inputValue);
      if (state === 'success') setSearchResults(data);
    };

    if (inputValue) fetchSearchResults();

    setSearchResults([]);
  }, [inputValue]);

  return (
    <main className='fixed bg-sky-100 w-full h-full'>
      <SearchInput inputValue={inputValue} setInputValue={setInputValue} />
      <Recommendations
        inputValue={inputValue}
        setInputValue={setInputValue}
        searchResults={searchResults}
      />
    </main>
  );
}

export default Home;
