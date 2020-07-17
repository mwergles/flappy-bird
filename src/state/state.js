import { screensOrder} from './screensOrder.js'

const state = {
  currentScreen: 'SplashScreen',
  screenOrder: screensOrder
}

const actions = {
  loadNextScreen ({ fromScreen }) {
    state.currentScreen = state.screenOrder[fromScreen]
  }
}

export default {
  state,
  actions
}
