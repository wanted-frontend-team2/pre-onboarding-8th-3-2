import { useState, useEffect } from "react";

import { SickListProps } from "../types";
import searchImg from "../images/search.svg";

function DropDown({
  hasText,
  options,
  dropDownClickHandler,
  selected,
}: SickListProps) {
  const [isHasOptions, setIsHasOptions] = useState(false);

  useEffect(() => {
    if (options.length === 0) setIsHasOptions(false);
    else setIsHasOptions(true);
  });

  return (
    <section className="flex flex-col justify-center w-96 h-full max-h-96 mb-10 p-2 bg-white rounded-xl">
      {hasText && isHasOptions && <p className="my-2">추천 검색어</p>}
      <ul className="overflow-auto">
        {!isHasOptions && <p className="my-2">검색어 없음</p>}
        {isHasOptions &&
          options.map((option, idx) => (
            <li
              key={option.sickCd}
              role="presentation"
              onClick={() => dropDownClickHandler(option.sickNm)}
              className={`${
                selected === idx && "bg-gray-100"
              } flex itmes-center p-2 mb-2 hover:bg-gray-100 cursor-pointer`}
            >
              <img src={searchImg} alt="searchImg" className="w-6 mr-1" />
              <p>{option.sickNm}</p>
            </li>
          ))}
      </ul>
    </section>
  );
}

export default DropDown;
