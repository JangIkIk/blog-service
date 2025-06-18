// https://docs.uploadthing.com/api-reference/server#create-route-handler (UploadThing Server)
import { createRouteHandler } from "uploadthing/next";
import { ourFileRouter } from "./core";

export const { GET, POST } = createRouteHandler({
  router: ourFileRouter,
  // config: { ... },
});