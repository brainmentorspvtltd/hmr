var playerImg;
var jumpSound;
var backgroundSound;
var cactusImg;
function preload(){
	// Assets Loading Code
	playerImg = loadGif("assets/images/mario.gif");
	jumpSound = loadSound("assets/sounds/jump.wav");
	backgroundSound = loadSound("assets/sounds/background.mp3");
	cactusImg = loadGif("assets/images/cactus1.gif");
	
}
var playerObject;
var cactusObject;
var cactusObject2;
function setup(){
	// Create Object of Player
	// Create Canvas (Board)
	createCanvas(500,500);  // w, h
	playerObject = new Player(playerImg);
	cactusObject = new Cactus(cactusImg,width);
	cactusObject2 = new Cactus(cactusImg,width+200);
	//backgroundSound.loop();
	
}

function keyPressed(){
	if(keyCode ==32){
		playerObject.jump();
		jumpSound.play();
	}
}


function draw(){
	background('black');
	road();
	playerObject.drawPlayer();
	playerObject.down();
	cactusObject.drawCactus();
	cactusObject.move();
	cactusObject.outOfScreen();
	cactusObject2.drawCactus();
	cactusObject2.move();
	cactusObject2.outOfScreen();
	checkCollision(playerObject,cactusObject);
	checkCollision(playerObject,cactusObject2);
}

function checkCollision(player,cactus){
	var xDistance = Math.abs(player.x - cactus.x);
	var yDistance = Math.abs(player.y - cactus.y);
	var maxWidth = Math.max(player.w, cactus.w)-30;
	var maxHeight = Math.max(player.h,cactus.h)-20;
	if(xDistance<=maxWidth && yDistance<=maxHeight){
		fill("red");
		textSize(32);
		text("Game Over",width/2,height/2);
		noLoop();
	}
}


