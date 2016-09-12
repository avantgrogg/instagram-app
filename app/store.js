import { imageApp } from './reducers';
import { applyMiddleware, createStore } from 'redux';
import createLogger from 'redux-logger';
const logger = createLogger();
let initialState = {
    selectedImage: {},
    grid: []
};

export function generateStore() {
    return createStore(imageApp, initialState, applyMiddleware(logger));
}