import React from 'react';
import './ImageIcon.scss';

const ImageIcon = ({ imageEle }) => {
  // const options = {
  //   scrollIntoView: true,
  //   label: "IMAGE"
  // };
  const highlightDOMImage = (img) => {
    // createBird('mybird1').flyTo(img, options);
    // console.log(img);
    img.classList.add('imgHighlight');
    img.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'center',
    });
  };
  const unhighlightDOMImage = (img) => {
    img.classList.remove('imgHighlight');
  };
  const { index } = imageEle;
  return (
    <div className="img-overview-div">
      <img
        alt={imageEle.getAttribute('alt')}
        src={imageEle.getAttribute('src')}
        data-extensiontag={'extensiontag'}
        onMouseOver={() => highlightDOMImage(imageEle)}
        onMouseOut={() => unhighlightDOMImage(imageEle)}
        title={imageEle.getAttribute('alt')}
        className="img-overview"
      />
    </div>
  );
};

export default ImageIcon;
