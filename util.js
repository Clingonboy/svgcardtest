const cards = [];

function createCards (){
    let seeds = ["B", "C", "D", "S"];
    for (let i=1; i<14; i++) {
        for (let seed of seeds) {
            //cards.push("/Carte/"+i+seed+"jpg");
            let img1 = document.createElementNS("http://www.w3.org/2000/svg", "image");
            img1.setAttribute("href", "../Carte/"+i+seed+".jpg");
            img1.setAttribute("x", "50");
            img1.setAttribute("y", "50");
            img1.setAttribute("seed", seed);
            img1.setAttribute("value", i);
            cards.push(img1);
        }
    }

    //console.log(cards);
}

