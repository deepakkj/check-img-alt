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

  const checkIfImageHasParentPictureTag = (imgEle) => {
    return imgEle.parentNode.tagName.toLowerCase() === 'picture';
  };

  const checkIfImageHasSiblingSourceTag = (imgEle) => {
    return imgEle.previousElementSibling.tagName.toLowerCase() === 'source';
  };

  const getSrcUrlFromSourceTagOfSiblingImage = (imgEle) => {
    if (checkIfImageHasParentPictureTag(imgEle) && checkIfImageHasSiblingSourceTag(imgEle)) {
      return imgEle.previousElementSibling.srcset || imgEle.nextElementSibling.srcset;
    }
    return '';
  };

  const getAllImgNodesInPage = () => {
    const imgElements = window.document.getElementsByTagName('img') || [];
    const imgElementsWithoutCurrentExtension = Array.from(imgElements).filter(getImgsWithoutCurrentExtension) || [];
    const imgElementsWithSourceTag = imgElementsWithoutCurrentExtension.map(imgEle => {
      if (imgEle.src === '') {
        // TODO: FIXME the logic to check if src is present in image or not.
        console.log("imeEle", imgEle);
        console.log("imeEle.src", imgEle.src);
        console.log("imeEle.getAttribute('src')", imgEle.getAttribute('src'));
        imgEle.src = getSrcUrlFromSourceTagOfSiblingImage(imgEle);
      }
      return imgEle;
    });
    return imgElementsWithSourceTag;
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
