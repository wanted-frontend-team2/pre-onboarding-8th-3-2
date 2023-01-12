import axios from "axios";

import { SickList, SickListCache } from "../types/index";

function cacheTypeFunc(inputValue: string, sickList?: SickList[]) {
  return {
    [inputValue]: sickList,
  };
}

function cacheFunc(
  func: (inputValue: string, sickList?: SickList[]) => SickListCache
) {
  const cache = new Map();

  return async (inputValue: string) => {
    if (cache.has(inputValue)) {
      console.log("return cache");

      return cache.get(inputValue);
    }
    console.info("calling api");

    const res = await axios.get(`http://localhost:4000/sick?q=${inputValue}`);
    const data = await res.data;

    const filterRegex = new RegExp(inputValue, "i");
    const resultOptions = data.filter((option: SickList) =>
      option.sickNm.match(filterRegex)
    );

    const result = func(inputValue, resultOptions);
    cache.set(inputValue, resultOptions);
    return result;
  };
}

const cachedFunc = cacheFunc(cacheTypeFunc);

export default cachedFunc;
