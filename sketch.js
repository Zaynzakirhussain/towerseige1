const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var rock,sling1;


function setup() {
  createCanvas(1360,650);
  engine = Engine.create();
  world = engine.world;

  ground = new Box(680,680,1700,100);
  ground1 = new Box(0,325,40,750);
  ground2 = new Box(1360,325,40,750);
  ground3 = new Box(680,-30,1700,100);

  rock = new Boulders(150,350);
  sling1 = new SlingShot(rock.body,{x:150,y:350})

  tower1 = new Box(550,290,100,250);
  tower2 = new Box(1270,360,140,20);
  tower3 = new Box(1100,500,140,20);

  main = new Mbox(1270,330,30,30);
  main1 = new Mbox(1240,330,30,30);
  main2 = new Mbox(1300,330,30,30);
  main3 = new Mbox(1270,270,30,30);
  main4 = new Mbox(1240,270,30,30);
  main5 = new Mbox(1300,270,30,30);
  main6 = new Mbox(1270,210,30,30);
  main7 = new Mbox(1240,210,30,30);
  main8 = new Mbox(1300,210,30,30);
  main9 = new Mbox(1270,150,30,30);
  main10 = new Mbox(1240,150,30,30);
  main11 = new Mbox(1300,150,30,30);
}

function draw() {
  background(255,255,255);
  Engine.update(engine);  
   
  textSize(35)
  fill("black")
  text("TAKE DOWN THE TOWER",460,100);
  text("PRESS SPACE TO RESPAWN",435,560);

  ground.display();
  ground1.display();
  ground2.display();
  ground3.display();

  rock.display();
  sling1.display();

  if(rock.body.position.x > 1210 && rock.body.position.y > 190 && rock.body.position.y < 360){
    text("YOU WIN!!",150,350);
  }
  
  tower1.display();
  tower2.display();
  tower3.display();

  main.display();
  main1.display();
  main2.display();
  main3.display();
  main4.display();
  main5.display();
  main6.display();
  main7.display();
  main8.display();
  main9.display();
  main10.display();
  main11.display();

}
function mouseDragged(){
  Matter.Body.setPosition(rock.body,{x:mouseX, y:mouseY})
}

function mouseReleased(){
  sling1.fly();
}
function keyPressed(){
    if(keyCode === 32 && rock.body.position.x > width || rock.body.position.x < 0 || rock.body.speed < 1 ){
       Matter.Body.setPosition(rock.body, {x: 150 , y: 350});
       sling1.attach(rock.body);
    }
}
