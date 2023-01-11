import React, { useState, useEffect } from "react";
import axios from "axios";

import { SickList } from "../type";

import DropDown from "./DropDown";

function SearchBar() {
  const [inputValue, setInputValue] = useState<string>("");
  const [hasText, setHasText] = useState<boolean>(false);
  const [options, setOptions] = useState<SickList[]>([]);

  useEffect(() => {
    if (inputValue === "") {
      setHasText(false);
    }
  }, [inputValue]);

  const inputValueChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setInputValue(value);

    return value ? setHasText(true) : setHasText(false);
  };

  const inputValueRemoveHandler = () => {
    setInputValue("");
  };

  const sickData = async (sickName: string) => {
    try {
      const res = await axios.get(`http://localhost:4000/sick?q=${sickName}`);
      const data = await res.data;

      const filterRegex = new RegExp(sickName, "i");
      const resultOptions = data.filter((option: SickList) =>
        option.sickNm.match(filterRegex)
      );
      setOptions(resultOptions);
    } catch (err) {
      console.log("err", err);
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

  return (
    <div>
      <section>
        <input
          type="text"
          placeholder="질환명을 입력해 주세요."
          value={inputValue}
          onChange={inputValueChangeHandler}
        />
        <button type="button" onClick={inputValueRemoveHandler}>
          &times;
        </button>
      </section>
      {hasText && <DropDown options={options} />}
    </div>
  );
}

export default SearchBar;
