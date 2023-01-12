export const checkIsBold = (
  letter: string,
  inputValue: string
): { isBold: boolean; letter: string } => {
  const isBold = inputValue.toLowerCase().includes(letter.toLowerCase());
  if (isBold) return { isBold: true, letter };
  return { isBold: false, letter };
};
