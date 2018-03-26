import { Bodies, World } from 'matter-js'
import myP5 from '../services/myP5'

export class Box {
  constructor (x, y, w, h, world, options) {
    this.x = x
    this.y = y
    this.w = w
    this.h = h
    this.body = Bodies.rectangle(x, y, w, h, options)

    World.add(world, this.body)
  }

  show () {
    const {position: {x, y}, angle} = this.body
    myP5.push()
    myP5.rectMode(myP5.CENTER)
    myP5.translate(x, y)
    myP5.rotate(angle)
    myP5.strokeWeight(4)
    myP5.stroke(255)
    myP5.fill(127)
    myP5.rect(0, 0, this.w, this.h)
    myP5.pop()
  }
}
