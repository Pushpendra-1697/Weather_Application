import React, { useState } from 'react';

export const AuthContext = React.createContext();

function AuthContextProvider({ children }) {
    const [isAuth, setIsAuth] = useState(false);

    const loginUser = () => {
        setIsAuth(true);
    };
    const logoutUser = () => {
        setIsAuth(false);
        localStorage.removeItem('userDetails');
    };

    const value = { isAuth, loginUser, logoutUser };
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;
