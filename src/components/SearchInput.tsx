import React, { ChangeEvent, Dispatch, SetStateAction } from "react";
import { AiFillCloseCircle, AiOutlineSearch } from "react-icons/ai";

interface Props {
  searchText: string;
  setSearchText: Dispatch<SetStateAction<string>>;
  handleChangeText: (e: ChangeEvent<HTMLInputElement>) => void;
}
function SearchInput({ searchText, setSearchText, handleChangeText }: Props) {
  return (
    <div className="relative mt-10">
      <input
        className="px-7 py-3 bg-white border shadow-sm border-transparent placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue block w-full rounded-3xl"
        type="text"
        placeholder="질환명을 입력해주세요."
        value={searchText}
        onChange={handleChangeText}
      />
      <div>
        {searchText && (
          <AiFillCloseCircle
            className="absolute top-3 right-14 text-3xl text-grayB"
            onClick={() => setSearchText("")}
          />
        )}
        <AiOutlineSearch className="absolute top-2 right-3 p-2 text-4xl text-white rounded-full bg-blue" />
      </div>
    </div>
  );
}

export default SearchInput;
