import React, { useState, useEffect } from "react";

function SearchBar() {
  const [inputValue, setInputValue] = useState<string>("");
  const [hasText, setHasText] = useState<boolean>(false);

  useEffect(() => {
    if (inputValue === "") {
      setHasText(false);
    }
  }, [inputValue]);

  const inputValueÇhangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setInputValue(value);

    return value ? setHasText(true) : setHasText(false);
  };

  const inputValueRemoveHandler = () => {
    setInputValue("");
  };

  console.log(hasText);
  return (
    <div>
      <section>
        <input
          type="text"
          placeholder="질환명을 입력해 주세요."
          value={inputValue}
          onChange={inputValueÇhangeHandler}
        />
        <button type="button" onClick={inputValueRemoveHandler}>
          &times;
        </button>
      </section>
    </div>
  );
}

export default SearchBar;
