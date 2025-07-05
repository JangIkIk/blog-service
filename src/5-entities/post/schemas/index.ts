import { type PartialBlock, type Block } from "@blocknote/core";
import { z } from 'zod';

const z_PostScope = z.enum(["PUBLIC", "PRIVATE", "FRIENDS"]);
const z_InputPost = z.object({
    title: z.string().trim().min(1, "제목은 필수입니다"),
    content: z.array(z.custom<PartialBlock>()).min(1, "내용은 필수입니다"),
    aiContent: z.string().nullable(),
    thumbnailImage: z.string().nullable(),
    scope: z_PostScope,
});
const z_RequestPost = z_InputPost.extend({
    content: z.string().min(1, "내용은 필수입니다"),
});

export {
    z_PostScope,
    z_InputPost,
    z_RequestPost,
};