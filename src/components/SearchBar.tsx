import { IoSearch } from "react-icons/io5";

export default function SearchBar() {
  return (
    <form className="flex items-center w-full h-14 rounded-full bg-white">
      <IoSearch className="m-5 mr-4 text-slate-800" />
      <input
        placeholder="질환명을 입력해 주세요."
        className="flex-grow bg-transparent text-slate-800 focus:outline-0"
      />
      <button
        type="submit"
        className="h-full px-6 pl-5 ml-5 rounded-r-full text-white bg-[#007BE9] select-none"
      >
        검색
      </button>
    </form>
  );
}
