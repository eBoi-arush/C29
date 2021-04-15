class Box{
  constructor(x, y, w, h){
    this.w = w;
    this.h = h;

    var options = {
      isStatic: false,
      restitution: 0.8,
      friction: 1.0,
      density: 1.0
    }
    this.body = Bodies.rectangle(x, y, w, h, options);
    World.add(world, this.body);
  }

  show(){
    var cords = this.body.position;

    rectMode(CENTER);
    fill(255);
    rect(cords.x, cords.y, this.w, this.h);
  }
}