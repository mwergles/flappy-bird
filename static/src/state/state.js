import { screensOrder} from './screensOrder.js'

const SCORE_STEP = 10

const state = {
  currentFrame: 0,
  currentScreen: 'SplashScreen',
  screenOrder: screensOrder,
  score: 0
}

const actions = {
  loadNextScreen ({ fromScreen }) {
    state.currentScreen = state.screenOrder[fromScreen]
  },
  setCurrentScreen (payload) {
    state.currentScreen = payload
  },
  incrementFrame () {
    state.currentFrame++

    const detail = { currentFrame: state.currentFrame }
    window.dispatchEvent(new CustomEvent('onFrameChange', { detail }))
  },
  incrementScore () {
    state.score += SCORE_STEP
  }
}

export default {
  state,
  actions
}
