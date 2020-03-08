console.log("Ciao");

/**
 * Creazione oggetto carta e inserimento nella tavola
 * disegno della carta nel SVG
 */

 function createCarta (){
     let img1 = document.createElementNS("http://www.w3.org/2000/svg", "image");
     img1.setAttribute("id", "c1");
     img1.setAttribute("href", "/Carte/2B.jpg");
     img1.setAttribute("x", "100");
     img1.setAttribute("y", "100");

     let table = document.getElementById("table");
     table.appendChild(img1);
 }

 const table = document.getElementById("table");

 class Carta {
     // father: an SVG element where the card will be draw
     // imgname: a string that corrispond of the name of dard ex.( "2B" or "10S" )
     constructor (father, imgname){
        this.father = father;
        this.imgname = "/Carte/" + imgname + ".jpg";
        this.createImage();
     }

     createImage (){
        let img1 = document.createElementNS("http://www.w3.org/2000/svg", "image");
        img1.setAttribute("id", "c2");
        img1.setAttribute("href", this.imgname);
        img1.setAttribute("x", "50");
        img1.setAttribute("y", "50");
        this.father.appendChild(img1);
     }
 }

createCarta();

cardToMove = document.getElementById("c1");

// prova animazione carta

let globalID;

function move () {
    let x = parseInt(cardToMove.attributes.x.value);
    if (x < 500) {
        console.log(x);
        cardToMove.setAttribute("x", (x+20).toString());
        globalID = requestAnimationFrame(move);
    } else {
        cardToMove.setAttribute("x", "500");
        cancelAnimationFrame(globalID);
    }
}

// prova gestione eventi

let eventName;

function mouseOver (e) {
    eventName = e;
}

//cardToMove.addEventListener("mouseover", mouseOver);

function mouseClickCard (e) {
    let xrel = e.clientX - e.target.getBoundingClientRect().x;
    let yrel = e.clientY - e.target.getBoundingClientRect().y;
    console.log("mouse x rel : " + xrel);
    console.log("mouse y rel : " + yrel);
}

cardToMove.addEventListener("mousedown", mouseCard3);

// prova con la carta inclinata
card3 = document.getElementById("c3");
card5 = document.getElementById("c5");

function mouseCard3 (e) {
    let xrel = e.clientX - e.target.getBoundingClientRect().x;
    let yrel = e.clientY - e.target.getBoundingClientRect().y;
    let rect3 = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect3.setAttribute("x", (e.target.getBoundingClientRect().x -
                                table.getBoundingClientRect().x).toString());
    rect3.setAttribute("y", (e.target.getBoundingClientRect().y -
                                table.getBoundingClientRect().y).toString());
    rect3.setAttribute("width", e.target.getBoundingClientRect().width.toString());
    rect3.setAttribute("height", e.target.getBoundingClientRect().height.toString());
    rect3.setAttribute("style", "stroke:rgb(0,0,0);stroke-width:2;fill:none");
    rect3.setAttribute("transform", "matrix(0.7 0.7 -0.7 0.7 337 101)");
    table.appendChild(rect3);
    console.log("mouse x rel : " + xrel);
    console.log("mouse y rel : " + yrel);
}
