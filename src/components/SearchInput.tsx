import { Dispatch, SetStateAction } from 'react';

interface Props {
  inputValue: string;
  setInputValue: Dispatch<SetStateAction<string>>;
}

function SearchInput({ inputValue, setInputValue }: Props) {
  return (
    <>
      <label
        className='peer/label border-red-300 border relative'
        htmlFor='searchInput'
      >
        <input
          id='searchInput'
          required
          className=' peer/input border '
          autoComplete='off'
          type='text'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          className='absolute right-3 peer-valid/input:visible invisible'
          type='button'
          onClick={() => setInputValue('')}
        >
          X
        </button>
      </label>
      <button type='button'>검색</button>
    </>
  );
}

export default SearchInput;
