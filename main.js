const table = document.getElementById("table");
createCards();
let positionStart;




function startGame() {
  let eugenio = new Playes("Eugenio", 1);
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
  });


}// end startGame
