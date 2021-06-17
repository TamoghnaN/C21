const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint  = Matter.Constraint;
//Matter.Constraint.create(options) --> Constraint.create(options)

let engine;
let world;
let ball;
let ball2;
let ballOptions;
let ground;
let groundOptions
let con;
let con2;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();     //Matter.Engine.create()
  
  world = engine.world;
  rectMode(CENTER);
  ellipseMode(RADIUS);
  //JSON format - JavaScript Object Notation 
  //sprite(ball) = ball.x or ball.y
  //phy eng obj (box) = box.position.x, box.position.y
  //JSON = {item1:value1, item2:value2, item3:value3,...}



  groundOptions={
    isStatic:true
  }
  ground = Bodies.rectangle(200,400,400,20,groundOptions)
  World.add(world,ground);

ballOptions={
  restitution:1
}
  ball = Bodies.circle(200,100,10,ballOptions);
  World.add(world,ball);

ball2 = Bodies.circle(350,10,12,ballOptions);
World.add(world,ball2);

con2 = Matter.Constraint.create({
  bodyA:ball,
  pointA:{x:0,y:0},
  bodyB:ball2,
  pointB:{x:0,y:0},
  length:100,
  stiffness:0.1
})
World.add(world,con2);

  con = Matter.Constraint.create({
    pointA:{x:200,y:20},
    bodyB:ball,
    pointB:{x:0,y:0},
    length:100,
    stiffness:0.1
  })
  World.add(world,con);
}

//line(x1,y1,x2,y2)


function draw() 
{
  background(51);
  Engine.update(engine);

ellipse(ball.position.x,ball.position.y,10);

ellipse(ball2.position.x,ball2.position.y,10);



push();
stroke ("white");
strokeWeight (2)
line(con.pointA.x,con.pointA.y,ball.position.x,ball.position.y);
line(ball.position.x,ball.position.y,ball2.position.x,ball2.position.y);
pop();

push ();
fill ("white");
rect(ground.position.x,ground.position.y,400,20)
pop ();
}

function keyPressed (){
  if (keyCode===RIGHT_ARROW){
   Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0}) 
  }
}
//Matter.Body.applyForce(whatbody,position,direction and amount of force)
/*
constraint - attachemnt
Matter.Constraint.create(options)
4 options = bodyA, bodyB, stiffness, length

*/

