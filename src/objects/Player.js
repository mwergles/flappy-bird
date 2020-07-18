export default class Player {
  constructor (sprites, ctx) {
    this.sprites = sprites
    this.ctx = ctx

    this.sourceW =  33
    this.sourceH =  24
    this.destinationX =  10
    this.destinationY =  50

    this.isStopped = false
    this.jumpSpeed = -4.6
    this.gravity = 0.25
    this.speed = 0

    this.playerSprites = [
      { sourceX: 0, sourceY: 0 },
      { sourceX: 0, sourceY: 26 },
      { sourceX: 0, sourceY: 52 },
      { sourceX: 0, sourceY: 26 }
    ]

    this.currentFrame = 0
    this.frameInterval = 10
    this.currentSpriteFrame = 0

    this.onCollisionSound = new Audio('../../sound/collision.wav')
  }

  render () {
    const { sourceX, sourceY } = this.getCurrentSprite()

    this.ctx.drawImage(
      this.sprites,
      sourceX,
      sourceY,
      this.sourceW,
      this.sourceH,
      this.destinationX,
      this.destinationY,
      this.sourceW,
      this.sourceH
    )
  }

  update () {
    if (this.isStopped) {
      return
    }

    this.speed += this.gravity
    this.destinationY += this.speed
  }

  jump () {
    this.speed = this.jumpSpeed
  }

  stop () {
    this.isStopped = true
  }

  onCollision () {
    if (!this.isStopped) {
      this.onCollisionSound.play()
    }

    this.stop()
  }

  updateFrame () {
    if (this.isStopped) {
      return
    }

    if (this.currentFrame % this.frameInterval === 0) {
      this.currentSpriteFrame = ++this.currentSpriteFrame % this.playerSprites.length
    }
  }

  getCurrentSprite () {
    this.updateFrame()

    return this.playerSprites[this.currentSpriteFrame]
  }

  setCurrentFrame (currentFrame) {
    this.currentFrame = currentFrame
  }
}