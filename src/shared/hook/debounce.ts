import { useEffect, useState } from "react";

const DefaultDelay = 500;

export const useDebounce = <T>(
  value: T,
  delay: number = DefaultDelay
): T | undefined => {
  const [debouncedValue, setDebouncedValue] = useState<T>();

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
};
