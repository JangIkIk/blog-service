import { z } from 'zod';
import { z_PostScope, z_InputPost, z_RequestPost } from '../schemas';

type PostScope = z.infer<typeof z_PostScope>;
type InputPost = z.infer<typeof z_InputPost>;
type RequestPost = z.infer<typeof z_RequestPost>;

export type {
    PostScope,
    InputPost,
    RequestPost
}