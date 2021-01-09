import React from 'react';

import './FilterButtons.scss';

const FilterButtons = ({ noOfImgsWithAltTag, noOfImgsWithoutAltTag, onFilterChange, selectedFilterButton }) => {

const withAltTagButtonActiveClassName = selectedFilterButton === 'WITH_ALT' ? 'active' : '';
const withoutAltTagButtonActiveClassName = selectedFilterButton === 'WITHOUT_ALT' ? 'active' : '';

  return (
    <div className="filterButtons">
      {/* <button onClick={onMove} className="btn-filter">
        <div>
          <div className="qty">50000</div>
          Total Images
        </div>
      </button> */}
      <button onClick={() => onFilterChange('WITHOUT_ALT')} className={`btn-filter ${withoutAltTagButtonActiveClassName}`}>
        <div>
          <div className="qty">{noOfImgsWithoutAltTag}</div>
          Without Alt Tags
        </div>
      </button>
      <button onClick={() => onFilterChange('WITH_ALT')} className={`btn-filter ${withAltTagButtonActiveClassName}`}>
        <div>
          <div className="qty">{noOfImgsWithAltTag}</div>
          With Alt Tags
        </div>
      </button>
    </div>
  );
};

export default FilterButtons;
