import { Dispatch, SetStateAction } from 'react';
import { AiFillCloseCircle, AiOutlineSearch } from 'react-icons/ai';
import { SearchResultType } from '../types';

interface Props {
  inputValue: string;
  setInputValue: Dispatch<SetStateAction<string>>;
  onArrowKeyDown?: [() => void, () => void];
  selectedIndex: number;
  searchResults: SearchResultType[];
  onBlur?: () => void;
}

function SearchInput({
  inputValue,
  setInputValue,
  onArrowKeyDown = [() => {}, () => {}],
  selectedIndex,
  searchResults,
  onBlur = () => {},
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
    if (e.code === 'Enter') {
      setInputValue(searchResults[selectedIndex].sickNm);
      e.preventDefault();
    }
  };

  return (
    <>
      <label className="peer/label mt-10" htmlFor="searchInput">
        <input
          id="searchInput"
          required
          className={`peer/input pl-7 pr-[100px] py-3 bg-white shadow-sm border-transparent placeholder-slate-400 focus:ring-2 focus:ring-[#007BE9] focus:outline-none ${
            inputValue.length === 0 && 'focus:ring-white'
          } block w-full rounded-3xl`}
          autoComplete="off"
          type="text"
          placeholder="질환명을 입력해주세요."
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          onKeyDown={onKeyDown}
          onBlur={onBlur}
        />
        <button
          className="peer-valid/input:visible invisible"
          type="button"
          onClick={() => setInputValue('')}
        >
          <AiFillCloseCircle className="absolute top-[10px] right-14 text-3xl text-[#BBB]" />
        </button>
      </label>
      <button type="button">
        <AiOutlineSearch className="absolute top-[5px] right-3 p-2 text-4xl text-white rounded-full bg-[#007BE9]" />
      </button>
    </>
  );
}

export default SearchInput;
