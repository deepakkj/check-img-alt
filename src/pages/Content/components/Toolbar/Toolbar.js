import React from 'react';

import './Toolbar.scss';

const Toolbar = ({ onRefresh, onMove, onClose }) => {
  return (
    <div className="toolbar">
      <button onClick={onMove} className="btn-move btn-move-cursor"></button>
      <button onClick={onRefresh} className="btn-refresh"></button>
      <button onClick={onClose} className="btn-close"></button>
    </div>
  );
};

export default Toolbar;
