import { User } from "./user";

export interface Post {
  id: number;
  text: string;
  user: Pick<User, "id" | "username">;
  createdAt: string;
  _count: {
    comments: number;
  };
}

export interface Comment {
  id: number;
  text: string;
  postId: Post["id"];
  createdAt: string;
  user: Pick<User, "id" | "username">;
}
