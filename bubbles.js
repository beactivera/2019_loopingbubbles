"use strict";
window.addEventListener("DOMContentLoaded", init);

// Plan
// - declare global variables

const arr = [];
const bubbleContainer = document.querySelector("#bubbles");

// init function

function init() {
  console.log("init");
  // - set number of bubbles
  const number = 256;
  // - call functions : createBubbles() , colorBubbles()
  createBubbles(number);
  colorBubbles();
}

// createBubbles function
function createBubbles(number) {
  console.log("createBubbles");
  // - run createBubble 'number' times
  for (let counter = 0; counter < number; counter++) {
    createBubble();
    console.log("create Bubble" + counter);
  }
}

// createBubble function
function createBubble() {
  console.log("creating bubble");
  // - create div
  let newDiv = document.createElement("div");
  // - add class .bubble
  newDiv.classList.add("bubble");
  // - add to container in html
  bubbleContainer.appendChild(newDiv);
  // - push div to the array
  arr.push(newDiv);
}

// colorBubbles
function colorBubbles() {
  console.log("colorBubbles");
  // - specify range conditions
  for (let counter = 0; counter < 16; counter++) {
    // - grab each bubble and store in var
    let bubble = arr[counter];
    console.log(bubble);
    // - assign var to function colorBubble
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
  // - add particular colors
  bubble.style.backgroundColor = color;
}
