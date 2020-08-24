class Balloon1 {
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.6,
            'friction':0.5,
            'density':1.1
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.body.speed= random(-5,5);
        this.image= loadImage("Images/Blue Balloon.png");
        World.add(world, this.body);
      }
      display(){
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
        
      }
     /* move(){
        this.body.position.x += random(-this.body.speed, this.body.speed);
        //this.body.position.y += random(-this.body.velocity.y, this.body.velocity.y);
    
      }
      update(){
          this.body.position.y += this.body.speed;
          if(this.body.position.y>=550||this.body.position.x<0){
              this.body.speed= -this.body.speed;
          }
      }*/
       
    }
