class Arrow{
    constructor(x, y, width, height, angle) {
        var options = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("Images/Arrow.png");
        World.add(world, this.body);
      }
      display(){
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
        if (keyIsDown( UP_ARROW)) {
            this.body.position.y = this.body.position.y-8;
             } else if (keyIsDown(DOWN_ARROW)) {
                this.body.position.y = this.body.position.y+8;
             }
            
              
    
      
      }
    

        
      
    }