import React, { createContext, useContext, useState } from "react";

export const AuthContext = createContext();
export default function AuthProvider({ children }) {
  const initialAuthUser = localStorage.getItem("Users");
  const [authUser, setAuthUser] = useState(
    initialAuthUser ? JSON.parse(initialAuthUser) : undefined
  );
  const [authAdmin,setAuthAdmin]=useState(false)
  return (
    <AuthContext.Provider value={[authUser, setAuthUser,authAdmin,setAuthAdmin]}>
      {children}
    </AuthContext.Provider>
  );
}
export const useAuth = () => useContext(AuthContext);
