function Player(img){
	this.x = 100;
	this.y = height - 100;
	this.w = this.h = 50;
	this.img = img;
	this.gravity = 0.5;
	this.speed = 0.5;
	this.drawPlayer  = function(){
		image(this.img,this.x, this.y , this.w, this.h);
	}
	this.jump=function(){
		this.speed = -12;
		this.y = this.y + this.speed;
	}
	this.down = function(){
		if(this.y<=(height-100)){
		this.speed = this.speed + this.gravity;
		this.y = this.y + this.speed;
		}
	}
}