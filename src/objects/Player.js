export default class Player {
  constructor (sprites, ctx) {
    this.sourceX =  0
    this.sourceY =  0
    this.sourceW =  33
    this.sourceH =  24
    this.destinationX =  10
    this.destinationY =  50

    this.gravity = 0.25
    this.speed = 1

    this.sprites = sprites
    this.ctx = ctx
  }

  render () {
    this.ctx.drawImage(
      this.sprites,
      this.sourceX,
      this.sourceY,
      this.sourceW,
      this.sourceH,
      this.destinationX,
      this.destinationY,
      this.sourceW,
      this.sourceH
    )
  }

  update () {
    this.speed += this.gravity
    this.destinationY += this.speed
  }
}