import { IoSearch } from "react-icons/io5";

type SearchBarProps = {
  searchTarget: string;
  setSearchTarget: (newWord: string) => void;
  onSubmit: () => void;
  placeholder: string;
};

export default function SearchBar({
  searchTarget,
  setSearchTarget,
  onSubmit,
  placeholder,
}: SearchBarProps) {
  return (
    <form
      onSubmit={onSubmit}
      className="flex items-center w-full h-14 rounded-full bg-white"
    >
      <IoSearch className="m-5 mr-4 text-slate-800" />
      <input
        value={searchTarget}
        onChange={(e) => setSearchTarget(e.target.value)}
        placeholder={placeholder}
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
