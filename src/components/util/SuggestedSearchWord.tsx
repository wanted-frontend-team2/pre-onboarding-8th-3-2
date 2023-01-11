import { IoSearch } from "react-icons/io5";

type Disease = {
  sickCd: string;
  sickNm: string;
};

type SuggestedSearchWordProps = {
  searchTarget: string;
  suggestedWords: Disease[];
};

export default function SuggestedSearchWord({
  searchTarget,
  suggestedWords,
}: SuggestedSearchWordProps) {
  const boldSpecificWord = (baseString: string, targetString: string) => {
    const startIndex = baseString.indexOf(targetString);

    if (startIndex < 0) return baseString;

    const beforeTarget = baseString.slice(0, startIndex);
    const afterTarget = baseString.slice(startIndex + targetString.length);

    return (
      <>
        {beforeTarget}
        <strong>{targetString}</strong>
        {afterTarget}
      </>
    );
  };

  return (
    <div className="absolute top: w-full px-5 py-4 mt-3 rounded-2xl bg-white text-slate-800">
      <p className="py-1 text-xs text-slate-500 select-none">추천 검색어</p>
      {suggestedWords.length < 1 ? (
        <p className="py-1.5 text-slate-400 select-none">검색어 없음</p>
      ) : (
        suggestedWords.slice(0, 7).map((disease) => (
          <div
            key={disease.sickCd}
            className="flex py-1.5 items-center cursor-pointer"
          >
            <IoSearch />
            <span className="pl-2">
              {boldSpecificWord(disease.sickNm, searchTarget)}
            </span>
          </div>
        ))
      )}
    </div>
  );
}
