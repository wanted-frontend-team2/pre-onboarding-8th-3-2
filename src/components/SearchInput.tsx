import { Dispatch, SetStateAction } from 'react';

interface Props {
  inputValue: string;
  setInputValue: Dispatch<SetStateAction<string>>;
}

function SearchInput({ inputValue, setInputValue }: Props) {
  return (
    <>
      <label
        className="peer/label relative border border-red-300"
        htmlFor="searchInput"
      >
        <input
          id="searchInput"
          required
          className=" peer/input border"
          autoComplete="off"
          type="text"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
        />
        <button
          className="right-3 peer-valid/input:visible absolute invisible"
          type="button"
          onClick={() => setInputValue('')}
        >
          X
        </button>
      </label>
      <button type="button">검색</button>
    </>
  );
}

export default SearchInput;
