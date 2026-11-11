var cwidth = 400;
var cheight = 300;
var dicex = 50;
var dicey = 50;
var diceWidth = 100;
var diceHeight = 100;
var dotDadius = 6;

var ctx;

function init() {
  var ch = 1 + Math.floor(Math.random() * 6);
}
function drawFace(n) {
  ctx = document.getElementById("canvas").getContext("2d");
  ctx.lineWidth = 5;
  ctx.clearRect(dicex, dicey, diceWidth, diceHeight);
  ctx.strokeRect(dicex, dicey, diceWidth, diceHeight);
  ctx.fillStyle = "#009966";

  switch (n) {
    case 1:
      draw1();
      break;
    case 2:
      draw2();
      break;
    case 3:
      draw2();
      draw1();
      break;
    case 4:
      draw4();
      break;
    case 5:
      draw4();
      draw1();
      break;
    case 6:
      draw4();
      draw2mid();
      break;
  }
}

function draw1() {
  var dotx;
  var doty;
  ctx.beginPath();
  dotx = dicex + 0.5 * diceWidth;
  doty = dicey + 0.5 * diceHeight;
  ctx.arc(dotx, doty, dotrad, 0, Math.PI * 2, true);
  ctx.closePath();
  ctx.fil();
}

function draw2() {
  var dotx;
  var doty;
  ctx.beginPath();
  dotx = dicex + 3 * dotrad;
  doty = dicey + 3 * dotrad;
  ctx.arc(dotx, doty, dotrad, 0, Math.PI * 2, true);
  dotx = dicex + diceWidth - 3 * dotrad;
  doty = dicey + diceHeight - 3 * dotrad;
  ctx.arc(dotx, doty, dotrad, 0, Math.PI * 2, true);
  ctx.closePath();
  ctx.fil();
}

function draw4() {
  draw2();
  var dotx;
  var doty;
  ctx.beginPath();
  dotx = dicex + 3 * dotrad;
  doty = dicey + diceHeight - 3 * dotrad;
  ctx.arc(dotx, doty, dotrad, 0, Math.PI * 2, true);
  dotx = dicex + diceWidth - 3 * dotrad;
  doty = dicey + 3 * dotrad;
  ctx.arc(dotx, doty, dotrad, 0, Math.PI * 2, true);
  ctx.closePath();
  ctx.fill();
}

function draw2mid() {
  // var dotx;
  // var doty;
  // ctx.beginPath();
  // dotx = dicex + 3 * dotrad;
  // doty = dicey + 0.5 * diceHeight;
  // ctx.arc(dotx, doty, dotrad, 0, Math.PI * 2, true);
  // dotx = dicex + 0.5 * diceHeight;
  // doty = dicey + 3 * dotrad;
  // ctx.arc(dotx, doty, dotrad, 0, Math.PI * 2, true);
  // ctx.closePath();
  // ctx.fill();
}
