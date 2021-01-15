import React from 'react';
import './AllSet.scss';

const AllSet = () => {
  const imgDataURI =
    'https://icons8.com/vue-static/landings/animated-icons-new/icons/color/rocket/rocket_192.gif';
  return (
    <div className="allset">
      <img className="allset-img" src={imgDataURI} alt="rocket" />
      <p className="title1">Hurray! You're all set.</p>
      <p className="subtitle1">There were no missing ALT text found.</p>
    </div>
  );
};

export default AllSet;
