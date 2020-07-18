export default class Bottom {
  constructor (sprites, canvasDimensions, ctx) {
    this.sprites = sprites
    this.ctx = ctx

    this.sourceX = 0
    this.sourceY = 610
    this.sourceW = 224
    this.sourceH = 112
    this.destinationX = 0
    this.destinationY = canvasDimensions.height - this.sourceH

    this.speed = 1
    this.isStopped = false
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

    this.ctx.drawImage(
      this.sprites,
      this.sourceX,
      this.sourceY,
      this.sourceW,
      this.sourceH,
      this.destinationX + this.sourceW,
      this.destinationY,
      this.sourceW,
      this.sourceH
    )
  }

  update () {
    if (this.isStopped) {
      return
    }

    const minSize = this.sourceW / 2
    const movement = this.destinationX - this.speed
    this.destinationX = movement % minSize
  }

  hasCollided (object) {
    const objectY = object.destinationY + object.sourceH

    return objectY >= this.destinationY
  }

  onCollision () {
    this.isStopped = true
  }
}
