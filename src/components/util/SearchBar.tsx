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
      className="flex items-center w-full h-14 rounded-full bg-white"
    >
      <IoSearch className="m-5 mr-4 text-slate-800" />
      <input
        value={searchTarget}
        onChange={(e) => setSearchTarget(e.target.value)}
        onKeyDown={(e) => onKeyDown(e.code, e.nativeEvent.isComposing)}
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
