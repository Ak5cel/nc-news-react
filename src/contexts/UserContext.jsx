import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [currentUser, setCurrentUser] = useState("grumpy19"); // hardcoded until auth is implemented

  return <UserContext.Provider value={{ currentUser, setCurrentUser }}>{props.children}</UserContext.Provider>;
};
