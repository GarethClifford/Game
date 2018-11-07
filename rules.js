var canvas = document.getElementById("game");
var ctx = canvas.getContext("2d");
var posX = canvas.width /2;
var posY = canvas.height - 50;
var playerDirectionX = 0;
var playerDirectionY = 0;
var lastUpdate = 0;

canvas.style.backgroundImage = "url('images/orig.gif')";

var rocket = new Image();
rocket.onload = function() {
  ctx.drawImage(rocket,posX,posY);
}
rocket.src = "images/icons8-fighter-jet-48.png";

addEventListener("keydown",function(e)
{
    if(e.keyCode == 39 || e.keyCode == 68) {
        playerDirectionX = 4;
    }
    if(e.keyCode == 37 || e.keyCode == 65) {
      playerDirectionX = -4;
    }
    if(e.keyCode == 38 || e.keyCode == 87) {
      playerDirectionY = -4;
    }
    if( e.keyCode == 40 || e.keyCode == 83) {
      playerDirectionY = 4;
    }
  });
addEventListener("keyup", function(e) {
  playerDirectionX = false;
  playerDirectionY = false;
});


// this line cause a function (Tick) to be performed every 16 milliseconds
var current = setInterval(Tick,16);

function Tick()
{
// these 3 lines keep the flow of the game moving - they may not be necessary for you
    var now = Date.now();
    var dt = now - lastUpdate;
    lastUpdate = now;
// update checks the game conditions and changes them as necessary
    Update(dt);
//render redraws what it needs to draw based upon the games conditions
    Render(dt);

}

function Update(dt) {
  //updating the positon of the ship
  posX +=playerDirectionX;
  posY +=playerDirectionY
  //update astroids positions
}
function Render(dt) {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  // rocket.onload = function() {
    ctx.drawImage(rocket,posX,posY);
  // }
  // rocket.src = "images/icons8-fighter-jet-48.png";
}
