export default class SplashScreen {
  constructor (player, background, floor, splashScreenBanner) {
    this.player = player
    this.background = background
    this.floor = floor
    this.splashScreenBanner = splashScreenBanner

    this.bindEvents()
  }

  render () {
    this.background.render()
    this.splashScreenBanner.render()
    this.floor.render()
    this.player.render()
    this.floor.update()
  }

  click () {
    const detail = { fromScreen: 'SplashScreen' }
    const event = new CustomEvent('onLoadNextScreen', { detail })
    window.dispatchEvent(event)
  }

  bindEvents () {
    window.addEventListener('click', this.click)
  }
}