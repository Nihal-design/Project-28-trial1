class Stone {
    constructor(x, y, width, height) {
      var options = {
          isStatic:true
      }


      this.image=loadImage("stone.png");

      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      pos.x = mouseX;
      pos.y = mouseY;
      var angle = this.body.angle;
      stroke("green");
      fill("red");
      image(this.image, pos.x, pos.y, this.width, this.height);
    }
  };
  