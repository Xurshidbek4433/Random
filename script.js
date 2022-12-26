"use strict";

const goo = document.querySelector(".goo");
const hidden = document.querySelector(".img__sub");
const gooImg = document.querySelector(".goo__img");
const input = document.querySelector(".number_input");
const natija = document.querySelector(".natija");

let array = [];
let odamlarSoni;
let randomRaqam;

const random = (e) => {
  return Math.floor(Math.random() * e) + 1;
};

goo.addEventListener("click", () => {
  hidden.classList.remove("hidden");
  odamlarSoni = Number(input.value);
  randomRaqam = random(odamlarSoni);
  for (let i = 1; i <= odamlarSoni; i++) {
    array.push(i);
  }
  
  for (let i = 0; i <= array.length; i++) {
    if (randomRaqam === array[i]) {
      natija.textContent = array[i];
      console.log("sizni navbatiz", array, randomRaqam);
      array = []
    }
  }
});

input.addEventListener("click", () => {
  hidden.classList.add("hidden");
});
