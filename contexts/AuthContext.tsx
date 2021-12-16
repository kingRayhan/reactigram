import { auth } from "@/services/firebase";
import {
  firebaseUserToUser,
  getUserByUid,
  storeUser,
  User,
} from "@/services/profile";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";

interface AuthContextType {
  user: User | null;
  authenticated: boolean;
  loading: boolean;
  logout: () => Promise<void>;
  loginWithGoogle: () => void;
}

export const AuthContext = createContext<AuthContextType>(null);

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState<User>(null);
  const [authenticated, setAuthenticated] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const logout = async () => {
    await signOut(auth);
    setUser(null);
    setAuthenticated(false);
  };

  const loginWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then(async (result) => {
        const user = firebaseUserToUser(result.user);
        await storeUser(user);
        setUser(user);
      })
      .catch((e) => {
        console.log("signInWithPopup error: ", e.message);
      });
  };

  useEffect(() => {
    setLoading(true);
    onAuthStateChanged(auth, async (firebaseUserSnap) => {
      if (firebaseUserSnap) {
        try {
          setAuthenticated(true);
          const user = await getUserByUid(firebaseUserSnap.uid);
          setUser(user);
          setLoading(false);
        } catch (error) {
          console.log(error.message);
        }
      } else {
        setUser(null);
        setAuthenticated(false);
        setLoading(false);
      }
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, authenticated, loading, logout, loginWithGoogle }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
