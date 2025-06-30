// package
import { NextRequest, NextResponse } from "next/server";
// layer
import { auth } from "@app/auth";
import type { CreatePostInput } from "@server/domain/repositories/post-repository";
import { CreatePostUseCase } from "@server/application/use-cases/create-post-usecase";
import { PostRepositoryImpl } from "@server/infra/prisma/post-repository-impl";
import { AppError, UnauthorizedError } from '@server/error/index';

/**
 * @Desc
 * 회원 게시글 작성
*/
async function POST(req: NextRequest) {
  try {
    const session = await auth();
    if(!session){
      throw new UnauthorizedError("인증실패");
    }

    const reqData:CreatePostInput = await req.json();
    const postRepositoryImpl = new PostRepositoryImpl();
    const createPostUseCase = new CreatePostUseCase(postRepositoryImpl);
    const resData = createPostUseCase.execute({...reqData, userId: session.user.id as string});

    return NextResponse.json({
      status: 200,
      data: resData,
    });
  } catch (error) {

    if(error instanceof AppError){
      return NextResponse.json(error.message, {status: error.statusCode})
    }

    return NextResponse.json({status: 500, message: "Server Error"});
  }
}


export { POST };