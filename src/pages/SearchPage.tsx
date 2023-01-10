import { IoSearch } from "react-icons/io5";

export default function SearchPage() {
  return (
    <div className="flex justify-center items-center w-full min-h-screen bg-[#CAE9FF]">
      <div className="flex w-full justify-center">
        <div className="flex flex-col items-center w-full max-w-2xl px-16">
          <h1 className="flex mb-9 text-center font-bold text-3xl leading-relaxed">
            국내 모든 임상시험 검색하고
            <br />
            온라인으로 참여하기
          </h1>
          <div className="relative w-full pb-52">
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
            <div className="absolute top: w-full px-5 py-4 mt-3 rounded-2xl bg-white text-slate-800">
              <p className="py-1 text-xs text-slate-500 select-none">
                추천 검색어
              </p>
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
          </div>
        </div>
      </div>
    </div>
  );
}
