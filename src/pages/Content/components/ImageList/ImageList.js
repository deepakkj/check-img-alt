import React from 'react';
import './ImageList.css';
import ImageIcon from '../ImageIcon';

const ImageList = ({ images }) => {

  return (
    <ul className="imgList">
      Total images (with img tag): {images.length}
      {images.map((image, index) => (
        <li className="div-img-wrapper" key={index}>
          <ImageIcon key={index} imageEle={image} />
        </li>
      ))}
    </ul>
  );
};

export default ImageList;
