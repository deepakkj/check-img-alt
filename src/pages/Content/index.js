import { printLine } from './modules/print';
import { mountApp, unmountApp } from './modules/index';

console.log('Content script works!');
console.log('Must reload extension for modifications to take effect.');

function receivefunc(mssg, sender, sendResponse) {
  let isAppOpen = JSON.parse(sessionStorage.getItem('app_open_status')) || false;


  if (mssg.type === 'toggleApp') {
    if (!isAppOpen) {
      window.sessionStorage.setItem('app_open_status', true);
      console.log('app_open_status is set to true');
      mountApp();
    } else {
      window.sessionStorage.setItem('app_open_status', false);
      console.log('app_open_status is set to false');
      unmountApp();
    }
  }
}

chrome.runtime.onMessage.addListener(receivefunc);

printLine("Using the 'printLine' function from the Print Module");
