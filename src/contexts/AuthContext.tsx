// contexts/AuthContext.tsx
import { getTokenLocal } from "@/utils/common";
import { createContext, useState, useEffect, ReactNode } from "react";

type AuthContextType = {
  isAuthenticated: boolean;
  setAuthenticated: (value: boolean) => void; // Add this export statement
};

type AuthProviderProps = {
  children: ReactNode; // Specify the children prop type
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    setAuthenticated(getTokenLocal() ? true : false);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: authenticated,
        setAuthenticated, // Provide the function here
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
