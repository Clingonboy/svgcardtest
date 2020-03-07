let rect1 = document.getElementById("rect1");
let dx;
let dy;
let dpx;
let dpy;

rect1.addEventListener("mousedown", md);
rect1.addEventListener("mousemove", mm);
rect1.addEventListener("mouseup", mup);

function md(e) {

    dx = e.clientX - rect1.getBoundingClientRect().x;
    dy = e.clientY - rect1.getBoundingClientRect().y;
    dpx = rect1.parentElement.getBoundingClientRect().x;
    dpy = rect1.parentElement.getBoundingClientRect().y;

    console.log("xlick - x: " + dx + " y: " + dy);
    this.setAttribute("dragging", "yes")

}

function mm(e) {
    if (this.getAttribute("dragging") == "yes") {
        console.log("yes");
        this.setAttribute("x", (e.clientX - dpx - dx).toString());
        this.setAttribute("y", (e.clientY - dpy - dy).toString());
    }
}

function mup(e) {
    this.setAttribute("dragging", "no");
}
