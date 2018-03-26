import * as Matter from 'matter-js'

// module aliases
let Engine = Matter.Engine,
  Render = Matter.Render,
  World = Matter.World,
  Bodies = Matter.Bodies

const canvasHeight = 600
const canvasWidth = 800

// create an engine
const engine = Engine.create()

// create a renderer
const render = Render.create({
  element: document.body,
  engine: engine
})
console.log(render)
// create two boxes and a ground

const boxA = Bodies.rectangle(400, 200, 80, 80)
const boxB = Bodies.rectangle(450, 50, 80, 80)
const ground = Bodies.rectangle(400, 610, 800, 60, {isStatic: true})
let w = 20
const leftWall = Bodies.rectangle(w / 2, canvasHeight / 2, w, canvasHeight, {isStatic: true})
const rightWall = Bodies.rectangle(canvasWidth - w / 2, canvasHeight / 2, w, canvasHeight, {isStatic: true})

// add all of the bodies to the world

World.add(engine.world, [boxA, boxB, ground, leftWall, rightWall])

// run the engine
Engine.run(engine)

// run the renderer
Render.run(render)
