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
	var isUrl = false;
	var isTitle = false;

	var splits = value.split(" ");
	if(splits[0] == "-t" || splits[0] == "-T"){
		isTitle = true;
	}
	if(splits[3] == "-u" ||  splits[3] == "-U"){
		isUrl = true;
	}
	var inputTitle
	for(var i = 0 ;i < tabs.length;  ++i)
	{
		var tab = tabs[i];

		var title = tab.title;
		console.log("title %s", title);
		if(isTitle){
			removeTab(title, tab);
			continue;
		}
		var url = tab.url;
		console.log("url %s", url);
		if(isUrl){
			removeTab(url, tab);
			continue;
		} 

	}

}
function removeTab(var something, var tab){
	if(something.indexOf(value) != -1){
		chrome.tabs.remove(tab.id);
	}
}