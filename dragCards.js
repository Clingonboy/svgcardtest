
function md(e) {
  e.preventDefault();
  if (e.type === "touchstart") {
    dx = e.touches[0].clientX - this.getBoundingClientRect().x;
    dy = e.touches[0].clientY - this.getBoundingClientRect().y;
  } else {
    dx = e.clientX - this.getBoundingClientRect().x;
    dy = e.clientY - this.getBoundingClientRect().y;
  }
  let dpx = this.parentElement.getBoundingClientRect().x;
  let dpy = this.parentElement.getBoundingClientRect().y;
  dx = dpx + dx;
  dy = dpy + dy;
  this.setAttribute("dragging", "yes");
  let parent = this.parentElement;
  parent.removeChild(this);
  parent.appendChild(this);

}

function mm(e) {

  if (this.getAttribute("dragging") == "yes") {
    e.preventDefault();
    if (e.type === "touchmove") {
      this.setAttribute("x", (e.touches[0].clientX - dx).toString());
      this.setAttribute("y", (e.touches[0].clientY - dy).toString());
    } else {
      this.setAttribute("x", (e.clientX - dx).toString());
      this.setAttribute("y", (e.clientY - dy).toString());
    }
  }
}

function mup(e) {
  e.preventDefault();
  this.setAttribute("dragging", "no");
}
