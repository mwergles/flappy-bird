export default class MainScreen {
  listeners = []

  constructor (player, background, floor, state) {
    this.player = player
    this.background = background
    this.floor = floor
    this.state = state

    this.addListeners()
  }

  render () {
    this.background.render()
    this.floor.render()
    this.player.render()

    if (this.player.hasCollided(this.floor)) {
      this.player.onCollision()

      const event = new CustomEvent('onGameOver')
      window.dispatchEvent(event)
    }

    this.player.update()
    this.floor.update()
  }

  click () {
    this.player.jump()
  }

  addListeners () {
    this.removeListeners()

    const clickHandler = () => this.click()
    window.addEventListener('click', clickHandler)
    this.listeners.push(['click', clickHandler])
  }

  removeListeners () {
    for (const [type, handler] of this.listeners) {
      window.removeEventListener(type, handler)
    }
  }
}