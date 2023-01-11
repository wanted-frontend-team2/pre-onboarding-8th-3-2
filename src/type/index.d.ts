export type SickList = {
  sickCd: string;
  sickNm: string;
};

export type SickListProps = {
  options: SickList[];
  handleDropDownClick: (clickedOption: string) => void;
  selected: number;
};
