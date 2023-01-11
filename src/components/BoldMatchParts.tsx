function BoldMatchParts(inputWord: string, resultWord: string): JSX.Element[] {
  return resultWord
    .split(new RegExp(`(${inputWord})`, "gi"))
    .map((splittedParts) =>
      splittedParts.toLowerCase() === inputWord.toLowerCase() ? (
        <span className="font-bold">{inputWord}</span>
      ) : (
        <span>{splittedParts}</span>
      )
    );
}

export default BoldMatchParts;
