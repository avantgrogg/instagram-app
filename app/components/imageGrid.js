import React from 'react';

export const ImageGrid = ({images, onClick}) => (
  <div className="js-image-grid">
    {images.map((image, idx) =>
      <img src={image.link} width="100" key={idx} onClick={e => onClick(e, idx)}/>
    )}
  </div>
);
