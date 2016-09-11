let auth = 'CLIENT-ID 42f40fccfb12ace';
let myHeaders = new Headers({
    Authorization: auth
});

let myInit = { method: 'GET', headers: myHeaders };

attachEvents();

function attachEvents() {
    $('.js-submit-search').on('click', (e) => {
        e.preventDefault();
        let search = $('.js-search-input').val();
        performImgurSearch(search);
    })
}

function performImgurSearch(searchValue) {
    fetch(`https://api.imgur.com/3/gallery/r/${searchValue}`,myInit)
    .then((response) => response.json())
    .then((response) => response.data.map((image) => image.link))
    .then((images) => images.forEach((image) => { $('body').append(`<img src='${image}' width="100">`) }))
}