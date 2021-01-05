import React, { useState } from 'react';
import './SideBar.css';

import ImageList from "../ImageList/ImageList";

const SideBar = () => {
  const [images, setImages] = useState([]);
  console.log("rendering sideBar >>>>>>>>>>>>>>>");

  const getImgsWithoutCurrentExtension = (imgEle) => {
    return !(imgEle.getAttribute('data-extensionTag') === "extensionTag");
  }; 
  
  const getAllImgNodesInPage = () => {
    const imgElements = window.document.getElementsByTagName('img') || [];
    return Array.from(imgElements).filter(getImgsWithoutCurrentExtension) || [];
  };
  
const updateImageList = () => {
  const imageEles = getAllImgNodesInPage();
  setImages(imageEles);
};

const onRefresh = (e) => {
  e.stopPropagation();
  updateImageList();
};

  return (
    <div className="sideBar">
      <button onClick={onRefresh}>Refresh</button>
      <ImageList images={images} />
    </div>
  );
};

export default SideBar;