import React, { useState } from 'react';
import './SideBar.scss';

import Header from '../Header/Header';
import ImageList from '../ImageList/ImageList';
import AllSet from '../AllSet/AllSet';

import {
  getImgsWithAltTag,
  getImgsWithoutAltTag,
  getAllImgNodesInPage,
} from '../../utils';

import { unmountApp } from '../../modules/index';

const SideBar = () => {
  const [images, setImages] = useState([]);
  const [selectedFilterButton, setSelectedFilterButton] = useState(
    'WITHOUT_ALT'
  );

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
    if (filterType === 'WITHOUT_ALT') {
      setSelectedFilterButton('WITHOUT_ALT');
    } else if (filterType === 'WITH_ALT') {
      setSelectedFilterButton('WITH_ALT');
    }
  };

  const imgsWithAltTag = images.filter(getImgsWithAltTag) || [];
  const imgsWithoutAltTag = images.filter(getImgsWithoutAltTag) || [];

  const renderImageList = () => {
    if (imgsWithoutAltTag.length === 0 && imgsWithAltTag.length === 0) {
      return (
        <div className="refresh-text">
          Click refresh button above to see results
        </div>
      );
    } else if (
      imgsWithoutAltTag.length === 0 &&
      selectedFilterButton === 'WITHOUT_ALT'
    ) {
      return <AllSet />;
    } else {
      return (
        <ImageList
          showAltButton={selectedFilterButton === 'WITHOUT_ALT'}
          images={
            selectedFilterButton === 'WITHOUT_ALT'
              ? imgsWithoutAltTag
              : imgsWithAltTag
          }
        />
      );
    }
  };

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
      <div className="imgList-wrapper">{renderImageList()}</div>
    </div>
  );
};

export default SideBar;
