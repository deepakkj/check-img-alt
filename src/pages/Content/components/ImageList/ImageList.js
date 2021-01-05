import React from 'react';
import './ImageList.css';

const ImageList = ({
  images
}) => {
  const getImgsWithAltTag = (imgEle) => {
    return (imgEle.attributes['alt'] && imgEle.attributes['alt'].value);
  };

  const getImgsWithoutAltTag = (imgEle) => {
    return !(imgEle.attributes['alt'] && imgEle.attributes['alt'].value);
  };
  const imgsWithAltTag = images.filter(getImgsWithAltTag);
  const imgsWithoutAltTag = images.filter(getImgsWithoutAltTag);
  return (
    <ul className="imgList">
      Total images (with img tag): {images.length}
        Total images (with alt tag): {imgsWithAltTag.length}
        Total images (without alt tag): {imgsWithoutAltTag.length}
      {
        imgsWithoutAltTag.map(image => <li className="div-img-wrapper"><img src={image.attributes['src'].value} data-extensionTag={"extensionTag"} /></li>)
      }
    </ul>
  );
};

export default ImageList;