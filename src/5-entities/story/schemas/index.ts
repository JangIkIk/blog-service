import { type PartialBlock, type Block } from "@blocknote/core";
import { z } from 'zod';

const storyScopeEnum = z.enum(["PUBLIC", "PRIVATE", "FRIENDS"]);
const storySchema = z.object({
    title: z.string().trim().min(1, "제목은 필수입니다"),
    content: z.array(z.custom<PartialBlock>()).min(1, "내용은 필수입니다"),
    aiContent: z.string().nullable(),
    thumbnailImage: z.string().nullable(),
    scope: storyScopeEnum,
});

export {
    storyScopeEnum,
    storySchema,
};