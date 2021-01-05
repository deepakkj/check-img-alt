import { printLine } from './modules/print';
import renderInspirationalSpaces from "./modules/index";

console.log('Content script works!');
console.log('Must reload extension for modifications to take effect.');

function renderReactDecoComponent() {
  console.log(">>>>>>");
  renderInspirationalSpaces();
};

renderReactDecoComponent();

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

printLine("Using the 'printLine' function from the Print Module");
