import { Post } from "../entities/post";

type PostScope = Pick<Post, "scope">;

type CreatePostInput = Omit<Post, "id" | "createdAt" | "updatedAt" | "deletedAt">;
type CreatePostReturn = Promise<Post>;

interface PostRepository {
    createPost( post: CreatePostInput ): CreatePostReturn;
}

export type { PostScope, PostRepository, CreatePostInput, CreatePostReturn };

