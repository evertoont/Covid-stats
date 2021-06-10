import { createContext, useState } from "react";

export const MyContext = createContext();

export const UseProvider = ({ children }) => {
  const [stateInput, setStateInput] = useState("");

  return (
    <MyContext.Provider value={{ stateInput, setStateInput }}>
      {children}
    </MyContext.Provider>
  );
};
