import { useEffect, useState } from "react";

export const useDebounce = (value, delay) => {
  const [debounceValue, setDebounceValue] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return debounceValue;
};
