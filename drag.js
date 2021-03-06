let rect1 = document.getElementById("rect1");
let dx;
let dy;

rect1.addEventListener("mousedown", md);
rect1.addEventListener("mousemove", mm);
rect1.addEventListener("mouseup", mup);

function md(e) {

    dx = e.clientX - this.getBoundingClientRect().x;
    dy = e.clientY - this.getBoundingClientRect().y;
    let dpx = this.parentElement.getBoundingClientRect().x;
    let dpy = this.parentElement.getBoundingClientRect().y;
    dx = dpx + dx;
    dy = dpy + dy;
    this.setAttribute("dragging", "yes")
}

function mm(e) {

    if (this.getAttribute("dragging") == "yes") {
        this.setAttribute("x", (e.clientX - dx).toString());
        this.setAttribute("y", (e.clientY - dy).toString());
    }
}

function mup(e) {
  
    this.setAttribute("dragging", "no");
}
