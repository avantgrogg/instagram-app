export const IMAGE_SEARCH_ACTION = 'IMAGE_SEARCH_ACTION';
export function imageSearchAction(imageArray) {
    return {
        type: IMAGE_SEARCH_ACTION,
        payload: {
            images: imageArray
        }
    };
}