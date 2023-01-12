import { lazy, useState, useEffect } from "react";

import cachedFunc from "./cacheFunc";
import { SickList } from "../types";
import removeImg from "../images/remove.svg";

const DropDown = lazy(() => import("./DropDown"));

function SearchBar() {
  const [inputValue, setInputValue] = useState<string>("");
  const [hasText, setHasText] = useState<boolean>(false);
  const [options, setOptions] = useState<SickList[]>([]);
  const [selected, setSelected] = useState<number>(-1);
  const [isError, setIsError] = useState<boolean>(false);
  const [inputTouched, setInputTouched] = useState<boolean>(false);

  useEffect(() => {
    if (inputValue === "") {
      setHasText(false);
      setOptions([]);
    }
  }, [inputValue]);

  const inputValueChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setInputValue(value);

    return value ? setHasText(true) : setHasText(false);
  };

  const inputFocusHandler = () => {
    setTimeout(() => {
      setInputTouched(true);
    }, 200);
  };

  const inputBlurHandler = () => {
    setTimeout(() => {
      setInputTouched(false);
    }, 200);
  };

  const inputValueRemoveHandler = () => {
    setInputValue("");
    setOptions([]);
  };

  const sickData = async (value: string) => {
    try {
      const cacheItems = await cachedFunc(value);

      if (Array.isArray(cacheItems)) setOptions(cacheItems);
      else setOptions(cacheItems[value]);

      setIsError(false);
    } catch (err) {
      setIsError(true);
    }
  };

  useEffect(() => {
    const debounce = setTimeout(() => {
      if (inputValue) sickData(inputValue);
    }, 500);
    return () => {
      clearTimeout(debounce);
    };
  }, [inputValue]);

  const dropDownClickHandler = (clickedOption: string) => {
    setInputValue(clickedOption);
    const resultOptions = options.filter(
      (option: SickList) => option.sickNm === clickedOption
    );
    setOptions(resultOptions);
  };

  const dropDownKeyUpHandler = (e: React.KeyboardEvent<HTMLElement>) => {
    if (hasText) {
      if (e.code === "ArrowDown" && options.length - 1 > selected) {
        setSelected(selected + 1);
      }
      if (e.code === "ArrowUp" && selected >= 0) {
        setSelected(selected - 1);
      }
      if (e.code === "Enter" && selected >= 0) {
        dropDownClickHandler(options[selected].sickNm);
        setSelected(-1);
      }
    }
  };

  return (
    <div
      role="presentation"
      onKeyUp={dropDownKeyUpHandler}
      className="flex flex-col justify-center items-center"
    >
      <section className="mb-3">
        <label htmlFor="inputValue" className=" relative ">
          <input
            id="inputValue"
            type="text"
            placeholder="질환명을 입력해 주세요."
            value={inputValue}
            onChange={inputValueChangeHandler}
            onFocus={inputFocusHandler}
            onBlur={inputBlurHandler}
            className="w-96 p-4 rounded-full"
          />
          <button
            type="button"
            onClick={inputValueRemoveHandler}
            className="absolute top-[-3px] right-2"
          >
            <img src={removeImg} alt="removeImg" className="w-6" />
          </button>
        </label>
      </section>
      {inputTouched && !isError && (
        <DropDown
          hasText={hasText}
          options={options}
          dropDownClickHandler={dropDownClickHandler}
          selected={selected}
        />
      )}
      {isError && <p>에러가 발생하여 리스트를 가져올 수 없습니다.</p>}
    </div>
  );
}

export default SearchBar;
