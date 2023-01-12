import { Dispatch, SetStateAction } from 'react';

interface Props {
  sick: string;
  inputValue: string;
  setInputValue: Dispatch<SetStateAction<string>>;
}

function Recommendation({ sick, inputValue, setInputValue }: Props) {
  const firstIndex = sick
    .split('')
    .findIndex((letter) => letter === inputValue[0]);
  const beforeLetters = sick.slice(0, firstIndex).trim();
  const restLetters = sick.slice(firstIndex + inputValue.length).trim();

  return (
    <li role='presentation' onClick={() => setInputValue(sick)}>
      {beforeLetters}
      <strong>{inputValue}</strong>
      {restLetters}
    </li>
  );
}

export default Recommendation;
