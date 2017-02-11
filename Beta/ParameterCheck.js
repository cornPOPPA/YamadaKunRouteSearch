function sendparam(parametername, gameobjectname, functionname)
{
	var value = 'default';
	var str = location.search.replace(new RegExp('(\%20)+', 'g'), '');
	var reg = new RegExp(parametername + '=(.*?)(&|$)');
	var match = str.match(reg);
	if(match) {
		value = decodeURIComponent(match[1]);
	}
    SendMessage( gameobjectname, functionname, value );
}

function displayparam(paramstring)
{
	var url = location.href.replace(new RegExp('\\?.*$'), '');
	url = decodeURIComponent(url + paramstring);
	if (document.getElementById) {
		document.getElementById("urldisplay").innerHTML = url;
	}
}