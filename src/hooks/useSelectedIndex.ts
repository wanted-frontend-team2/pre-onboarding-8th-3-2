import { useState, useEffect } from 'react';

export default function useSelectedIndex(
  list: object[],
  maxIndex: number,
): [number, () => void, () => void] {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const increaseSelectedIndex = () => {
    const lastIndex = list.length > maxIndex ? maxIndex - 1 : list.length - 1;
    if (selectedIndex >= lastIndex) setSelectedIndex(0);
    else setSelectedIndex(prevIndex => prevIndex + 1);
  };

  const decreaseSelectedIndex = () => {
    const lastIndex = list.length > maxIndex ? maxIndex - 1 : list.length - 1;
    if (selectedIndex <= 0) setSelectedIndex(lastIndex);
    else setSelectedIndex(prevIndex => prevIndex - 1);
  };

  useEffect(() => {
    setSelectedIndex(-1);
  }, list);

  return [selectedIndex, increaseSelectedIndex, decreaseSelectedIndex];
}
