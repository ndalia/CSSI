document.addEventListener('DOMContentLoaded', function () {

    const bg = chrome.extension.getBackgroundPage()
    Object.keys(bg.bears).forEach(function (url) {
      const div = document.createElement('div')
      div.textContent = `${url}: ${bg.bears[url]}`
      document.body.appendChild(div)
    })
  
    document.querySelector('button').addEventListener('click', onclick, false)
    
    function onclick () {
    chrome.tabs.query({currentWindow: true, active: true}, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, 'hi', setCount)
    })
    }
    
  }, false)

  chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({color: '#3aa757'}, function() {
      console.log("The color is green.");
    });
  });