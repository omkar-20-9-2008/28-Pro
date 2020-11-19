class Mango {
    constructor(x, y,r) {
      var options = {
        'isStatic':true,
       'restitution':0,
       'friction':1
      }
      this.x=x;
      this.y=y;
      this.r=r;
      this.body = Bodies.circle(this.x,this.y,this.r/2, options);
      this.image=loadImage("mangoes/mango.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
	    rotate(angle);
      fill("pink");
      imageMode(CENTER);
      image(this.image, 0, 0, this.r+20, this.r+20);
      pop();
    }
  }
  