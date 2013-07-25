chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
	if (tab.url.indexOf('xvideos') != -1) {
		chrome.pageAction.show(tabId);
	}
});

chrome.pageAction.onClicked.addListener(function() {
	chrome.tabs.executeScript(null, {
		"code": "var urls=document.URL.split('/'); var id=urls[3].substr(5,urls[3].length-5); location.href='http://flashservice.xvideos.com/embedframe/'+id"
	});
});