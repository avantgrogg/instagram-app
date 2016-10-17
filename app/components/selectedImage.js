import React from 'react'

export const SelectedImage = ({ selectedImage, onClick }) => {
  let divStyle = {
    position:'fixed',
    zIndex:'1000',
    width:'100%',
    height:'100%',
    top:0
  };

  if(selectedImage.show) {
    return (
      <div className="modal" onClick={e=>onClick(e)} style={divStyle}>
          <img src={selectedImage.image.link}/>
      </div>
    )
  }
  return <div></div>
}
