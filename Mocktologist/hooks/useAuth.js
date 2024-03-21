import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const [userId, setUserId] = useState("");
  const [firstName, setFirstName] = useState("");

  return (
    <AuthContext.Provider value={{ token, setToken, userId, setUserId, firstName, setFirstName }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);