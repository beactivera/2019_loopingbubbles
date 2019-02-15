"use strict";
window.addEventListener("DOMContentLoaded", init);

// Plan
// - declare global variables

// init function
// - set number of bubbles
// - call functions : createBubbles() , colorBubbles()

// createBubbles function
// - run createBubble 'number' times

// createBubble function
// - create div
// - add class .bubble
// - add to container in html

// colorBubbles
// - grab each bubble and store in var
// - assign var to function colorBubble
// - specify range conditions
// - add particular colors

const arr = [];
const bubbleContainer = document.querySelector("#bubbles");

function init() {
  console.log("init");
  const number = 256;
  createBubbles(number);
  colorBubbles();
}

function createBubbles(number) {
  console.log("createBubbles");
  for (let counter = 0; counter < number; counter++) {
    createBubble();
    console.log("create Bubble" + counter);
  }
}

function createBubble() {
  console.log("creating bubble");
  let newDiv = document.createElement("div");
  newDiv.classList.add("bubble");
  bubbleContainer.appendChild(newDiv);
  arr.push(newDiv);
}

function colorBubbles() {
  console.log("colorBubbles");
  for (let counter = 0; counter < 16; counter++) {
    let bubble = arr[counter];
    console.log(bubble);
    colorBubble(bubble, "green");
  }
  for (let counter = 16; counter < 32; counter++) {
    let bubble = arr[counter];
    console.log(bubble);

    colorBubble(bubble, "red");
  }
  for (let counter = 32; counter < 40; counter++) {
    let bubble = arr[counter];
    console.log(bubble);

    colorBubble(bubble, "lightgreen");
  }
  for (let counter = 46; counter < 50; counter++) {
    let bubble = arr[counter];
    console.log(bubble);

    colorBubble(bubble, "lightblue");
  }
  for (let counter = 56; counter < 128; counter += 3) {
    let bubble = arr[counter];
    console.log(bubble);

    colorBubble(bubble, "red");
  }
  for (let counter = 56; counter < 128; counter += 5) {
    let bubble = arr[counter];
    console.log(bubble);

    colorBubble(bubble, "orange");
  }
  for (let counter = 56; counter < 128; counter += 7) {
    let bubble = arr[counter];
    console.log(bubble);

    colorBubble(bubble, "black");
  }
  for (let counter = 1; counter < 256; counter *= 2) {
    let bubble = arr[counter];
    console.log(bubble);

    colorBubble(bubble, "yellow");
  }
  for (let counter = 64; counter < 256; counter += 16) {
    let bubble = arr[counter];
    console.log(bubble);

    colorBubble(bubble, "purple");
  }
  for (let counter = 8; counter < 256; counter += 16) {
    let bubble = arr[counter];
    console.log(bubble);

    colorBubble(bubble, "hotpink");
  }
  for (let counter = 0; counter < 256; counter += 17) {
    let bubble = arr[counter];
    console.log(bubble);

    colorBubble(bubble, "cyan");
  }
}

function colorBubble(bubble, color) {
  bubble.style.backgroundColor = color;
}
