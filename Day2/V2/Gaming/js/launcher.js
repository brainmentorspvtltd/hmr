var playerImg;
var jumpSound;
var backgroundSound;
function preload(){
	// Assets Loading Code
	playerImg = loadGif("assets/images/mario.gif");
	jumpSound = loadSound("assets/sounds/jump.wav");
	backgroundSound = loadSound("assets/sounds/background.mp3");
	
}
var playerObject;
function setup(){
	// Create Object of Player
	// Create Canvas (Board)
	createCanvas(500,500);  // w, h
	playerObject = new Player(playerImg);
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
}