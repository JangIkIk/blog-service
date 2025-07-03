// package
import { NextResponse } from "next/server";
// layer
import { GetAllPostUsecase } from "@server/application/use-cases/get-all-post-usecase";
import { PostRepositoryImpl } from '@server/infra/prisma/post-repository-impl';

/**
 * @Desc
 * 전체 게시글 불러오기
*/
async function GET() {
  try {
      const postRepositoryImpl = new PostRepositoryImpl();
      const getAllPostUsecase = new GetAllPostUsecase(postRepositoryImpl);
      const resData = await getAllPostUsecase.execute();

    return NextResponse.json({
      status: 200,
      data: resData,
    });
  } catch (error) {

    return NextResponse.json({status: 500, message: "Server Error"});
  }
}


export { GET };