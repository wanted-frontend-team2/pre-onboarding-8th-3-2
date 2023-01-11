import { IoSearch } from "react-icons/io5";

type SearchBarProps = {
  searchTarget: string;
  setSearchTarget: (newWord: string) => void;
  onArrowKeyDown?: [() => void, () => void];
  onSubmit: () => void;
  placeholder: string;
};

export default function SearchBar({
  searchTarget,
  setSearchTarget,
  onArrowKeyDown = [() => {}, () => {}],
  onSubmit,
  placeholder,
}: SearchBarProps) {
  const [onArrowUp, onArrowDown] = onArrowKeyDown;
  const onKeyDown = (keyCode: string, isComposing: boolean) => {
    if (isComposing) return;
    if (keyCode === "ArrowUp") {
      onArrowUp();
    }
    if (keyCode === "ArrowDown") {
      onArrowDown();
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className="flex items-center w-full sm:h-14 h-11 rounded-full bg-white"
    >
      <IoSearch className="sm:m-5 m-3 sm:mr-4 mr-2 text-slate-800" />
      <input
        value={searchTarget}
        onChange={(e) => setSearchTarget(e.target.value)}
        onKeyDown={(e) => onKeyDown(e.code, e.nativeEvent.isComposing)}
        placeholder={placeholder}
        className="flex-grow bg-transparent sm:text-base text-sm text-slate-800 focus:outline-0"
      />
      <button
        type="submit"
        className="h-full sm:px-6 px-4 sm:pl-5 pl-3 sm:ml-5 ml-3 sm:text-base text-sm rounded-r-full text-white bg-[#007BE9] select-none"
      >
        검색
      </button>
    </form>
  );
}
