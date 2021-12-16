import Feed from "@/screens/Feed";
import LandingScreen from "@/screens/LandingScreen";
import useAuth from "@/hooks/useAuth";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/services/firebase";

(async () => {
  await addDoc(collection(db, "posts"), {
    caption: "There's power in looking silly and not caring that you do.",
    imageUrl:
      "https://i.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68",
    userId: "4JN2dsVddoYWc1YWqXXe5LQnB0B3",
    createdAt: serverTimestamp(),
  });
})();

const HomePage = () => {
  const { authenticated } = useAuth();

  if (authenticated) return <Feed />;
  return <LandingScreen />;
};

export default HomePage;
