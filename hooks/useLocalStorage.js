// import { useState } from "react";

// const useLocalStorage = (key, initialValue) => {
//   const [storedData, setStoredData] = useState(() => {
//     const data = JSON.parse(window.localStorage.getItem(key));

//     return data || initialValue;
//   });

//   const setValue = (value) => {
//     setStoredData(value);

//     window.localStorage.setItem(key, JSON.stringify(value));
//   };

//   return [storedData, setValue];
// };

// export default useLocalStorage;

const useStorage = () => {
  const isBrowser = (() => typeof window !== "undefined")();

  const getItem = (key, type) => {
    const storageType = `${type ?? "session"}Storage`;
    return isBrowser ? window[storageType][key] : "";
  };

  return {
    getItem,
  };
};

export default useStorage;
