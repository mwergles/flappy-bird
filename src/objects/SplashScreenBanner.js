export default class SplashScreenBanner {
  constructor (sprites, canvas, ctx) {
    this.sourceX =  134
    this.sourceY =  0
    this.sourceW =  174
    this.sourceH =  152
    this.destinationX =  (canvas.width / 2) - (this.sourceH / 2)
    this.destinationY =  50

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
}