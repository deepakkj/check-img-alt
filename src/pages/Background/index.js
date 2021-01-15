import '../../assets/img/icon-16.png';
import '../../assets/img/icon-32.png';
import '../../assets/img/icon-48.png';
import '../../assets/img/icon-64.png';
import '../../assets/img/icon-128.png';
import '../../assets/img/icon-256.png';

console.log('This is the background page.');
console.log('Put the background scripts here.');

const sendfunc = (tab) => {
  console.log('sending message from background to content_script');
  var msg = { type: 'toggleApp' };
  chrome.tabs.sendMessage(tab.id, msg);
};

chrome.browserAction.onClicked.addListener(sendfunc);
