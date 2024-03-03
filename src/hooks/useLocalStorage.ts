import { useState, useEffect } from "react";

export function useLocalStorage(initialState: string[], key: string) {
  const [value, setValue] = useState(function () {
    const storedValue = localStorage.getItem(key);

    return storedValue ? JSON.parse(storedValue) : initialState;
  });

  useEffect(
    function () {
      localStorage.setItem("history", JSON.stringify(value));
    },
    [value, key]
  );

  return [value, setValue];
}
