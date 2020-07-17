export default class SplashScreen {
  constructor (player, background, floor, splashScreenBanner) {
    this.player = player
    this.background = background
    this.floor = floor
    this.splashScreenBanner = splashScreenBanner
  }
  render () {
    this.background.render()
    this.splashScreenBanner.render()
    this.floor.render()
    this.player.render()
  }
}