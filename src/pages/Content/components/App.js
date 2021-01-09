import React from 'react';
import Draggable from 'react-draggable';
import SideBar from './SideBar/SideBar'

const App = () => {
  return (
    <Draggable handle=".btn-move-cursor" axis="x">
      <div>
      <SideBar />
      </div>
    </Draggable>
  );
}

export default App;