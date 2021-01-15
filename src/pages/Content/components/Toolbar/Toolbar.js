import React from 'react';

import './Toolbar.scss';

const Toolbar = ({ onRefresh, onMove, onClose }) => {
  return (
    <div className="toolbar">
      <button onClick={onMove} title="Move Horizontally" className="btn-move btn-move-cursor"></button>
      <button onClick={onRefresh} title="Refresh" className="btn-refresh"></button>
      <button onClick={onClose} title="Close" className="btn-close"></button>
    </div>
  );
};

export default Toolbar;
