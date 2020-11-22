import gameHTML from '../src/views/game.html'
import game from '../src/scripts/game'
import store from '../src/store'

document.body.innerHTML = gameHTML
store.words = [
  {
    text: 'I wanna go to kakaopay',
    second: 50,
    time: 50
  },
  {
    text: 'pick me up',
    second: 30,
    time: 30
  },
]

describe('check game', () => {
  test('게임 세팅', () => {
    game.init()
    expect(document.getElementById('wordArea').innerHTML.trim()).toBe('문제 단어')
    expect(document.getElementById('gameSecond').innerHTML).toBe('-')
    expect(document.getElementById('gameScore').innerHTML).toBe('-')
  })
  test('게임 시작', () => {
    document.getElementById('btnStart').click()
    expect(document.getElementById('wordArea').innerHTML.trim()).toBe('I wanna go to kakaopay')
    expect(document.getElementById('gameSecond').innerHTML).toBe('50')
    expect(document.getElementById('gameScore').innerHTML).toBe('2')
  })
  test('오답 입력', () => {
    document.getElementById('answerInput').value = 'I really wanna go to kakaopay'
    game.methods.checkAnswer('I really wanna go to kakaopay')
    expect(document.getElementById('answerInput').value).toBe('')
  })
  test('정답 입력', () => {
    document.getElementById('gameSecond').innerHTML = 23
    game.methods.checkAnswer('I wanna go to kakaopay')
    expect(store.words[0].time).toBe(28)
  })
})