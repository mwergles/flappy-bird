export default class Floor {
  constructor (sprites, canvas, ctx) {
    this.sourceX = 0
    this.sourceY = 610
    this.sourceW = 224
    this.sourceH = 112
    this.destinationX = 0
    this.destinationY = canvas.height - 112

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
}
