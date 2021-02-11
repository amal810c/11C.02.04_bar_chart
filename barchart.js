"use strict";

window.addEventListener("load", initArray);

let model = [];

function initArray() {
  //tilføjer 40 tilfældige til arrayet "model"
  for (let counter = 0; counter < 40; counter++) {
    model[counter] = getNumbers();
  }
  loop();
  showData();
}

function loop() {
  //tager de 40 tilfældige tal fra arrayet og fordeler dem til hver bar
  for (let counter = 0; counter < 40; counter++) {
    document.getElementById("bars").getElementsByClassName("bar")[
      counter
    ].style.height = model[counter] + "px";
  }
}

function getNumbers() {
  //laver et tilfældigt tal 0 og 32
  const randomNumber = Math.floor(Math.random() * 32);
  console.log(randomNumber);
  return randomNumber;
}

function showData() {
  //kalder functionerne modifyModel og loop og sætter timeout til 1 sek.
  modifyModel();
  loop();
  setTimeout(showData, 500);
}

function modifyModel() {
  //tilføjer et tal bag på arrayet
  model.push(getNumbers());

  //tager det første nummer i arrayet og smider ud
  model.shift();
}
