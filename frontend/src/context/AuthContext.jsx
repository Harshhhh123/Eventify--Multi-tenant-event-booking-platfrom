import { createContext, useContext, useEffect, useState } from "react";
import { getToken, removeToken } from "../utils/token";
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = getToken();

    if (!token) {
      setUser(null);
      setLoading(false);
      return;
    }

    try {
      const decoded = jwtDecode(token);
if (!decoded.userId || !decoded.role) {
  throw new Error("Invalid token shape");
}

if (decoded.exp * 1000 < Date.now()) {
  throw new Error("Token expired");
}
      setUser({
        userId: decoded.userId,
        role: decoded.role,
      });
    } catch (err) {
      removeToken();
      setUser(null);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
