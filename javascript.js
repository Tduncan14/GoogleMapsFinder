
// creating constants and global variables

let map = new.google.maps( document.getElementById("place"),myOptions);
let can = document.getElementById("canvas");
let pl = document.getElementById("place");
let ctx = can.getContext("2d");

let createDiv = document.createElement("<div>");

createDiv.innerHTML = ("<canvas id='canvas' width = '700' height ='400'> No canvas </canvas>");

document.body.appendChild(createDiv);
