import store from '../store'
import router from '../router'

const result = {
  init: () => {
    document.getElementById('gameScore').innerHTML = store.score()
    document.getElementById('avgTime').innerHTML = store.avgTime()
    result.bindEvents()
  },
  bindEvents: () => {
    document.getElementById('btnRestart').addEventListener('click', () => {
      router.push('/game')
      store.restart()
    })
  }
}

export default result