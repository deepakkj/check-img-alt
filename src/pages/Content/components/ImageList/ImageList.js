import React from 'react';
import './ImageList.scss';
import ImageIcon from '../ImageIcon/ImageIcon';

const ImageList = ({ images }) => {
  const handleGetSuggestions = () => {
    alert('This feature is coming soon!');
  };
  return (
    <ul className="imgList">
      {images.map((image, index) => (
        <li className="div-img-wrapper" key={index}>
          <ImageIcon key={index} imageEle={image} />
          <div className="alt-text-wrapper">
            {image.getAttribute('alt') && (
              <p>
                <span>Alt Text:</span>&nbsp;{image.getAttribute('alt')}
              </p>
            )}
            <button className="btn-getSuggestions" onClick={handleGetSuggestions}>
              Get Alt Text Suggestions
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ImageList;
