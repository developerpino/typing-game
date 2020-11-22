import './style.css'
import router from './router'
import store from './store'

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('router').forEach(el => {
    el.addEventListener('click', ({target}) => {
      router.push(target.getAttribute('href'))
    })
  })
  router.init()
  store.init()
})
