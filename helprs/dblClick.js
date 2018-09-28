function dblClick(fn, arg) {
  if (Object.prototype.toString.call(arg) !== '[object Array]') {
    console.error('the second argment must be array');
    return
  }
  var flag = false;
  return function () {
    if (flag) {
      fn(...arg)
    }
    flag = true;
    setTimeout(function () {
      flag = false
    }, 300)
  }
}
