import api from './modules/api'

const store = {
  seq: 0,
  words: [],
  status: 'todo', // ['default', 'todo', 'doing', 'done']
  score: () => {
    return store.words.filter(r => r.time > -1).length
  },
  avgTime: () => {
    const sumTime = parseInt(store.words.reduce((acc, cur) => {
      if (cur.time>-1) return acc + cur.time
      else return acc
    }, 0));
    const score = parseInt(store.score());
    if (sumTime===0 && score===0) {
      return 0
    }
    return Math.ceil(sumTime/score)
  },
  restart: () => {
    store.seq = 0
    store.status = 'todo'
    store.words = store.words.map(r => {
      r.time = r.second || 0
      return r;
    })
  },
  init: async () => {
    try {
      if (store.words.length===0) {
        store.words = await api.do('https://my-json-server.typicode.com/kakaopay-fe/resources/words')
        store.words = store.words.map(r => {
          r.time = r.second || 0
          return r;
        })
      }
    } catch(err) {
      console.error(err);
    }
  }
}
export default store