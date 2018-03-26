import * as Matter from 'matter-js'

// module aliases
let Engine = Matter.Engine,
  Render = Matter.Render,
  World = Matter.World,
  Bodies = Matter.Bodies

const canvasH = 1000
const canvasW = 800

// create an engine
const engine = Engine.create()

// create a renderer
const render = Render.create({
  element: document.body,
  engine: engine,
  options: {
    height: canvasH,
    width: canvasW
  }
})

// Ground
let groundW = 20
const ground = Bodies.rectangle(
  canvasW / 2,
  canvasH - groundW / 2,
  canvasW, groundW,
  {isStatic: true}
)

// Walls
let wallW = 20
const leftWall = Bodies.rectangle(wallW / 2, canvasH / 2, wallW, canvasH, {isStatic: true})
const rightWall = Bodies.rectangle(canvasW - wallW / 2, canvasH / 2, wallW, canvasH, {isStatic: true})

// Spikes
const step = 80
const spikeH = 90
const spikeW = 10
const spikes = []

for (let i = step; i < canvasW; i += step) {
  console.log(i)
  spikes.push(Bodies.rectangle(i - spikeW / 2, canvasH - spikeH / 2 - groundW, spikeW, spikeH, {isStatic: true}))
}

World.add(engine.world, [ground, leftWall, rightWall, ...spikes])

// run the engine
Engine.run(engine)

// run the renderer
Render.run(render)

window.addEventListener('click', e => {
  const {x, y} = e
  const circle = Bodies.circle(x, y, 10, {restitution: 0.8, friction: 0.6})
  World.add(engine.world, circle)
})

const addObstacles = () => {
  const offset = 20
  const step = 50
  const latOffset = 60
  const bottomOffset = 100
  const topOffset = 150
  for (let j = topOffset; j < canvasH - bottomOffset; j += step) {
    for (let i = step; i < canvasW - latOffset + step; i += step) {
      const isEven = !!((j / step) % 2)

      if (!(isEven && i > canvasW - latOffset)) {
        console.log('BAR')

        const circle = Bodies.circle(i + (isEven ? step / 2 : 0)
          , j, 5, {
            isStatic: true
          })

        World.add(engine.world, circle)
      }

      // }
    }
  }
}

addObstacles()