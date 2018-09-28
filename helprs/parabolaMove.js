//抛物线 （运动对象以抛物线形式移动到指定位置）     obj=>运动对象  a=>“曲率” _a=>每过一个时间段水平平移距离  targetJson=>目标位置{"width":value,"height":value}  time=>间隔时间
function parabolaMove(obj, a, _a, targetJson, time) {
  clearInterval(obj.timer);
  let oX = obj.offsetLeft;
  let oY = obj.offsetTop;
  if (targetJson.left < oX || targetJson.left === oX && targetJson.top < oY) {
    _a = -_a;
  }
  if (targetJson.left === oX) {
    obj.timer = setInterval(function () {
      let nY = obj.offsetTop;
      obj.style.top = nY + _a + "px";
      if (targetJson.top === oY) {
        clearInterval(obj.timer);
        obj.style.top = targetJson.top + "px";
      }
      if (targetJson.top < oY && nY <= targetJson.top || targetJson.top > oY && nY >= targetJson.top) {
        clearInterval(obj.timer);
        obj.style.top = targetJson.top + "px";
      }
    }, time);
    return;
  }
  let b = (targetJson.top - oY - a * (targetJson.left - oX) * (targetJson.left - oX)) / (targetJson.left - oX);
  console.log(targetJson.top, oY, a, targetJson.left, oX);
  let x = 0;
  obj.timer = setInterval(function () {
    x += _a;
    let y = a * x * x + b * x;
    if (targetJson.left > oX && obj.offsetLeft >= targetJson.left || targetJson.left < oX && obj.offsetLeft <= targetJson.left) {
      clearInterval(obj.timer);
      obj.style.left = targetJson.left + "px";
      obj.style.top = targetJson.top + "px";
    } else {
      obj.style.left = oX + x + "px";
      obj.style.top = oY + y + "px";
    }
  }, time);
}

//end
