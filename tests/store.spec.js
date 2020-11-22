import api from '../src/modules/api'
import store from '../src/store'

api.do = jest.fn().mockResolvedValue([
  {
    second: 5,
    time: 2
  },
  {
    second: 21
  },
  {
    second: 14
  },
  {
    second: 88
  },
  {
    second: -1
  },
  {
    second: -1
  }
])

describe('check store', () => {
  test('init()', async () => {
    await store.init()
    expect(store.words[0].second).toBe(store.words[0].time)
  })
  test('score()', () => {
    expect(store.score()).toBe(4)
  })
  test('avgTime()', () => {
    expect(store.avgTime()).toBe(32)
  })
  test('restart()', () => {
    store.seq = 55
    store.status = 'done'
    store.words[0].time = 99
    store.restart()
    expect(store.seq).toBe(0)
    expect(store.status).toBe('todo')
    expect(store.words[0].second).toBe(store.words[0].time)
  })
})