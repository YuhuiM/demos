// 获取样式 dom>dom对象  attr>属性
function getStyle(dom, attr) {
  if (dom.currentStyle) {
    return dom.currentStyle[attr];
  }
  return getComputedStyle(dom, false)[attr];
}
