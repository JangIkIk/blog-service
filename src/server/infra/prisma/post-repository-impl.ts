import { Post } from "@server/domain/entities/post";
import { User } from "@server/domain/entities/user";
import { prisma } from "@shared/lib/prisma";
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

    const queryResult: {
      id: Post["id"];
      title: Post["title"];
      content: Post["content"];
      created_at: Post["createdAt"];
      thumbnail_image: Post["thumbnailImage"];
      user_name: User["name"];
      user_email: User["email"];
      user_image: User["image"];
    }[] = await prisma.$queryRaw`
    SELECT p.id, p.title, p.content, p.created_at, p.thumbnail_image, u.email AS user_email, u.name AS user_name, u.image AS user_image
    FROM posts AS p 
    INNER JOIN users AS u 
    ON p.user_id = u.id
    WHERE p.scope IN ("PUBLIC")
    ORDER BY p.created_at DESC`;

    const postsMapper: GetAllPostReturn[] = queryResult.map((item) => ({
      id: item.id,
      title: item.title,
      content: item.content,
      createdAt: item.created_at,
      thumbnailImage: item.thumbnail_image,
      userName: item.user_name,
      userEmail: item.user_email,
      userImage: item.user_image,
    }));

    return postsMapper;
  }
}

export { PostRepositoryImpl };
