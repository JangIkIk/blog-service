import type {
  PostRepository,
  GetAllPostReturn,
} from "@server/domain/repositories/post-repository";

type GetAllPostResponse = Promise<GetAllPostReturn[]>;

class GetAllPostUsecase {
  constructor(private readonly postRepository: PostRepository) {}

  async execute(): GetAllPostResponse {
    const result = await this.postRepository.getAllPost();
    
    return result;
  }
}

export { GetAllPostUsecase };
