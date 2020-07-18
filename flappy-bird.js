import state from './src/state/state.js'

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

const canvasDimensions = {
  width: canvas.width,
  height: canvas.height
}

const splashScreenBanner = new SplashScreenBanner(sprites, canvasDimensions, ctx)
const player = new Player(sprites, ctx, state)
const background = new Background(sprites, canvasDimensions, ctx)
const floor = new Floor(sprites, canvasDimensions, ctx)

const splashScreen = new SplashScreen(player, background, floor, splashScreenBanner)
const mainScreen = new MainScreen(player, background, floor)

const screens = {
  SplashScreen: splashScreen,
  MainScreen: mainScreen
}

// const sleep = () => new Promise(resolve => setTimeout(resolve, 100))

async function main () {
  const { currentScreen } = state.state
  screens[currentScreen].render()

  state.actions.incrementFrame()
  // await sleep()

  requestAnimationFrame(main)
}

window.addEventListener('onLoadNextScreen', ev => {
  const { fromScreen } = ev.detail
  state.actions.loadNextScreen({ fromScreen })
})

window.addEventListener('onGameOver', ev => {
  console.log('Game Over!')
  state.actions.setCurrentScreen('SplashScreen')
})

main()
