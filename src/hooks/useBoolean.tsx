import { useState } from "react";

export const useBoolean = (initialState = false) => {
  const [isBoolean, setIsBoolean] = useState(initialState);

  const setTrue = () => setIsBoolean(true);
  const setFalse = () => setIsBoolean(false);
  const setToggle = () => setIsBoolean((pre) => !pre);

  return {
    isBoolean,
    setTrue,
    setFalse,
    setToggle,
  };
};
