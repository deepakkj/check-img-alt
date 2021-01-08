import React from 'react';

import './FilterButtons.scss';

const FilterButtons = ({ noOfImgsWithAltTag, noOfImgsWithoutAltTag }) => {
  return (
    <div className="filterButtons">
      {/* <button onClick={onMove} className="btn-filter">
        <div>
          <div className="qty">50000</div>
          Total Images
        </div>
      </button> */}
      <button onClick={() => {}} className="btn-filter">
        <div>
          <div className="qty">{noOfImgsWithoutAltTag}</div>
          Without Alt Tags
        </div>
      </button>
      <button onClick={() => {}} className="btn-filter">
        <div>
          <div className="qty">{noOfImgsWithAltTag}</div>
          With Alt Tags
        </div>
      </button>
    </div>
  );
};

export default FilterButtons;
