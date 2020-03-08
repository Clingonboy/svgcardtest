// Global variable
const cards = [];

/**
 * Function for shuffle an arrey
 * @param  {[type]} array [description]
 *
 */
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

/**
* Function for creating all the crds,
* put them in an array and shuffle it
*/
function createCards (){
    let seeds = ["B", "C", "D", "S"];
    for (let i=1; i<14; i++) {
        for (let seed of seeds) {
            //cards.push("/Carte/"+i+seed+"jpg");
            let img1 = document.createElementNS("http://www.w3.org/2000/svg", "image");
            img1.setAttribute("href", "./Carte/"+i+seed+".jpg");
            img1.setAttribute("x", "50");
            img1.setAttribute("y", "50");
            img1.setAttribute("seed", seed);
            img1.setAttribute("value", i);
            cards.push(img1);
        }
    }
    shuffle(cards);
}

/**
 * Class Player
 * @param {text} name The name of Player
 * @param {number} position The player position on the table
 */
class Playes {
  constructor (name, position) {
    this.name = name
    this.position = position;
    this.myCards = [];
    this.pcard = {
      my : [],
      leftOpp : [],
      rightOpp : [],
      member: []
    }
  }

  orderCards () {
    this.myCards.sort(function (a, b) {
      if (parseInt(a.getAttribute("value")) < parseInt(b.getAttribute("value"))) {
        return 1;
      }
      if (parseInt(a.getAttribute("value")) > parseInt(b.getAttribute("value"))) {
        return -1;
      }
    });
  }

}
