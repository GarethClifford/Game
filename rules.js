var canvas = document.getElementById("game");
var ctx = canvas.getContext("2d");
var posX = canvas.width /2;
var posY = canvas.height - 50;
var playerDirectionX = 0;
var playerDirectionY = 0;
var lastUpdate = 0;



canvas.style.backgroundImage = "url('images/falling.gif')";

var rocket = new Image();
rocket.onload = function() {
  ctx.drawImage(rocket,posX,posY);
}
rocket.src = "images/icons8-fighter-jet-48.png";

addEventListener("keydown",function(e) {
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
  }
);
addEventListener("keyup", function(e) {
  playerDirectionX = false;
  playerDirectionY = false;
});

addEventListener("keydown",function(e) {
  if(e.keyCode == 76) {
    shootMissile();
  }
});
var current = setInterval(Tick,16);

function Tick() {
    var now = Date.now();
    var dt = now - lastUpdate;
    lastUpdate = now;
    Update(dt);
    Render(dt);
}

function shootMissile() {
  var elem = document.getElementById('missile');
  var pos = 0;
  var id = setInterval(frame,5);
  pos++;
  elem.style.top = pos + 'px';
  elem.style.left = pos + 'px';
  }

function Update(dt) {
  posX +=playerDirectionX;
  posY +=playerDirectionY
  //update astroids positions
}
function Render(dt) {
  ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.drawImage(rocket,posX,posY);
}
