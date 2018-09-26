import Vuex from 'vuex'
import axios from "axios"

const createStore = () => {
  return new Vuex.Store({
    state: {
      users: []
    },
    mutations: {
      setUsers: (state, users) => {
        state.users = users
      }
    },
    actions: {
      async setUsers ({commit}) {
        let {data} = await axios.get(`http://localhost/api/domains.json`, { crossdomain: true })
        commit('setUsers', data)
        },
      /* getUsers (vuexContext) {
        return axios
        .get("http://localhost/api/domains.json", { headers: {
          'Access-Control-Allow-Origin': '*',
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }})
        .then(res => {
          vuexContext.commit('setUsers')
        })
        .catch(e => console.log(e));
      }, */
        async nuxtServerInit ({commit}) {
        let {data} = await axios.get('http://localhost/api/domains.json', { crossdomain: true })
        commit('setUsers', data)
      }  
    }
  })
}

export default createStore