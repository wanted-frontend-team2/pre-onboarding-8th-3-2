import { IoSearch } from "react-icons/io5";

export default function SuggestedSearchWords() {
  return (
    <div className="absolute top: w-full px-5 py-4 mt-3 rounded-2xl bg-white text-slate-800">
      <p className="py-1 text-xs text-slate-500 select-none">추천 검색어</p>
      {/* <p className="py-1.5 text-slate-400 select-none">검색어 없음</p> */}
      <div className="flex py-1.5 items-center cursor-pointer">
        <IoSearch />
        <span className="pl-2">
          <strong>간</strong>질
        </span>
      </div>
      <div className="flex py-1.5 items-center cursor-pointer">
        <IoSearch />
        <span className="pl-2">
          <strong>간</strong>암
        </span>
      </div>
      <div className="flex py-1.5 items-center cursor-pointer">
        <IoSearch />
        <span className="pl-2">
          <strong>간</strong>염
        </span>
      </div>
      <div className="flex py-1.5 items-center cursor-pointer">
        <IoSearch />
        <span className="pl-2">
          <strong>간</strong>성
        </span>
      </div>
      <div className="flex py-1.5 items-center cursor-pointer">
        <IoSearch />
        <span className="pl-2">
          <strong>간</strong>경화
        </span>
      </div>
      <div className="flex py-1.5 items-center cursor-pointer">
        <IoSearch />
        <span className="pl-2">
          <strong>간</strong>석증
        </span>
      </div>
      <div className="flex py-1.5 items-center cursor-pointer">
        <IoSearch />
        <span className="pl-2">
          <strong>간</strong>농양
        </span>
      </div>
    </div>
  );
}
