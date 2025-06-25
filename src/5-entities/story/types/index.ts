import { z } from 'zod';
import { storyScopeEnum, storySchema } from '../schemas';

type StoryScope = z.infer<typeof storyScopeEnum>;
type StoryData = z.infer<typeof storySchema>;

export type {
    StoryScope,
    StoryData,
}