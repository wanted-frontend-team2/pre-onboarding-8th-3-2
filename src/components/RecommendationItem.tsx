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
  const boldSickName = (sickName: string, targetValue: string) => {
    const firstIndex = sickName.indexOf(targetValue);
    if (firstIndex < 0) return sickName;

    const beforeName = sickName.slice(0, firstIndex);
    const restName = sickName.slice(firstIndex + targetValue.length);

    console.log(firstIndex, 'first');
    return (
      <>
        {beforeName}
        <strong>{targetValue}</strong>
        {restName}
      </>
    );
  };

  return (
    <li
      role="presentation"
      onClick={() => setInputValue(sick)}
      className={`flex py-1.5 items-center cursor-pointer ${
        isSelected && 'bg-blue-200'
      }`}
    >
      {boldSickName(sick, inputValue)}
    </li>
  );
}

export default RecommendationItem;
