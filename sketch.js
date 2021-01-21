const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object;
var ball;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var object_options ={
        isStatic: true
  
    }
var ball_options={
    restitution:0.8
} 
   object= Bodies.rectangle(200,390,200,20,object_options);
    World.add(world,object);

   


    console.log(object);
    ball=Bodies.circle(200,200,20,ball_options);   
    World.add(world,ball);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(object.position.x,object.position.y,50,50);
    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball,position.y,20,20);
}
