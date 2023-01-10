import { useState } from "react";

export const useCounter = () => {
  const [counter, setCounter] = useState(0);
  const value = parseInt(counter);

  const increment = () => {
    return setCounter(value + 1);
  };

  const decrement = () => {
    return setCounter(value - 1);
  };

  const reset = () => {
    return setCounter(0);
  };

  const setCount = (val) => {
    return setCounter(val);
  };

  return [increment, decrement, reset, setCount, counter];
};
