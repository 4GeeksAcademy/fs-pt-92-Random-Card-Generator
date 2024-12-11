/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { Button } from "bootstrap";

const suits = ["spade", "club", "heart", "diamond"];
const cardNumbers = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];

const card = document.querySelector(".card");
const cardIcons = document.querySelectorAll(".card-icon");
const cardNumber = document.querySelector("h1");
const sizeInput = document.querySelector(".size-input");
const generateButton = document.querySelector(".button");
const buttonTime = document.querySelector(".button-time");

window.onload = function() {
  //write your code here
  generateRandomCard();
};

sizeInput.addEventListener("change", setCardSize);
generateButton.addEventListener("click", generateRandomCard);
buttonTime.addEventListener("click", function() {
  setInterval(generateRandomCard, 10000);
});

function generateRandomCard() {
  let generatedSuit = suits[generateRandomNumber(0, suits.length)];
  setCardIcons(generatedSuit);
  cardNumber.innerHTML =
    cardNumbers[generateRandomNumber(0, cardNumbers.length)];
  card.className = "card " + generatedSuit;
}

function setCardIcons(suit) {
  switch (suit) {
    case "spade":
      setIcon("♠");
      break;
    case "club":
      setIcon("♣");
      break;
    case "heart":
      setIcon("♥");
      break;
    case "diamond":
      setIcon("♦");
      break;
  }
}

function setIcon(icon) {
  cardIcons[0].innerHTML = icon;
  cardIcons[1].innerHTML = icon;
}

function generateRandomNumber(min, max) {
  return Math.floor(min + Math.random() * (max - min));
}

function setCardSize(e) {
  let sizes = e.target.value.split("x");
  card.style.width = sizes[0] + "px";
  card.style.height = sizes[1] + "px";
  sizeInput.value = "";
}
