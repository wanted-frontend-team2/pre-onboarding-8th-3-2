/* eslint-disable @typescript-eslint/no-unused-vars */
import { Dispatch, SetStateAction } from 'react';

interface Props {
  sick: string;
  inputValue: string;
  setInputValue: Dispatch<SetStateAction<string>>;
  isSelected: boolean;
}

function RecommendationItem({
  sick,
  inputValue,
  setInputValue,
  isSelected,
}: Props) {
  const fullWord = sick
    .split(new RegExp(`(${inputValue})`, 'gi'))
    .map(splittedParts =>
      splittedParts.toLowerCase() === inputValue.toLowerCase() ? (
        <strong>{inputValue}</strong>
      ) : (
        splittedParts
      ),
    );
  return <li>{fullWord}</li>;
}

export default RecommendationItem;
