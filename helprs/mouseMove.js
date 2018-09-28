class Move {
  constructor(el) {
    el.onmousedown = (event) => {
      let x = event.clientX;
      let y = event.clientY;
      let Y = el.offsetTop;
      let X = el.offsetLeft;
      document.onmousemove = (event) => {
        el.style.left = event.clientX - x + X + 'px';
        el.style.top = event.clientY - y + Y + 'px';
      };
      document.onmouseup = () => {
        document.onmousemove = null;
        document.onmouseup = null;
      }
    }
  }
}
