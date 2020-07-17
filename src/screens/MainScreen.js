export default class MainScreen {
  constructor (player, background, floor) {
    this.player = player
    this.background = background
    this.floor = floor
  }
  render () {
    this.background.render()
    this.floor.render()
    this.player.render()
    this.player.update()
  }
}