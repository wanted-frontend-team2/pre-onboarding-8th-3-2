export type SickList = {
  sickCd: string;
  sickNm: string;
};

export type SickListProps = {
  options: SickList[];
  dropDownClickHandler: (clickedOption: string) => void;
  selected: number;
};
