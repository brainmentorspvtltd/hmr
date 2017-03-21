function Cactus(img,x){
	this.x = x;
	this.img =img;
	this.speed = -1;
	this.y = height - 100;
	this.w = this.h = 50;
	this.drawCactus=function(){
		image(this.img, this.x, this.y , this.w, this.h);
	}
	this.move=function(){
		this.x = this.x + this.speed;
	}
	this.outOfScreen = function(){
		if(this.x<=0){
			this.x = width;
		}
	}
	
}