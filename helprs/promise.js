function ajax(url){
	return new Promise(function(resolve,reject){
		var xhr = XMLHttpRequest?new XMLHttpRequest():new ActiveXObject('Microsoft.XMLHttp');
			xhr.open("GET",url,true);
			xhr.send();
		xhr.onreadystatechange = function(){
			if(xhr.readyState === 4){
				if(xhr.status === 200){
						var data = xhr.responseText;
						resolve(data);
				}else{
					reject("失败");
				}
			}
		}
	})
}
