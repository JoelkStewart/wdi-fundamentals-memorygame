console.log("Up and running!");
var cards = [
{
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png"
},
{
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png",
},
{
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png",
},
{
    rank: "king",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png",
}
];
var cardsInPlay = [];
//check for match

function checkForMatch() {
    if (cardsInPlay[0] === cardsInPlay[1]){
        alert("You found a match!");
        //loaction.reload()
    } 
    else {
        alert ("sorry, try again.");
    }
    };

    function flipCard() {
    var cardId = this.getAttribute('data-id');
    console.log("User flipped" + cards[cardId].rank);
    cardsInPlay.push(cards[cardId].rank);
    console.log(cards[cardID].cardImage);
    console.log(cards[cardID].suit);
    this.setAttribute(src, cards[cardId].cardImage);
    if (cardsInPlay.length === 2){
    checkForMatch();
    // cards being played
    }
};
function createBoard() {
    const cardTable = document.getElementById('game-board');
    for (var i = 0; i < cards.length; i++) {
       var cardElement = document.createElement('img');
       cardElement.setAttribute('src', 'images/back.png');
       cardElement.setAttribute('data-id', i);
       cardElement.addEventListener('click', flipCard);
       cardElement.appendChild(cardElement);
    }
};
createBoard();