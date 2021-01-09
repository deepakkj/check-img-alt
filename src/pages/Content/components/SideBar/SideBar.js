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
  const [selectedFilterButton, setSelectedFilterButton] = useState('WITHOUT_ALT');

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

  const onFilterChange = (filterType) => {
    if(filterType === 'WITHOUT_ALT') {
      setSelectedFilterButton('WITHOUT_ALT');
    } else if(filterType === 'WITH_ALT') {
      setSelectedFilterButton('WITH_ALT');
    }
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
        onFilterChange={onFilterChange}
        selectedFilterButton={selectedFilterButton}
      />
      <div className="imgList-wrapper">
        <ImageList images={selectedFilterButton === 'WITHOUT_ALT' ? imgsWithoutAltTag : imgsWithAltTag} />
      </div>
    </div>
  );
};

export default SideBar;
