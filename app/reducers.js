import { IMAGE_SEARCH_ACTION } from './actions';
import { SELECTED_IMAGE_ACTION } from './actions';
import { DESELECT_IMAGE_ACTION } from './actions';

export function imageApp(state = {}, action) {
    return {
        grid: grid(state.grid, action),
        selectedImage: selectedImage(state.selectedImage, state.grid, action)
    };
}

function grid(state = {}, action) {
    switch(action.type) {
        case IMAGE_SEARCH_ACTION:
            return action.payload.images;
        default:
            return state;
    }
}

function selectedImage(state = {}, images = [], action) {
    switch(action.type) {
      case SELECTED_IMAGE_ACTION:
        return Object.assign(
          {}, state, {
            image: images[action.payload.imageId],
            show: true
          }
        );
      case DESELECT_IMAGE_ACTION:
        return Object.assign(
          {}, state, {
            image: undefined,
            show: false
          }
        );
      default:
        return state;
    }
}
