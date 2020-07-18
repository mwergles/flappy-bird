import { screensOrder} from './screensOrder.js'

const state = {
  currentFrame: 0,
  currentScreen: 'SplashScreen',
  screenOrder: screensOrder
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
  }
}

export default {
  state,
  actions
}
