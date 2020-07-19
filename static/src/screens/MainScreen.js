export default class MainScreen {
  constructor (player, background, pipes, bottom, state) {
    this.player = player
    this.background = background
    this.pipes = pipes
    this.bottom = bottom
    this.state = state

    this.listeners = []

    this.scoreFrameInterval = 230
    this.onScoreSound = new Audio('../../sound/score.wav')

    this.addListeners()
    this.isRunning = true
  }

  render () {
    this.background.render()
    this.pipes.render()
    this.bottom.render()
    this.player.render()

    if (this.bottom.hasCollided(this.player) || this.pipes.hasCollided(this.player)) {
      this.player.onCollision()
      this.bottom.onCollision()
      this.pipes.onCollision()

      if (this.isRunning) {
        const event = new CustomEvent('onGameOver')
        window.dispatchEvent(event)

        this.removeListeners()
        this.isRunning = false
      }
    }

    this.player.update()
    this.bottom.update()
    this.pipes.update()
  }

  click () {
    this.player.jump()
  }

  onFrameChange (ev) {
    const { currentFrame } = ev.detail

    if ((currentFrame % this.scoreFrameInterval) === 0) {
      // this.onScoreSound.play()
      this.state.actions.incrementScore()
    }

    this.player.setCurrentFrame(currentFrame)
    this.pipes.setCurrentFrame(currentFrame)
  }

  addListeners () {
    this.removeListeners()

    const clickHandler = () => this.click()
    window.addEventListener('click', clickHandler)
    this.listeners.push(['click', clickHandler])

    const onFrameChangeHandler = (ev) => this.onFrameChange(ev)
    window.addEventListener('onFrameChange', onFrameChangeHandler)
    this.listeners.push(['onFrameChange', onFrameChangeHandler])
  }

  removeListeners () {
    for (const [type, handler] of this.listeners) {
      window.removeEventListener(type, handler)
    }
  }

  destroy () {
    this.removeListeners()
  }
}