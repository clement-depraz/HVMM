import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      counter: 123,
      lol: "lol"
    },
    mutations: {
      increment (state) {
        state.counter++
      }
    }
  })
}

export default createStore