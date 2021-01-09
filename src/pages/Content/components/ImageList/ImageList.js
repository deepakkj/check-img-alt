import React from 'react';
import './ImageList.scss';
import ImageIcon from '../ImageIcon/ImageIcon';

const ImageList = ({ images }) => {

  return (
    <ul className="imgList">
      {images.map((image, index) => (
        <li className="div-img-wrapper" key={index}>
          <ImageIcon key={index} imageEle={image} />
        </li>
      ))}
    </ul>
  );
};

export default ImageList;
