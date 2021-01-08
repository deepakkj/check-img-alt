import React, { useState } from 'react';
import './SideBar.scss';

import Header from '../Header/Header';
import ImageList from '../ImageList/ImageList';

const SideBar = () => {
  const [images, setImages] = useState([]);
  console.log('rendering sideBar >>>>>>>>>>>>>>>');

  const getImgsWithoutCurrentExtension = (imgEle) => {
    return !(imgEle.getAttribute('data-extensiontag') === 'extensiontag');
  };

  const getAllImgNodesInPage = () => {
    const imgElements = window.document.getElementsByTagName('img') || [];
    return Array.from(imgElements).filter(getImgsWithoutCurrentExtension) || [];
  };

  const updateImageList = () => {
    const imageEles = getAllImgNodesInPage();
    setImages(imageEles);
  };

  const getImgsWithAltTag = (imgEle) => {
    return imgEle.getAttribute('alt');
  };

  const getImgsWithoutAltTag = (imgEle) => {
    return !imgEle.getAttribute('alt');
  };
  const imgsWithAltTag = images.filter(getImgsWithAltTag) || [];
  const imgsWithoutAltTag = images.filter(getImgsWithoutAltTag) || [];

  const onRefresh = (e) => {
    e.stopPropagation();
    updateImageList();
  };
  const onMove = (e) => {
    e.stopPropagation();
  };

  const onClose = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="sideBar">
      <Header
        onRefresh={onRefresh}
        onClose={onClose}
        onMove={onMove}
        noOfImgsWithAltTag={imgsWithAltTag.length}
        noOfImgsWithoutAltTag={imgsWithoutAltTag.length}
      />
      <ImageList images={imgsWithoutAltTag} />
    </div>
  );
};

export default SideBar;
