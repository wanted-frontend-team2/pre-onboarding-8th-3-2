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
    .replace(/([.?*+^$[\]\\(){}|-])/g, '')
    .split(new RegExp(`(${inputValue})`, 'gi'))
    .map(splittedParts =>
      splittedParts.toLowerCase() === inputValue.toLowerCase() ? (
        <strong key={Math.random()} className="text-[#007BE9]">
          {inputValue}
        </strong>
      ) : (
        splittedParts
      ),
    );
  return (
    <li
      role="presentation"
      onClick={() => setInputValue(sick)}
      className={`py-1.5 cursor-pointer ${isSelected && 'bg-blue-200'}`}
    >
      {fullWord}
    </li>
  );
}

export default RecommendationItem;
