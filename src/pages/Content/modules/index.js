import React from 'react';
import { render } from 'react-dom';
// import './index.css';
import SideBar from '../components/SideBar/SideBar';

const renderInspirationalSpaces = () => {
  if(!window.document.getElementById('app-container')) {
    var testEle = document.createElement('div');
    testEle.setAttribute("id", "app-container");
    window.document.body.appendChild(testEle);
  }
  console.log("-------");
  render(<SideBar />, window.document.getElementById('app-container'));
  // render(<Routes />, document.getElementById('lighthouse_edp_inspirational_spaces'));
};

export default renderInspirationalSpaces;
