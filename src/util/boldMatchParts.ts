function boldMatchParts(inputWord: string, resultWord: string) {
  const matchIndex = resultWord.indexOf(inputWord);

  return [
    resultWord.slice(0, matchIndex),
    resultWord.slice(matchIndex + inputWord.length),
  ];
}

export default boldMatchParts;
