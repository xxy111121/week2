function Ball(x,y){
  this.position={x:y,y:x};
  this.speed= {x:random(-2,2), y:random(-2,2)};
  
  noStroke();
  fill(random (255,0),0,255);
  
  this.draw=function(){
    this.position.x= this.position.x +this.speed.x + random(-5,5);
    this.position.y= this.position.y +this.speed.y + random(-5,5);
    rect(this.position.x, this.position.y, random(1,1),1);
  }
}


var balls=[] 
function mouseDragged(){
  var ball=new Ball (mouseX, mouseY);
  balls.push(ball);
}


function draw(){
 
  for(var i=0; i<balls.length; i++){
    balls[i].draw();
  }
}


function setup() {
  createCanvas (500,500);
  
}