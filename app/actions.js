export const IMAGE_SEARCH_ACTION = 'IMAGE_SEARCH_ACTION';
export const SELECTED_IMAGE_ACTION = 'SELECTED_IMAGE_ACTION';
export const DESELECT_IMAGE_ACTION = 'DESELECT_IMAGE_ACTION';

export function imageSearchAction(imageArray) {
    return {
        type: IMAGE_SEARCH_ACTION,
        payload: {
            images: imageArray
        }
    };
}

export function selectedImageAction(imageId) {
  return {
    type: SELECTED_IMAGE_ACTION,
    payload: {
      imageId: imageId,
      showSelectedImage: true
    }
  }
}

export function deselectImageAction() {
  return {
    type: DESELECT_IMAGE_ACTION,
    payload: {
      showSelectedImage: false
    }
  }
}
