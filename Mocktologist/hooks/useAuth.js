import { createContext, useContext, useMemo } from "react";
import { useLocalStorage } from "./useAsyncStorage";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useLocalStorage("token", null);
  const [userid, setUserId] = useLocalStorage("userid", null);
  const [firstName, setFirstName] = useLocalStorage("firstName", null);

  const login = async (data) => {
    setToken(data.token);
    setUserId(data.user);
    setFirstName(data.fname)
  };

  const logout = () => {
    setToken(null);
    setFirstName(null)
    setUserId(null)
  };

  const value = useMemo(
    () => ({
      token,
      userid,
      firstName,
      login,
      logout,
    }),
    [token]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};