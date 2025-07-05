import { z } from 'zod';
import { z_PostScope, z_InputPost, z_RequestPost } from '../schemas';

type PostScope = z.infer<typeof z_PostScope>;
type InputPost = z.infer<typeof z_InputPost>;
type RequestPost = z.infer<typeof z_RequestPost>;
type ResponsePost = {
    id: number;
    title: string;
    content: string;
    created_at: Date;
    thumbnail_image: null | string;
    user_email: string;
    user_name: string;
    user_image: string;
}

export type {
    PostScope,
    InputPost,
    RequestPost
}