// createUploadthing: UploadThing 파일 라우터를 생성하는 데 사용되는 핵심 함수입니다.
// FileRouter: UploadThing에서 제공하는 타입으로, 우리가 정의할 파일 라우터 객체의 구조를 강제하여 타입 안정성을 제공합니다.
import { createUploadthing, type FileRouter } from "uploadthing/next";
// UploadThingError: UploadThing 관련 에러를 발생시킬 때 사용하는 클래스입니다. 주로 middleware에서 업로드를 거부할 때 사용됩니다.
import { UploadThingError } from "uploadthing/server";

// 특정 파일 타입에 대한 라우터 정의(image, video, audio, pdf)
const fileType = createUploadthing();

// 인증 로직
const auth = (req: Request) => ({ id: "fakeId" }); // Fake auth function

// 파일 업로드 설정
export const ourFileRouter = {
  // 파일 업로드 라우터 정의
  imageUploader: fileType({
    image: {
      maxFileSize: "4MB",
      maxFileCount: 1,
    },
  })
    // 업로드전 미들웨어
    .middleware(async ({ req }) => {
      // 사용자 인증 정보를 가져옴
      const user = await auth(req);
      // 인증정보가 없다면 업로드 중단
      if (!user) throw new UploadThingError("Unauthorized");
      // 인증정보가 있을시 다음 단계의 메타데이터에 포함시킴
      return { userId: user.id };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      // 파일업로드된 사용자 정보
      console.log("Upload complete for userId:", metadata.userId);
      // 업로드된 파일데이터
      console.log("file url", file.ufsUrl);
      // 클라이언트 측에 반환하는 함수
      return { uploadedBy: metadata.userId };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;