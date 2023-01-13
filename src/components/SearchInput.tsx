import { Dispatch, SetStateAction } from 'react';

interface Props {
  inputValue: string;
  setInputValue: Dispatch<SetStateAction<string>>;
  onArrowKeyDown?: [() => void, () => void];
}

function SearchInput({
  inputValue,
  setInputValue,
  onArrowKeyDown = [() => {}, () => {}],
}: Props) {
  const [onArrowUp, onArrowDown] = onArrowKeyDown;
  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.nativeEvent.isComposing) return;
    if (e.code === 'ArrowUp') {
      onArrowUp();
      e.preventDefault();
    }
    if (e.code === 'ArrowDown') {
      onArrowDown();
      e.preventDefault();
    }
  };

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
          onKeyDown={onKeyDown}
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
