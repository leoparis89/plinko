import * as Matter from 'matter-js'

// module aliases
let Engine = Matter.Engine,
  Render = Matter.Render,
  World = Matter.World,
  Bodies = Matter.Bodies

const canvasHeight = 800
const canvasWidth = 800

// create an engine
const engine = Engine.create()

// create a renderer
const render = Render.create({
  element: document.body,
  engine: engine,
  options: {
    height: canvasHeight,
    width: canvasWidth
  }
})

// Ground
let groundW = 20
const ground = Bodies.rectangle(
  canvasWidth / 2,
  canvasHeight - groundW / 2,
  canvasWidth, groundW,
  {isStatic: true}
)

// Walls
let wallW = 20
const leftWall = Bodies.rectangle(wallW / 2, canvasHeight / 2, wallW, canvasHeight, {isStatic: true})
const rightWall = Bodies.rectangle(canvasWidth - wallW / 2, canvasHeight / 2, wallW, canvasHeight, {isStatic: true})

// Spikes
const step = 80
const spikeH = 60
const spikeW = 10
const spikes = []

for (let i = step; i < canvasWidth; i += step) {
  console.log(i)
  spikes.push(Bodies.rectangle(i - spikeW / 2, canvasHeight - spikeH / 2 - groundW, spikeW, spikeH, {isStatic: true}))
}

World.add(engine.world, [ground, leftWall, rightWall, ...spikes])

// run the engine
Engine.run(engine)

// run the renderer
Render.run(render)

window.addEventListener('click', e => {
  // debugger
  const {x, y} = e
  const circle = Bodies.circle(x, y, 15)
  World.add(engine.world, circle)
})

const addObstacles = () => {
  const offset = 20
  const step = 50
  for (let i = step; i < canvasWidth; i += step) {
    for (let j = 100; j < canvasHeight; j += step) {

      const a = ((j / step) % 2)
      const circle = Bodies.circle(i + a * offset, j, 5, {isStatic: true})

      World.add(engine.world, circle)
    }
  }
}

// addObstacles()