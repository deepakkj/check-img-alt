import { printLine } from './modules/print';
import { mountApp, unmountApp } from './modules/index';

console.log('Content script works!');
console.log('Must reload extension for modifications to take effect.');

function receivefunc(mssg, sender, sendResponse) {
  // console.log("mssg", mssg);
  // console.log("sender", sender);
  // console.log("sendResponse", sendResponse);

  chrome.storage.sync.get(['app_open_status'], function (data) {
    console.log('app_open_status', data);
    let isAppOpen = data.app_open_status;
    if (!isAppOpen) {
      chrome.storage.sync.set({ app_open_status: true }, function () {
        console.log('app_open_status is set to true');
        mountApp();
      });
    } else {
      chrome.storage.sync.set({ app_open_status: false }, function () {
        console.log('app_open_status is set to false');
        unmountApp();
      });
    }
  });
  // chrome.storage.sync.set({ color: '#3aa757'}, function() {
  //   console.log("The color is green.");
  // });
  if (mssg.type === 'toggleApp') {
    // mountApp();
    /*  
       your code of content script goes here
    */
    //   chrome.tabs.insertCSS(null, {
    //     file: 'content.styles.css'
    //   });
    //  chrome.tabs.executeScript({
    //   file: 'contentScript.bundle.js'
    // });
  }
}

chrome.runtime.onMessage.addListener(receivefunc);

printLine("Using the 'printLine' function from the Print Module");
