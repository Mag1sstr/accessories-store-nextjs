import { useEffect, useState } from "react";

export function useDebounce(value: string, delay: number) {
  const [debounceVal, setDebounceVal] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceVal(value);
    }, delay);

    return () => clearTimeout(timer);
  }, [value]);

  return debounceVal;
}
