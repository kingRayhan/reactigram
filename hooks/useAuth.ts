import { auth } from "@/services/firebase";
import {
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";

interface User {
  name: string;
  username: string;
  email: string;
  photoURL: string;
}

const useAuth = () => {
  const [user, setUser] = useState<User>(null);
  const [authenticated, setAuthenticated] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthenticated(true);
        setUser({
          name: user.displayName,
          username: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
        });
        setLoading(false);
      } else {
        setUser(null);
        setAuthenticated(false);
        setLoading(false);
      }
    });
  }, []);

  const logout = async () => {
    await signOut(auth);
    setUser(null);
    setAuthenticated(false);
  };

  const loginWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then((result) => {
      setUser({
        name: result.user.displayName,
        username: result.user.displayName,
        email: result.user.email,
        photoURL: result.user.photoURL,
      });
    });
  };

  return {
    user,
    loginWithGoogle,
    authenticated,
    loading,
    logout,
  };
};

export default useAuth;
