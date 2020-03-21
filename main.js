const table = document.getElementById("table");
createCards();
let positionStart;
let eugenio;




function startGame() {
  eugenio = new Playes("Eugenio", 1);
  let mario = new Playes("Mario", 2);
  console.log(eugenio.name);

  // assegna le carte al giocatore 1
  cards.forEach((card, i) => {
    if(i<13){
      eugenio.myCards.push(card);
      cards.shift();
    }
  });

  // ordina le carte del giocatore 1
  eugenio.orderCards();

  // assegna le coordinate alle carte del g1
  positionStart = function () {
    let tempx = 160;
    let tempy = 460;
    eugenio.myCards.forEach((item, i) => {
      item.setAttribute("x", tempx.toString());
      item.setAttribute("y", tempy.toString());
      tempx = tempx + 35;
    });
  };
  positionStart();

  // disegna le carte sul tavolo
  eugenio.myCards.forEach((item, i) => {
    table.appendChild(item);
  });

  // assegnazione eventlistenert alle carte del giocatore 1
  eugenio.myCards.forEach((item, i) => {
    item.addEventListener("mousedown", md);
    item.addEventListener("mousemove", mm);
    item.addEventListener("mouseup", mup);

    item.addEventListener("touchstart", md);
    item.addEventListener("touchmove", mm);
    item.addEventListener("touchend", mup);
  });
  body = document.getElementById("body");
  body.addEventListener("mousedown", (e)=>{e.preventDefault();})
  body.addEventListener("mousemove", (e)=>{e.preventDefault();})
  body.addEventListener("mouseup", (e)=>{e.preventDefault();})

  body.addEventListener("touchstart", (e)=>{e.preventDefault();})
  body.addEventListener("touchmove", (e)=>{e.preventDefault();})
  body.addEventListener("touchend", (e)=>{e.preventDefault();})
}// end startGame

startGame();
