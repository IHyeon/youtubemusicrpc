 
function upP(info, info2, info3){
	var data = {
        action: "nono",
        tab: info,
		tabId: info2,
		changeInfo: info3
      };
	var settings = {
      "async": true,
      "crossDomain": true,
      "url": "http://localhost:3000/",
      "method": "POST",
      "headers": {
        "content-type": "application/json"
      },
      "processData": false,
      "data": JSON.stringify(data)
    }

    $.ajax(settings);
}
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
	upP(tab, tabId, changeInfo)
});