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
  const firstIndex = sick
    .split('')
    .findIndex(letter => letter === inputValue[0]);
  const beforeLetters = sick.slice(0, firstIndex).trim();
  const restLetters = sick.slice(firstIndex + inputValue.length).trim();

  return (
    <li
      role="presentation"
      onClick={() => setInputValue(sick)}
      className={`flex py-1.5 items-center cursor-pointer ${
        isSelected && 'bg-blue-200'
      }`}
    >
      {beforeLetters}
      <strong className="text-[#007BE9]">{inputValue}</strong>
      {restLetters}
    </li>
  );
}

export default RecommendationItem;
