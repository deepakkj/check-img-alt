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
  selectedFilterButton,
}) => {
  return (
    <div className="header">
      <Toolbar onRefresh={onRefresh} onClose={onClose} onMove={onMove} />
      <div className="title-bar">
        <div className="app-logo-wrapper">
        <div className="app-logo" />
        <div className="app-name">IMPROVE ALT</div>
        </div>
        <div className="app-title">Check Missing Alt Text in Images for a Page</div>
      </div>
      <FilterButtons
        selectedFilterButton={selectedFilterButton}
        onFilterChange={onFilterChange}
        noOfImgsWithAltTag={noOfImgsWithAltTag}
        noOfImgsWithoutAltTag={noOfImgsWithoutAltTag}
      />
    </div>
  );
};

export default Header;
