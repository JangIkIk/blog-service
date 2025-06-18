// package
import { create } from 'zustand';

// type
type UploadedUrlState = {
    imageUrl: string | null,
};

type UploadedUrlActions = {
    actions: {
        saveUrl: ( url: string ) => void;
    }
};

/**
 * @Desc
 * use-image-upload로 업데이트된 url을 반환
*/
const useUploadedUrl = create<UploadedUrlState & UploadedUrlActions>( (set) => ({
    imageUrl: null,

    actions: {
        saveUrl: ( url ) => {
            set({imageUrl: url})
        }
    }
}));

export { useUploadedUrl };