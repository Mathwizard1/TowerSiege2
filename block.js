class Block{
    constructor(x, y,width,height) {
        this.body = Bodies.rectangle(x, y, width, height,{restitution:0.25,friction:0.75,density:1.75});
        this.width = width;
        this.height = height;
        this.image = loadImage("wood2.png");
        World.add(world, this.body);
        this.Visiblity=100;
        this.c=0;
      }
      display(){
        var angle = this.body.angle;
        if(this.body.speed>=3.5&&gameState!=="wait"){
        if(this.Visiblity!=0){
        push();
        this.Visiblity-=12.5;
        tint(100,this.Visiblity);
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0, this.width, this.height);
        pop();
        }
        else{
          World.remove(world,this.body);
          if(this.c==0){
          score+=10;
          this.c=1;}
        }
        }
        else{
          push();
          translate(this.body.position.x, this.body.position.y);
          rotate(angle);
          imageMode(CENTER);
          image(this.image, 0, 0, this.width, this.height);
          pop();
        }
      }

}