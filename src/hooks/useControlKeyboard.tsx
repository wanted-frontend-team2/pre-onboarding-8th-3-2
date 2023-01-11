interface IMethodsType {
  [key: string]: () => void;
  ArrowUp: () => void;
  ArrowDown: () => void;
}

export const useControlKeyboard = (arrowMethods: IMethodsType) => {
  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const { key } = e;
    const keyMethod = arrowMethods[key];

    if (!keyMethod) return;
    keyMethod();
  };

  return {
    onKeyDown,
  };
};
