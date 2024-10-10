import React, { createContext, useState, useEffect, ReactNode } from 'react';

// Define the shape of the context
interface AuthContextType {
  userData: any;
  login: (data: any) => void;
  logout: () => void;
}

// Create a default value for the context
const defaultAuthContext: AuthContextType = {
  userData: null,
  login: () => {},
  logout: () => {},
};

// Create the context with the default value
export const AuthContext = createContext<AuthContextType>(defaultAuthContext);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [userData, setUserData] = useState(() => {
    const savedUserData = localStorage.getItem('userData');
    return savedUserData ? JSON.parse(savedUserData) : null;
  });

  const login = (data: any) => {
    setUserData(data);
    localStorage.setItem('userData', JSON.stringify(data));
  };

  const logout = () => {
    setUserData(null);
    localStorage.removeItem('userData');
  };

  return (
    <AuthContext.Provider value={{ userData, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};