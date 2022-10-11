import React, { useState, Fragment } from 'react';
import './ImageList.scss';
import ImageIcon from '../ImageIcon/ImageIcon';

const ImageList = ({ images, showAltButton }) => {
  const [showNotification, setShowNotification] = useState(false);
  const handleGetSuggestions = () => {
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 500);
  };
  return (
    <Fragment>
      {showNotification && (
        <div className="notification">This feature is coming soon!</div>
      )}
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
              {showAltButton && (
                <button
                  className="btn-getSuggestions"
                  onClick={handleGetSuggestions}
                >
                  Alt Text Suggestions
                </button>
              )}
            </div>
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

export default ImageList;
