import { IMAGE_SEARCH_ACTION } from './actions';
export function imageApp(state = {}, action) {
    return {
        grid: grid(state.grid, action),
        selectedImage: selectedImage(state.selectedImage, action)
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

function selectedImage(state = {}, action) {
    return state;
}