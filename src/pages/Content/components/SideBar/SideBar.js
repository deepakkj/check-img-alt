import React, { useState } from 'react';
import './SideBar.scss';

import Header from '../Header/Header';
import ImageList from '../ImageList/ImageList';

import {
  getImgsWithAltTag,
  getImgsWithoutAltTag,
  getAllImgNodesInPage
} from '../../utils';

import { unmountApp } from '../../modules/index';

const SideBar = () => {
  const [images, setImages] = useState([]);
  console.log('rendering sideBar >>>>>>>>>>>>>>>');



  const updateImageList = () => {
    const imageEles = getAllImgNodesInPage();
    setImages(imageEles);
  };

  const onRefresh = (e) => {
    e.stopPropagation();
    updateImageList();
  };
  const onMove = (e) => {
    e.stopPropagation();
  };

  const onClose = (e) => {
    e.stopPropagation();
    unmountApp(); 
  };

  const imgsWithAltTag = images.filter(getImgsWithAltTag) || [];
  const imgsWithoutAltTag = images.filter(getImgsWithoutAltTag) || [];

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
