import Post from "@/models/Post.interface";
import User from "@/models/User.interface";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "./firebase";

export const getUsersMapByIds = async (ids: string[]) => {
  const userCollectionRef = collection(db, "users");
  const q = query(userCollectionRef, where("uid", "in", ids));
  const userDocsSnap = await getDocs(q);
  if (userDocsSnap.empty) throw new Error("User does not exist");

  const map = {};
  userDocsSnap.docs.map((doc) => (map[doc.id] = doc.data()));

  return map;
};

export const getUsersListByIds = async (ids: string[]): Promise<User[]> => {
  const usersMap = await getUsersMapByIds(ids);
  const usersList = [];
  for (const id of ids) {
    usersList.push(usersMap[id]);
  }
  return usersList;
};

export const getPosts = async (): Promise<Post[]> => {
  const postsCollectionRef = collection(db, "posts");
  const postsSnap = await getDocs(postsCollectionRef);

  const usersMap = await getUsersMapByIds(
    postsSnap.docs.map((doc) => doc.data().userId)
  );

  return postsSnap.docs.map((doc) => {
    return {
      id: doc.id,
      caption: doc.data().caption,
      userId: doc.data().userId,
      imageUrl: doc.data().imageUrl,
      createdAt: doc.data().createdAt,
      user: usersMap[doc.data().userId],
    };
  });
};
