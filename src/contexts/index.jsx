import React, { useState, useContext } from "react";

const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
