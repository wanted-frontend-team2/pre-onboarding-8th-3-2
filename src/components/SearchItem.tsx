interface Props {
  sick: string;
  inputValue: string;
}

function SearchItem({ sick, inputValue }: Props) {
  const value = inputValue;
  return <div>{sick}</div>;
}

export default SearchItem;
