class shoot{
    constructor(x,y,radius){
        this.body=Bodies.circle(x,y,radius,{isStatic:false,restitution:0.4,friction:0.35,staticFriction:0.25,density:1});
        World.add(world,this.body);
        this.radius=2*radius;
        this.image=loadImage("cannon.png");
    }
    display(){
      var d=512;
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image,0,0,960/d*this.radius,540/d*this.radius);
      pop();
    }
}