import store from '../store'
import router from '../router'

let clock

const game = {
  init: () => {
    game.bindEvents()
  },
  methods: {
    reset:() => {
      document.getElementById('wordArea').innerHTML = '문제 단어'
      document.getElementById('gameScore').innerHTML = '-'
      document.getElementById('gameSecond').innerHTML = '-'
      document.getElementById('answerInput').focus()
    },
    start: () => {
      document.getElementById('wordArea').innerHTML = store.words[store.seq].text
      document.getElementById('gameScore').innerHTML = store.score()
      document.getElementById('answerInput').focus()
      game.methods.tick(store.words[store.seq].second || 0)
    },
    goNext: () => {
      store.seq++
      if (store.seq === store.words.length) {
        router.push('/result')
        store.status = 'done'
      } else {
        game.methods.start()
      }
    },
    checkAnswer: (answer) => {
      if (typeof answer==='string' && answer.length>0) {
        if (answer===store.words[store.seq].text) {
          store.words[store.seq].time = store.words[store.seq].second - parseInt(document.getElementById('gameSecond').innerHTML) + 1
          clearTimeout(clock)
          game.methods.goNext()
        }
      }
      if (document.getElementById('answerInput')) {
        document.getElementById('answerInput').value = ''
      }
    },
    tick: (second) => {
      if (second>0) {
        document.getElementById('gameSecond').innerHTML = second
        clock = setTimeout(() => {
          game.methods.tick(second - 1)
        }, 1000);
      } else {
        store.words[store.seq].time = -1
        game.methods.goNext()
      }
    },
    set: (btnElement) => {
      if (store.status==='todo') {
        store.status = 'doing'
        btnElement.innerHTML = '초기화'
        game.methods.start()
      } else {
        if (store.status==='doing') {
          clearTimeout(clock)
          store.restart()
          game.methods.reset()
        }
        store.status = 'todo'
        btnElement.innerHTML = '시작'
      }
    }
  },
  bindEvents: () => {
    document.getElementById('btnStart').addEventListener('click', ({target}) => {
      game.methods.set(target)
    })
    document.getElementById('answerInput').addEventListener('keydown', (e) => {
      if (store.status==='doing' && e.key == "Enter") {
        game.methods.checkAnswer(e.target.value)
      }
    })
  }
}

export default game