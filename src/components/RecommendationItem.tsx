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
  return (
    <li
      role="presentation"
      onClick={() => setInputValue(sick)}
      className={`flex py-1.5 items-center cursor-pointer ${
        isSelected && 'bg-blue-200'
      }`}
    >
      {fullWord}
    </li>
  );
}

export default RecommendationItem;
