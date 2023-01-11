import { SickListProps } from "../type";

function DropDown({ options, dropDownClickHandler, selected }: SickListProps) {
  return (
    <ul>
      {options.map((option, idx) => (
        <li
          key={option.sickCd}
          role="presentation"
          onClick={() => dropDownClickHandler(option.sickNm)}
          className={selected === idx ? "bg-gray-100" : ""}
        >
          {option.sickNm}
        </li>
      ))}
    </ul>
  );
}

export default DropDown;
