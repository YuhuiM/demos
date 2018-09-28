// 运动 dom>dom对象
//当多个属性需要改变的时候，可以考虑传一个JSON数据{"width":400,"left":500,"height":300}
function startMove(dom, json, fn) {
  clearInterval(dom.timer);
  dom.timer = setInterval(function () {
    for (var attr in json) {
      var flag = true;
      if (attr === "opacity") {
        var iCur = Math.round(getStyle(dom, attr) * 100);
      } else {
        var iCur = parseInt(getStyle(dom, attr)); //取到当前值
      }
      var iSpeed = (json[attr] - iCur) / 8;
      iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
      if (attr === "opacity") {
        dom.style.opacity = (iCur + iSpeed) / 100;
        dom.style.filter = "alpha(opacity=" + (iCur + iSpeed) + ")";
      } else {
        dom.style[attr] = iCur + iSpeed + "px";
      }
      if (iCur !== json[attr]) {
        flag = false;
      }
    }
    if (flag) {
      clearInterval(dom.timer);
      if (fn) {
        fn();
      }
    }
  }, 30);
}

function getStyle(obj, attr) {
  if (obj.currentStyle) {
    return obj.currentStyle[attr];
  }
  return getComputedStyle(obj, false)[attr];
}
