import state from './src/state/state.js'

import Player from './src/objects/Player.js'
import Background from './src/objects/Background.js'
import Pipes from './src/objects/Pipes.js'
import SplashScreenBanner from './src/objects/SplashScreenBanner.js'
import Bottom from './src/objects/Bottom.js'

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
const pipes = new Pipes(sprites, canvasDimensions, ctx,)
const bottom = new Bottom(sprites, canvasDimensions, ctx)

const splashScreen = new SplashScreen(player, background, bottom, splashScreenBanner)
const mainScreen = new MainScreen(player, background, pipes, bottom, state)

const screens = {
  SplashScreen: splashScreen,
  MainScreen: mainScreen
}

function main () {
  const { currentScreen } = state.state

  screens[currentScreen].render()
  state.actions.incrementFrame()

  requestAnimationFrame(main)
}

window.addEventListener('onLoadNextScreen', ev => {
  const { fromScreen } = ev.detail
  state.actions.loadNextScreen({ fromScreen })
})

window.addEventListener('onGameOver', ev => {
  const scoreFeedback = `Game Over! Your score is: ${state.state.score}!`
  const scoreElement = document.querySelector('.score')

  scoreElement.textContent = scoreFeedback

  console.log(scoreFeedback)
  // state.actions.setCurrentScreen(screen)
})

main()
