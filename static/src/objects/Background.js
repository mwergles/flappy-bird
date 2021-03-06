export default class Background {
  constructor (sprites, canvasDimensions, ctx) {
    this.sprites = sprites
    this.canvasDimensions = canvasDimensions
    this.ctx = ctx

    this.backgroundColor = '#70c5ce'
    this.sourceX =  390
    this.sourceY =  0
    this.sourceW =  275
    this.sourceH =  204
    this.destinationX =  0
    this.destinationY =  canvasDimensions.height - this.sourceH
  }

  render () {
    this.ctx.fillStyle = this.backgroundColor
    this.ctx.fillRect(0, 0, this.canvasDimensions.width, this.canvasDimensions.height)

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