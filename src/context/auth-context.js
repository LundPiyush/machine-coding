import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [name, setName] = useState("piyush");
  return (
    <AuthContext.Provider value={{ name }}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
