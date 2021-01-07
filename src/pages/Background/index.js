import '../../assets/img/icon-34.png';
import '../../assets/img/icon-128.png';

console.log('This is the background page.');
console.log('Put the background scripts here.');

function sendfunc(tab) {
  console.log('sending message from background to content_script');
  var msg = { type: 'toggleApp' };
  chrome.tabs.sendMessage(tab.id, msg);
}
chrome.browserAction.onClicked.addListener(sendfunc);
