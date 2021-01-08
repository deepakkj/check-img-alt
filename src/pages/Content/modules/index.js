import React from 'react';
import { render } from 'react-dom';
// import './index.css';
import App from '../components/App';

const mountApp = () => {
  if (!window.document.getElementById('app-container')) {
    var testEle = document.createElement('div');
    testEle.setAttribute('id', 'app-container');
    window.document.body.appendChild(testEle);
  }
  console.log('>>>>>> mounting and rendering app on the DOM >>>>>>');
  render(<App />, window.document.getElementById('app-container'));
};

const unmountApp = () => {
  console.log('>>>>>> unmounting app from the DOM >>>>>>');
  if(window.document.getElementById('app-container')) {
    window.document.getElementById('app-container').remove();
  }
};

export { unmountApp, mountApp };
