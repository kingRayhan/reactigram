import ServerTimestamp from "./ServerTimestamp.interface";

export default interface User {
  uid?: string;
  username: string;
  displayName?: string;
  bio?: string;
  email: string;
  avatar: string;
  following: string[];
  followers: string[];
  joined?: ServerTimestamp;
}
