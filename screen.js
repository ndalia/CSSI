window.onload = function(){ 
    var id = 100;

    document.getElementById("save-page").onclick = function() {

        chrome.tabs.captureVisibleTab(function(screenshotUrl) {
            var viewTabUrl = chrome.extension.getURL('screenshot.html?id=' + id++)
            var targetId;

            chrome.tabs.onUpdated.addListener(function listener(tabId, changedProps) {

                if (changedProps.status != "complete")
                    return;

                var views = chrome.extension.getViews();
                for (var i = 0; i < views.length; i++) {
                    var view = views[i];
                    if (view.location.href == viewTabUrl) {
                    view.setScreenshotUrl(screenshotUrl);
                    break;
                    }
                }
            });

            chrome.tabs.create({url: viewTabUrl}, function(tab) {
                targetId = tab.id;
            });
        });
    };
};
// var screenshot = {
//   content : document.createElement("canvas"),
//   data : '',

//   init : function() {
//       this.initEvents();
//   },

//   saveScreenshot : function() {
//       var image = new Image();
//       image.onload = function() {
//           var canvas = screenshot.content;
//           canvas.width = image.width;
//           canvas.height = image.height;
//           var context = canvas.getContext("2d");
//           context.drawImage(image, 0, 0);

//           // save the image
//           var link = document.createElement('a');
//           link.download = "download.png";
//           link.href = screenshot.content.toDataURL();
//           link.click();
//           screenshot.data = '';
//       };
//       image.src = screenshot.data; 
//   },

//   initEvents : function() {
//     document.getElementById("#save-page").onclick = function(tab) {
//           chrome.tabs.captureVisibleTab(null, {
//               format : "png",
//               quality : 100
//           }, function(data) {
//               screenshot.data = data;

//               chrome.tabs.query({
//                   active : true,
//                   currentWindow : true
//               }, function(tabs) {
//                   chrome.tabs.sendMessage(tabs[0].id, {ready : "ready"}, function(response) {
//                       if (response.download === "download") {
//                           screenshot.saveScreenshot();
//                       }
//                       else {
//                           screenshot.data = '';
//                       }
//                   });
//               }); 

//           });
//       };
//   }
// };

// screenshot.init();




// window.onload = function(){ 
//   var id = 100;

//   document.getElementById("save-page").onclick = function() {

//     chrome.tabs.captureVisibleTab(function(screenshotUrl) {
//       var viewTabUrl = chrome.extension.getURL('screenshot.html?id=' + id++)
//       var targetId = null;

//       chrome.tabs.onUpdated.addListener(function listener(tabId, changedProps) {

//         if (tabId != targetId || changedProps.status != "complete")
//           return;

//         chrome.tabs.onUpdated.removeListener(listener);

//         var views = chrome.extension.getViews();
//         for (var i = 0; i < views.length; i++) {
//           var view = views[i];
//           if (view.location.href == viewTabUrl) {
//             view.setScreenshotUrl(screenshotUrl);
//             break;
//           }
//         }
//       });

//       chrome.tabs.create({url: viewTabUrl}, function(tab) {
//         targetId = tab.id;
//       });
//     });
//   };
// };
