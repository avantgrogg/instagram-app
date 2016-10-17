import { imageSearchAction } from './actions';
let auth = 'CLIENT-ID 42f40fccfb12ace';
let myHeaders = new Headers({
    Authorization: auth
});

let myInit = { method: 'GET', headers: myHeaders };

export function performImgurSearch(searchValue, dispatch) {
    fetch(`https://api.imgur.com/3/gallery/r/${searchValue}`,myInit)
      .then((response) => response.json())
      .then((response) => response.data.filter((image, idx) => idx < 10))
      .then((images) => dispatch(imageSearchAction(images)));
}
