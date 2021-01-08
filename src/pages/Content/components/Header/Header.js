import React from 'react';

import Toolbar from '../Toolbar/Toolbar';
import FilterButtons from '../FilterButtons/FilterButtons';
import './Header.scss';


const Header = ({
  onRefresh,
  onMove,
  onClose,
  noOfImgsWithAltTag,
  noOfImgsWithoutAltTag
}) => {
  return (
    <div className="header">
      <Toolbar onRefresh={onRefresh} onClose={onClose} onMove={onMove} />
      <div className="app-title">Check Missing Alt Tags</div>
      <FilterButtons noOfImgsWithAltTag={noOfImgsWithAltTag} noOfImgsWithoutAltTag={noOfImgsWithoutAltTag} />
    </div>
  );
};

export default Header;