"use strict";
const square = document.querySelector("#square");
const circle = document.querySelector("#circle");
const buttonE = document.querySelector("#e_btn");
const inputText = document.querySelector("#text");
const inputRange = document.querySelector("#range");
const span = document.querySelector("#range-span");

const changeBackgroundColorOfTheSquare = function () {
  square.style.backgroundColor = inputText.value;
};

const changeCircle = function (event) {
  span.textContent = event.target.value;
  circle.style.width = getComputedStyle(circle).width;
  circle.style.width = event.target.value + "%";
  circle.style.height = getComputedStyle(circle).height;
  circle.style.height = event.target.value + "%";
};

buttonE.addEventListener("click", changeBackgroundColorOfTheSquare);
inputRange.addEventListener("input", changeCircle);

buttonE.style.display = "none";
