import { Post } from '@server/domain/entities/post';
import type {
  PostRepository,
  CreatePostInput,
} from "@server/domain/repositories/post-repository";
import { ValidationError, UnauthorizedError } from '@server/error/index';

type CreatePostRequest = CreatePostInput;
type CreatePostResponse = Promise<Post>;

class CreatePostUseCase {
  constructor(private readonly postsRepository: PostRepository) {}

  async execute(post: CreatePostRequest): CreatePostResponse {
    if (post.title.trim().length < 0) throw new ValidationError("제목은 1글자 이상 필요합니다");
    if (post.content.length < 0) throw new ValidationError("내용은 1글자 이상 필요합니다");
    if (post.scope !== "PUBLIC" && post.scope !== "PRIVATE" && post.scope !== "FRIENDS") throw new ValidationError("지정된 범위만 사용 가능합니다.");
    if (!post.userId) throw new UnauthorizedError("자신의 아이디가 필요합니다.");

    const result = await this.postsRepository.createPost(post);

    return result;
  }
}

export { CreatePostUseCase };
