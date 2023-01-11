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

export type PropsType = {
  children: React.ReactNode;
};

export type SickListCache = {
  [inputValue]: {
    sickCd: string;
    sickNm: string;
  };
};
