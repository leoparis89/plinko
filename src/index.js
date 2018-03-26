import { Engine } from 'matter-js'
import myP5 from './services/myP5'
import { Box } from './shapes/Box'

let engine, world, ground, boxes = []

myP5.setup = () => {
  myP5.createCanvas(640, 480)
  engine = Engine.create()
  world = engine.world
  Engine.run(engine)
  ground = new Box(320, 480, 640, 50, world, {
    isStatic: true, angle: myP5.PI / 4
  })
}

myP5.draw = () => {
  myP5.background(52)
  ground.show()
  for (let box of boxes) {
    box.show()
  }
}

window.addEventListener('mousedown', ({x, y}) => {
  boxes.push(new Box(x, y, myP5.random(10, 40), myP5.random(10, 40), world, {friction: 0, restitution: 1}))
})
// window.addEventListener('mousedown', ({x, y}) = > {
//   boxes.push(new Box(x, y, myP5.random(10, 40), myP5.random(10, 40), world, {friction: 0, restitution: 1}))
// })
