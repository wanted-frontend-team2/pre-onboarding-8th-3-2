export type SickList = {
  sickCd: string;
  sickNm: string;
};

export type SickListProps = {
  hasText: boolean;
  options: SickList[];
  dropDownClickHandler: (clickedOption: string) => void;
  selected: number;
};

type PropsType = {
  children: React.ReactNode;
};
