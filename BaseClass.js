class BaseClass{
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution':0.6,
            'friction':0.5,
            'density':1.1
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("Images/Base.png");
        World.add(world, this.body);
      }
      display(){
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
        
      }
      move(){
        this.body.position.x += random(-this.body.speed, this.body.speed);
        this.body.position.y += random(-this.body.speed, this.body.speed);
    
      }
    }