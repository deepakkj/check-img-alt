import { mountApp, unmountApp } from './modules/index';

console.log('Content script works!');
console.log('Must reload extension for modifications to take effect.');

const receivefunc = (mssg, sender, sendResponse) => {
  let isAppOpen = JSON.parse(sessionStorage.getItem('app_open_status')) || false;

  if (mssg.type === 'toggleApp') {
    if (!isAppOpen) {
      mountApp();
    } else {
      unmountApp();
    }
  }
}

chrome.runtime.onMessage.addListener(receivefunc);

