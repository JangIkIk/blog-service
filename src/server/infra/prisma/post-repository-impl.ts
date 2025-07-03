import { prisma } from "@shared/lib/prisma";
import { Post } from "@server/domain/entities/post";
import type {
  PostRepository,
  CreatePostInput,
  GetAllPostReturn,
} from "@server/domain/repositories/post-repository";

class PostRepositoryImpl implements PostRepository {
  async createPost(post: CreatePostInput): Promise<Post> {
    const {
      title,
      content,
      aiContent,
      thumbnailImage,
      scope,
      userId,
      categoryId,
    } = post;
    const result: Post =
      await prisma.$queryRaw`INSERT INTO posts (title, content, ai_content, thumbnail_image, scope, user_id, category_id) VALUES ( ${title}, ${content}, ${aiContent}, ${thumbnailImage}, ${scope}::"Scope", ${userId}, ${categoryId}) RETURNING *`;
    return result;
  }

  async getAllPost(): Promise<GetAllPostReturn[]> {

    const result:GetAllPostReturn[] = await prisma.$queryRaw`
    SELECT p.id, p.title, p.content, p.content, p.created_at AS createdAt, p.thumbnail_image, u.email AS userEmail, u.name AS userName, u.image AS userImage
    FROM posts AS p 
    INNER JOIN users AS u 
    ON p.user_id = u.id`;

    return result;
  }
}

export { PostRepositoryImpl };
