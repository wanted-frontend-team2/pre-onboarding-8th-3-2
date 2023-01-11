import { SickListProps } from "../type";

function DropDown({ options }: SickListProps) {
  return (
    <ul>
      {options.map((option) => (
        <li key={option.sickCd}>{option.sickNm}</li>
      ))}
    </ul>
  );
}

export default DropDown;
