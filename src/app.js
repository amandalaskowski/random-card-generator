import "bootstrap";
import "./style.css";

window.onload = function() {
  let card = document.querySelector(".card");
  let cardNumbers = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "K",
    "J",
    "A"
  ];
  let cardSuits = ["heart", "spades", "clubs", "diamonds"];
  let randomCardNumber =
    cardNumbers[Math.floor(Math.random() * cardNumbers.length)];
  let randomCardSuits = cardSuits[Math.floor(Math.random() * cardSuits.length)];
  let cardSuit = document.querySelector(".card h1");
  cardSuit.innerHTML = randomCardNumber;
  card.classList.add(randomCardSuits);
};
