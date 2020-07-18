export default class Pipes {
  constructor (sprites, canvasDimensions, ctx) {
    this.sprites = sprites
    this.canvasDimensions = canvasDimensions
    this.ctx = ctx

    this.sourceW = 52
    this.sourceH = 400

    this.bottomPipe = {
      sourceX: 0,
      sourceY: 169,
      destinationY: 220
    }

    this.topPipe = {
      sourceX: 52,
      sourceY: 169,
      destinationY: 0
    }

    this.spacing = 90
    this.speed = 2
    this.frameInterval = 100

    this.pipesTuple = []
    this.isStopped = false
  }

  render () {
    this.pipesTuple.forEach(pipesTuple => {
      this.ctx.drawImage(
        this.sprites,
        this.topPipe.sourceX,
        this.topPipe.sourceY,
        this.sourceW,
        this.sourceH,
        pipesTuple.destinationX,
        pipesTuple.destinationY,
        this.sourceW,
        this.sourceH
      )

      const bottomPipeY = this.sourceH + this.spacing + pipesTuple.destinationY
      this.ctx.drawImage(
        this.sprites,
        this.bottomPipe.sourceX,
        this.bottomPipe.sourceY,
        this.sourceW,
        this.sourceH,
        pipesTuple.destinationX,
        bottomPipeY,
        this.sourceW,
        this.sourceH
      )

      pipesTuple.topPipeYBoundary = this.sourceH + pipesTuple.destinationY
      pipesTuple.bottomPipeYBoundary = bottomPipeY
    })
  }

  update () {
    if (this.isStopped) {
      return
    }

    if (this.shouldRenderNewPipesTuple()) {
      this.pipesTuple.push({
        destinationX: this.canvasDimensions.width,
        destinationY: this.getDisplacement()
      })
    }

    this.pipesTuple.forEach(pipesTuple => {
      pipesTuple.destinationX -= this.speed

      const isOffScreen = pipesTuple.destinationX + this.sourceW

      if (isOffScreen <= 0) {
        this.pipesTuple.shift()
      }
    })
  }

  getDisplacement () {
    return -150 * (Math.random() + 1)
  }

  shouldRenderNewPipesTuple () {
    return this.currentFrame % this.frameInterval === 0
  }

  /**
   *
   * @param {Player} object
   */
  hasCollided (object) {
    for (const pipesTuple of this.pipesTuple) {
      if (object.destinationX + object.sourceW >= pipesTuple.destinationX) {
        if (object.destinationY <= pipesTuple.topPipeYBoundary) {
          return true
        }

        if ((object.destinationY + object.sourceH) >= pipesTuple.bottomPipeYBoundary) {
          return true
        }
      }
    }

    return false
  }

  onCollision () {
    this.isStopped = true
  }

  setCurrentFrame (currentFrame) {
    this.currentFrame = currentFrame
  }
}