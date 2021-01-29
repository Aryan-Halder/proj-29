const Engine = Matter.Engine
const World =Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint

var engine,World
var score=0

function preload() {
polygonimg = loadImage("polygon.png")
getBackgroundImg()
bg = loadImage("sprites/Light Background.jpg")
blackbg = loadImage("sprites/Dark Background.jpg")

}

function setup() {
    createCanvas(800,400)

    
    engine = Engine.create()
    world = engine.world

    box1 = new Box(330,235,30,40)
    box2 = new Box(360,235,30,40)
    box3 = new Box(390,235,30,40)
    box4 = new Box(420,235,30,40)
    box5 = new Box(450,235,30,40)

    box6 = new Box(360,195,30,40)
    box7 = new Box(390,195,30,40)
    box8 = new Box(420,195,30,40)
    box9 = new Box(450,195,30,40)
    
    box10 = new Box(390,155,30,40)
    box11 = new Box(420,155,30,40)
    box12 = new Box(450,155,30,40)

    box13 = new Box(420,115,30,40)
    box14 = new Box(450,115,30,40)

    box15 = new Box(450,75,30,40)

    ball = new Ball(0,0,50)

    ground = new Ground(400,390,800,20)

    polygon = Bodies.circle(50,200,20)
        World.add(world,polygon)

    slingshot = new Slingshot(550,160,200,20)
}
 
function draw() {
    if(backgroundImg) {
    background(backgroundImg)

    noStroke()
    }

    Engine.update(engine)

    text("Score:" +score,750,40)
    textSize("20")
    fill("white")

    box1.display()
    box2.display()
    box3.display()
    box4.display()
    box5.display()
    box6.display()
    box7.display()
    box8.display()
    box9.display()
    box10.display()
    box11.display()
    box12.display()
    box13.display()
    box14.display()
    box15.display()

    box1.score()
    box2.score()
    box3.score()
    box4.score()
    box5.score()
    box6.score()
    box7.score()
    box8.score()
    box9.score()
    box10.score()
    box11.score()
    box12.score()
    box13.score()
    box14.score()
    box15.score()

    imageMode(CENTER)
    image(polygonimg,polygon.x,polygon.y,40,40)

    ball.display()

    ground.display()

    slingshot.display()
}

function mouseDragged() {
    Matter.Body.setPosition(ball.body,{x:mouseX, y:mouseY}) 
}

function mouseReleased() {
    slingshot.release()
}

function keyPressed() {
    if(keycode === 32) {
        slingshot.attach(this.polygon)
    }
}

async function getBackgroundImg() {
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
    var responseJSON = await response.json()

    var datetime = responseJSON.datetime
    var hour = datetime.slice(11,13)

    if(hour>=0600 && hour<=1900) {
        bg = "sprites/Light Background.jpg"
    }
    else{
    bg = "sprites/Black Background.jpg"
    }

    backgroundImg = loadImage(bg)
    console.log(backgroundImg)
}