import { prisma } from "@shared/lib/prisma";
import { Post } from "@server/domain/entities/post";
import type {
  PostRepository,
  CreatePostInput,
  CreatePostReturn,
} from "@server/domain/repositories/post-repository";

class PostRepositoryImpl implements PostRepository {
  async createPost(post: CreatePostInput): CreatePostReturn {
    const { title, content, aiContent, thumbnailImage, scope, userId, categoryId } = post;
    const result:Post = await prisma.$queryRaw`INSERT INTO posts (title, content, ai_content, thumbnail_image, scope, user_id, category_id) VALUES ( ${title}, ${content}, ${aiContent}, ${thumbnailImage}, ${scope}::"Scope", ${userId}, ${categoryId}) RETURNING *`;
    return result;
  }
}

export { PostRepositoryImpl };
