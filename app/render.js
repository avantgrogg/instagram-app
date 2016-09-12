import { performImgurSearch } from './api';

export function attachEvents(store) {
    $('.js-submit-search').on('click', (e) => {
        e.preventDefault();
        let search = $('.js-search-input').val();
        performImgurSearch(search, store);
    });
}   

export function initImageGrid(store) {
    store.subscribe((event) => {
        $('.js-image-grid').html('');
        store.getState().grid.forEach((image) => $('.js-image-grid').append(`<a href='${image.link}'><img src='${image.link}' width="100"></a>`));
    });
}