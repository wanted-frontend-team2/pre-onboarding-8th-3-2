import { Dispatch, SetStateAction } from 'react';

interface Props {
  inputValue: string;
  setInputValue: Dispatch<SetStateAction<string>>;
}

function SearchInput({ inputValue, setInputValue }: Props) {
  return (
    <input
      type='text'
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
    />
  );
}

export default SearchInput;
