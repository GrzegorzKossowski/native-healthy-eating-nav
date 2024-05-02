import { createContext, useMemo, useState } from 'react';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({ token: 'null' });
    const contextValue = useMemo(() => ({ auth, setAuth }), [auth, setAuth]);
    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
