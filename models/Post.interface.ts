import User from "./User.interface";

export default interface Post {
  id: string;
  caption: string;
  userId: string;
  imageUrl: string;
  createdAt: string;
  user?: User;
}
