import { createContext, useContext, useMemo, useState } from "react";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [firstName, setFirstName] = useState("")
    const [userId, setUserId] = useState()
    const [token, setToken] = useState("")

    const login = async (data) => {
        setToken(data.token)
        setUserId(data.userId)
        setFirstName(data.firstName)
    };

    const logout = () => {
        setToken("")
        setUserId()
        setFirstName("")
    };

    const value = useMemo(
        () => ({
            firstName,
            userId,
            token,
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