var value;
var tabs = undefined;
document.getElementById("button").addEventListener("click", onclick);
chrome.tabs.getAllInWindow(null, function(_tabs){
	tabs = _tabs;
});

function onclick(){
	var textfield = document.getElementById("textfield");
	value = textfield.value;
	console.log(value);
	for(var i = 0 ;i < tabs.length;  ++i)
	{
		var tab = tabs[i];
		var url = tab.url;
		console.log("url %s", url);
		removeTab(url, tab);

	}

}
function removeTab(something, tab){
	if(something.indexOf(value) != -1){
		chrome.tabs.remove(tab.id);
	}
}