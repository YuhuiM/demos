function ajax(type, url, data, foo, ufoo) {
  const xhr = XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHttp');
  let str = "";
  for (const i in data) {
    str += i + "=" + data[i] + "&";
  }
  str = str.replace(/&$/, "");
  if (type.toLocaleUpperCase() === "GET") {
    xhr.open(type, url + "?" + str, true);
    xhr.send();
  } else {
    xhr.open(type, url, true);
    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    xhr.send(str);
  }
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        if (foo) {
          const data = xhr.responseText;
          foo(data);
        }
      } else {
        if (ufoo) {
          ufoo();
        }
      }
    }
  }
}
