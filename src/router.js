import gameHTML from './views/game.html'
import resultHTML from './views/result.html'
import gameJS from './scripts/game'
import resultJS from './scripts/result'

const routes = {
  '/': gameHTML,
  '/game': gameHTML,
  '/result': resultHTML
}

function init() {
  render(routes[window.location.pathname])
  window.onpopstate = () => render(routes[window.location.pathname])
}

function push(pathName) {
  window.history.pushState({}, pathName, window.location.origin + pathName)
  render(routes[pathName])
}

function render(route) {
  document.querySelector('router-view').innerHTML = route
  if (window.location.pathname === '/result') {
    resultJS.init()
  } else {
    gameJS.init()
  }
}

export default {
  init,
  push
}