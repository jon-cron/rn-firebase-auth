import React, { createContext, useState } from "react";

export const AuthContext = createContext({
  // NOTE all this does is help with intelisense
  token: "",
  isAuthenticated: false,
  authenticate: (token) => {},
  logout: () => {},
});
const AuthContextProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState();

  const authenticate = (token) => {
    setAuthToken(token);
  };
  const logout = () => {
    setAuthToken(null);
  };
  const value = {
    token: authToken,
    isAuthenticated: !!authToken,
    authenticate: authenticate,
    logout: logout,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
export default AuthContextProvider;
