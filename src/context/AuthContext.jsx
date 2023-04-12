import React from "react";
import { createContext, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../confgurations/custom_hook/useLocalStorage";
import { LOCAL_STORAGE_KEYS } from "../confgurations/constants";
import jwtDecode from "jwt-decode";
import { VWaterPaths } from "../confgurations/paths/vwaterPath";

// create context
const AuthContext = createContext();

function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [token, setToken] = useLocalStorage(LOCAL_STORAGE_KEYS.Token, null);

  const setAccessToken = (data) => {
    setToken(data);
    navigate(VWaterPaths.home, { replace: true });
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem(LOCAL_STORAGE_KEYS.Token);
    navigate(VWaterPaths.login, { replace: true });
  };

  // if (token && token !== null) {
  //   const { exp } = jwtDecode(token);
  //   const expirationTime = exp * 1000 - 60000;
  //   if (Date.now() >= expirationTime) {
  //     logout();
  //   }
  // }

  const value = useMemo(
    () => ({
      token,
      setAccessToken,
      logout,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [token]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider;

export const AuthConsumer = () => {
  return useContext(AuthContext);
};
