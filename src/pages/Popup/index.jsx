import React from 'react';
import { render } from 'react-dom';

import Popup from './Popup';
import './index.css';

// function receivefunc(mssg, sender, sendResponse){
//   console.log("mssg", mssg);
//   console.log("sender", sender);
//   console.log("sendResponse", sendResponse);
//     if(mssg.txtt==="execute"){
//       /*  
//          your code of content script goes here
//       */
//       chrome.tabs.insertCSS(null, {
//         file: 'content.styles.css'
//       });
//      chrome.tabs.executeScript({
//       file: 'contentScript.bundle.js'
//     });
//     }
// }

// chrome.runtime.onMessage.addListener(receivefunc);

render(<Popup />, window.document.querySelector('#app-container'));
