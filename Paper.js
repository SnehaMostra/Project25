class Paper {
    constructor(x, y,r) {
      var options = {
          'restitution':0.3,
          'friction':0,
          'density':1.2
      }
      this.body = Bodies.circle(x, y, r, options);
      this.radius = r;
      this.image= loadImage("paper.png");
       
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(RADIUS);
      stroke("black");
      strokeWeight(4);
      fill("darkBlue");
      image(this.image,0, 0,this.radius , this.radius);
      pop();
    }
  };
  