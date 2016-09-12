import { attachEvents, initImageGrid } from './render';
import { generateStore } from './store';

let store = generateStore();

attachEvents(store);
initImageGrid(store);
