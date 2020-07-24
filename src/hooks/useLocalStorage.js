import { useState } from "react";

export const useLocalStorage = key => {
  const [value, setValue] = useState(window.localStorage.getItem(key));

  const handleChanges = e => {
    setStateAndLocalStorage(e.target.value);
  };

  const setStateAndLocalStorage = newValue => {
    setValue(newValue); // updates React State
    window.localStorage.setItem(key, newValue); // updates local storage
  };

  return [value, setStateAndLocalStorage, handleChanges];
};