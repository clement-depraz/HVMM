import Vuex from 'vuex'
import axios from "axios"
import Vue from 'vue'

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
            let {data} = await axios.get('http://172.16.24.245:8080/user/pending')
            commit('setUsers', data)
            if (req.session && req.session.authUser) {
              commit('setAuthUser', req.session.authUser)
            }
          }
          catch (error)
          {
            console.error("Can't validate user, ", error.response);
          }
        }, 
        //Load users for admin page
        async setUsers ({ commit }) {
          try
          {
            let {data} = await axios.get(`http://172.16.24.245:8080/user/pending`)
            commit('setUsers', data)
          }
          catch (error)
          {
            console.error("Can't validate user, ", error.response);
          }
        },
        //Login app user
        async login ({ commit }, { email, password })
        {
          console.log("fonction login", email, password)
          let {data} = await axios.post('http://localhost/login', {email, password})
          commit('setAuthUser', data)
        },
        //Logout app user
        async logout ({ commi })
        {
          await axios.post('http://localhost/logout')
          commit('setAuthUser', null)
        },
        //Register user
        async register ({ commit }, { firstname, lastname, rank, email, password })
        {
          try
          {
            console.log("fonction register", firstname, lastname, rank, email, password)
            let {data} = await axios.post('http://172.16.24.245:8080/signin', { last_name: lastname, first_name: firstname, email: email, password: password, rank: rank})
            commit('setAuthUser', data)
            let myToast = this.$toast.success('Validation request sent to Chief Police Officer')
            myToast.goAway(1500);  
          }
          catch (e)
          {
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

            let {data} = await axios.put(`http://172.16.24.245:8080/user/${userid}/status/true`)
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
            let {data} = await axios.put(`http://172.16.24.245:8080/user/${userid}/status/false`)
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
          let {data} = await axios.get('http://localhost/data')
          commit('SetCrimes')
        }
    }
  })
}

export default createStore