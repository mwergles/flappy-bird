import Player from './src/objects/Player.js'
import Background from './src/objects/Background.js'
import SplashScreenBanner from './src/objects/SplashScreenBanner.js'
import Floor from './src/objects/Floor.js'

import SplashScreen from './src/screens/SplashScreen.js'
import MainScreen from './src/screens/MainScreen.js'

console.log('Flappy Bird')

const sprites = new Image()
sprites.src = './images/sprites.png'

const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

const splashScreenBanner = new SplashScreenBanner(sprites, canvas, ctx)
const player = new Player(sprites, ctx)
const background = new Background(sprites, canvas, ctx)
const floor = new Floor(sprites, canvas, ctx)

const splashScreen = new SplashScreen(player, background, floor, splashScreenBanner)
const mainScreen = new MainScreen(player, background, floor)

const screens = {
  splashScreen,
  mainScreen
}

let currentScreen = 'splashScreen'

function main () {
  screens[currentScreen].render()

  requestAnimationFrame(main)
}

window.addEventListener('click', () => {
  if (currentScreen === 'splashScreen') {
    currentScreen = 'mainScreen'
  }
})

main()
