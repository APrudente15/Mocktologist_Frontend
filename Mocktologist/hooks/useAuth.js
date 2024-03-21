import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const [userId, setUserId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [vegan, setVegan] = useState(false);
  const [image, setImage] = useState("");

  return (
    <AuthContext.Provider value={{ token, setToken, userId, setUserId, firstName, setFirstName, vegan, setVegan, image, setImage }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);