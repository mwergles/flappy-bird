export default class Background {
  static backgroundColor = '#70c5ce'

  constructor (sprites, canvas, ctx) {
    this.sourceX =  390
    this.sourceY =  0
    this.sourceW =  275
    this.sourceH =  204
    this.destinationX =  0
    this.destinationY =  canvas.height - 204

    this.sprites = sprites
    this.canvas = canvas
    this.ctx = ctx
  }

  render () {
    this.ctx.fillStyle = Background.backgroundColor
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)

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