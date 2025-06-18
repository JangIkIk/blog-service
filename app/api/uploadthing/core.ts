// package
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";
// layer
import { FILE_MIME_TYPES, FILE_SIZE, FILE_COUNT} from '@shared/consts/const'
// type
type OurFileRouter = typeof ourFileRouter;


const fileConfig = createUploadthing();
/**
 * @see {@link https://docs.uploadthing.com/getting-started/appdir (next.js App Router)}
 * @see {@link https://docs.uploadthing.com/file-routes (File Routes)}
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/MIME_types#image (Media types)}
 * @Desc
 * uploadthing 파일라우터
*/
const ourFileRouter = {
  editorUploadr: fileConfig({
    "image/jpeg": { maxFileSize: "4MB", maxFileCount: FILE_COUNT},
    "image/png": { maxFileSize: "4MB", maxFileCount: FILE_COUNT},
    "image/webp": { maxFileSize: "4MB", maxFileCount: FILE_COUNT},
  })
    // 추후 런타입환경을 고려할필요가 있음 (사용자에 따른 입력을 받아야하는 경우?)
    // .input(z.object({ postId: z.string() }))
    .middleware(async (data) => {
      const { files, input } = data;
      
      const file = files[0];
      if(files.length > FILE_COUNT) throw new UploadThingError("COUNT");
      if(!FILE_MIME_TYPES.includes(file.type)) throw new UploadThingError("TYPE");
      if(file.size > FILE_SIZE) throw new UploadThingError("SIZE");

      return {}
    })
    .onUploadError((data) => {
      const { error, fileKey } = data;
    })
    .onUploadComplete((data) => {
      const { metadata, file } = data;
    }),
} satisfies FileRouter;

export { ourFileRouter, type OurFileRouter };
