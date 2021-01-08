import React from 'react';
import { createBird, killBird, getBird } from "dom-bird";

const ImageIcon = ({
  imageEle
}) => {
  const options = {
    scrollIntoView: true,
    label: "IMAGE"
  };
  const highlightDOMImage = (img) => {
    createBird('mybird1').flyTo(img, options);
console.log(img);
  };
  const unhighlightDOMImage = (img) => {
    killBird('mybird1');
  };
  const {
    index,
    
  } = imageEle;
  return (
    <img
      alt={index}
      src={imageEle.getAttribute('src')}
      data-extensiontag={'extensiontag'}
      onMouseOver={() => highlightDOMImage(imageEle)}
      onMouseOut={() => unhighlightDOMImage(imageEle)}
    />
  );
};

export default ImageIcon;