import { User } from "./user";

export interface Post {
  id: number;
  text: string;
  createdAt: string;
  _count: {
    comments: number;
  };
  user: Pick<User, "id" | "username">;
}

export interface Comment {
  id: number;
  text: string;
  postId: Post["id"];
  createdAt: string;
  user: Pick<User, "id" | "username">;
}
