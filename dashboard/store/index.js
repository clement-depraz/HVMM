import Vuex from 'vuex'
import axios from "axios"

const Hapi = axios.create({
  baseURL: 'http://192.168.0.36:8080'
});

const createStore = () => {
  return new Vuex.Store({
    state: {
      users: [],
      authUser: null,
      crimes: []
    },
    mutations: {
      setUsers: (state, users) => {
        state.users = users
      },
      SetCrimes: (state, crimes) => {
        state.crimes = crimes
      },
      removeUser: (state, userid) => {
        let users = state.users.filter((user) => user.id !== userid);
        state.users = users
      },
      setAuthUser: (state, authUser) => {
        console.log("authUser : ", authUser)
        state.authUser = authUser
      }
    },
    actions: {
        //method called at the server initialization
        async nuxtServerInit ({ commit }, {req}) {
          try
          {
            let {data} = await Hapi.get('/ping')
            commit('setUsers', data)
           /* if (req.session && req.session.authUser) {
              commit('setAuthUser', req.session.authUser)
            }
            */
          }
          catch (error)
          {
            console.error("Can't retrieve users", error.response);

          }
        }, 
        //Load users for admin page
        async setUsers ({ commit }) {
          try
          {
            let {data} = await Hapi.get(`/user/pending`)
            commit('setUsers', data)
          }
          catch (error)
          {
            console.error("Can't retrieve users", error.response);
          }
        },
        //Login app user
        async login ({ commit }, { email, password })
        {
          try
          {
            console.log("fonction login", email, password)
            let {data} = await Hapi.post('/login', {email, password})
            commit('setAuthUser', data)
            let myToast = this.$toast.success('Welcome')
            myToast.goAway(2500); 
            this.$router.replace({ path: '/' })
          }
          catch(e)
          {
            console.log(e)
            let myToast = this.$toast.error(e)
            myToast.goAway(1500); 
          }

        },
        //Logout app user
        async logout ({ commit })
        {
          console.log("logout");

          try
          {
            await Hapi.get('/logout')
            commit('setAuthUser', null)
          }
          catch (e)
          {
            console.log(e)
            let myToast = this.$toast.error(e)
            myToast.goAway(1500); 
          }
        },

        //Register user
        async register ({ commit }, { firstname, lastname, rank, email, password })
        {
          try
          {
            let {data} = await Hapi.post('/signin', { last_name: lastname, first_name: firstname, email: email, password: password, rank: rank})
            this.$router.replace({ path: '\data' })
            let myToast = this.$toast.success('Validation request sent to Chief Police Officer')
            myToast.goAway(2500); 
          }
          catch (e)
          {
            console.log(e)
            let myToast = this.$toast.error(e)
            myToast.goAway(1500); 
          }
        },
        //PUT user validation by id
        async validateUser ({ commit }, { userid})
        {
          console.log("validate user ", userid)
          try
          {

            let {data} = await Hapi.put(`/user/${userid}/status/true`)
            commit('removeUser', userid);
            let myToast = this.$toast.success('Database has been updated successfully')
            myToast.goAway(1500);         
          }
          catch (e)
          {
            let myToast = this.$toast.error(e)
            myToast.goAway(1500);         
          }
        },
        //DELETE user by id
        async deleteUser ({ commit }, { userid })
        {
          console.log("delete user ", userid)
          try
          {
            let {data} = await Hapi.put(`/user/${userid}/status/false`)
            commit('removeUser', userid);
            let myToast = this.$toast.success('Database has been updated successfully')
            myToast.goAway(1500);         
          }
          catch (e)
          {
            let myToast = this.$toast.error(e)
            myToast.goAway(1500);         
          }
        },
        //set all crimes
        async setCrimes ({ commit }) {
          let {data} = await Hapi.get('/data')
          commit('SetCrimes')
        }
    }
  })
}

export default createStore