import React from 'react';

import Toolbar from '../Toolbar/Toolbar';
import FilterButtons from '../FilterButtons/FilterButtons';
import './Header.scss';


const Header = ({
  onRefresh,
  onMove,
  onClose,
  onFilterChange,
  noOfImgsWithAltTag,
  noOfImgsWithoutAltTag,
  selectedFilterButton
}) => {
  return (
    <div className="header">
      <Toolbar onRefresh={onRefresh} onClose={onClose} onMove={onMove} />
      <div className="app-title">Check Missing Alt Text</div>
      <FilterButtons selectedFilterButton={selectedFilterButton} onFilterChange={onFilterChange} noOfImgsWithAltTag={noOfImgsWithAltTag} noOfImgsWithoutAltTag={noOfImgsWithoutAltTag} />
    </div>
  );
};

export default Header;