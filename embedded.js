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
		removeTab(tab);

	}

}

function removeTab(tab){ //remove tab according to title or url match of tabs
	var url = tab.url;
	var title = tab.title;
	var  regExp = new RegExp(value, "i");
	if(regExp.test(url) || regExp.test(title)){
		chrome.tabs.remove(tab.id);
	}
}