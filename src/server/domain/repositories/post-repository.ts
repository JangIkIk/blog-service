import { Post } from "../entities/post";
import { User } from '../entities/user';

type PostScope = Pick<Post, "scope">;

type CreatePostInput = Pick<
  Post,
  | "title"
  | "content"
  | "aiContent"
  | "thumbnailImage"
  | "scope"
  | "userId"
  | "categoryId"
>;

type GetAllPostReturn = Pick<
  Post,
  "id" | "title" | "content" | "thumbnailImage" | "createdAt"
> & {
  userName: User["name"];
  userEmail: User["email"];
  userImage: User["image"];
};

interface PostRepository {
  createPost(post: CreatePostInput): Promise<Post>;
  getAllPost(): Promise<GetAllPostReturn[]>;
}

export type { PostScope, PostRepository, CreatePostInput, GetAllPostReturn };
