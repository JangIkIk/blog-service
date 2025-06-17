// https://docs.uploadthing.com/getting-started/appdir (next.js App Router)
// https://docs.uploadthing.com/file-routes (File Routes)
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/MIME_types#image (Media types)
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";
import { auth } from '@app/auth';

const fileConfig = createUploadthing();

const ourFileRouter = {
  editorUploadr: fileConfig({
    // image가 가지는 기본적인 MIME중 image/gi, image/svg+xmlf 제한
    "image/jpeg": { maxFileSize: "4MB", maxFileCount: 1},
    "image/png": { maxFileSize: "4MB", maxFileCount: 1},
    "image/webp": { maxFileSize: "4MB", maxFileCount: 1},
  })
    // 추후 런타입환경을 고려할필요가 있음 (사용자에 따른 입력을 받아야하는 경우?)
    // .input(z.object({ postId: z.string() }))
    // 미들웨어를 사용하여 업로드 전 유저 인증 로직 & 클라이언트에서 받을 데이터 확인
    .middleware(async (data) => {
      const { files, input } = data;
      // 테스트로 인한 임시보류
      // const session = await auth();
      // if (!session)
      // throw new UploadThingError(
      //   "You must be logged in to upload a profile picture",
      // );
      // return { userId: session}
      return {}
    })
    // 업로드 실패시
    .onUploadError((data) => {
      const { error, fileKey } = data;
    })
    // 업로드 완료시
    .onUploadComplete((data) => {
      const { metadata, file } = data;
    }),
} satisfies FileRouter;


type OurFileRouter = typeof ourFileRouter;
export { ourFileRouter, type OurFileRouter };
