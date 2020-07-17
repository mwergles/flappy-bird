import Player from './src/Player.js'
import Background from './src/Background.js'
import Floor from './src/Floor.js'

console.log('Flappy Bird')

const sprites = new Image()
sprites.src = './images/sprites.png'

const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

const player = new Player(sprites, ctx)
const background = new Background(sprites, canvas, ctx)
const floor = new Floor(sprites, canvas, ctx)

function main () {
  background.render()
  floor.render()
  player.render()

  player.update()

  requestAnimationFrame(main)
}

main()
