import { createContext, useContext, useMemo, useState } from "react";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const login = async (data) => {
        console.log("Login attempted")
    };

    const logout = () => {
        console.log("Logout attempted")
    };

    const value = useMemo(
        () => ({
            firstName,
            lastName,
            email,
            password,
            login,
            logout,
        }),
        []
    );

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
    return useContext(AuthContext);
};