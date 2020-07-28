chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({color: '#3aa757'}, function() {
      console.log('The color is green.');
    });
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
      chrome.declarativeContent.onPageChanged.addRules([{
        conditions: [new chrome.declarativeContent.PageStateMatcher({
          pageUrl: {hostEquals: 'developer.chrome.com'},
        })
        ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
      }]);
    });
    var rule1 = {
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { hostEquals: 'www.google.com', schemes: ['https'] },
            css: ["input[type='password']"]
          })
        ],
        actions: [ new chrome.declarativeContent.ShowPageAction() ]
      };
      var rule2 = {
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { hostEquals: 'www.google.com', schemes: ['https'] },
            css: ["input[type='password']"]
          }),
          new chrome.declarativeContent.PageStateMatcher({
            css: ["video"]
          })
        ],
        actions: [ new chrome.declarativeContent.ShowPageAction() ]
      };
  });