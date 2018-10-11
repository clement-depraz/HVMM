import Vuex from 'vuex'
import axios from "axios"

const createStore = () => {
  return new Vuex.Store({
    state: {
      users: [],
      authUser: null,
      crimes: [],
      nbResult: 0,
      crimeDetails: null,
    },
    mutations: {
      setUsers: (state, users) => {
        state.users = users
      },
      SetCrimes: (state, crimes) => {
        state.crimes = crimes
      },
      SetNbResult: (state, nbresult) => {
        state.nbResult = nbresult
      },
      removeUser: (state, userid) => {
        let users = state.users.filter((user) => user.id !== userid);
        state.users = users
      },
      setAuthUser: (state, authUser) => {
        state.authUser = authUser
      },
      SetCrimeDetails: (state, crimeId) => {
        var crimeDetails = state.crimes.filter((crime) => crime.compnos == crimeId);
        console.log(crimeDetails)
        if ((crimeDetails === undefined) || (crimeDetails === null)) {
          console.log("crimeDetails undefined")
          throw new Error
        }
        state.crimeDetails = crimeDetails[0]
      },
      SetDeleteCrime: (state, crimeId) => {
        let crimes = state.crimes.filter((crime) => crime.id !== crimeId);
        state.crimes = crimes
      },
      AddNewCrime: (state, newCrime) =>
      {
        state.crimes.push(newCrime);
      }
    },
    actions: {
        //method called at the server initialization
        async nuxtServerInit ({ commit }, {req}) {
          try
          {
            
            let {data} = await axios.get('http://192.168.1.24:8080/ping')
            console.log("Serveur Init");
            if (req.session && req.session.authUser) {
              commit('setAuthUser', req.session.authUser)
              console.log("session");
            }  
            data = await axios.post('http://192.168.1.24:8080/crime/search', {page: 1})
            commit('SetCrimes', data.results)
            commit('SetNbResult', data.nb_result)
                     
          }
          catch (error)
          {
            console.error("Can't ping server error : ", error.response);

          }
        }, 
        //Load users for admin page
        async setUsers ({ commit }) {
          try
          {
            let {data} = await axios.get(`http://192.168.1.24:8080/user/pending`)
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
            let {data} = await axios.post('http://192.168.1.24:8080/login', {email, password})
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
            await axios.get('http://192.168.1.24:8080/logout')
            commit('setAuthUser', null)
            this.$router.replace({ path: '/' })

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
            let {data} = await axios.post('http://192.168.1.24:8080/signin', { last_name: lastname, first_name: firstname, email: email, password: password, rank: rank})
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

            let {data} = await axios.put(`http://192.168.1.24:8080/user/${userid}/status/true`)
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
            await axios.put(`http://192.168.1.24:8080/user/${userid}/status/false`)
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
          try
          {
            let {data} = await axios.post('http://192.168.1.24:8080/crime/search', {page: 1})
            commit('SetCrimes', data.results)
            commit('SetNbResult', data.nb_result)
          }
          catch (e)
          {
            let myToast = this.$toast.error(e)
            myToast.goAway(1500);         
          }
        },
        //Apply filters to crimes research
        async searchCrimesFilter ({ commit}, { compnos, incidentType, reptDist, weaponType, domestic, shooting, fromDate })
        {
          try
          {
            console.log(compnos)
            let {data} = await axios.post('http://192.168.1.24:8080/crime/search', 
            { compnos, incidentType, reptDist, weaponType, domestic, shooting, fromDate })
            commit('SetCrimes', data.results)
            commit('SetNbResult', data.nb_result)
          }
          catch (e)
          {
            let myToast = this.$toast.error(e)
            myToast.goAway(1500);         
          }

        },
        async setCrimeDetails ({ commit }, { crimeId })
        {
          try
          {
            commit('SetCrimeDetails', crimeId) 
          }
          catch(e)
          {
            let myToast = this.$toast.error(e)
            myToast.goAway(1500);   
          }          
        },
        async deleteCrime ({ commit }, { crimeId })
        {
          try
          {
            let data = await axios.delete(`http://192.168.1.24:8080/crime/${crimeId}`)
            commit('SetDeleteCrime', crimeId) 
          }
          catch(e)
          {
            let myToast = this.$toast.error(e)
            myToast.goAway(1500);   
          }          
        },
        async postNewCrime ({ commit }, { newCrime })
        {
          try
          {
            let data = await axios.post(`http://192.168.1.24:8080/crime`, {newCrime} )
            this.$router.push("/data")
            commit('AddNewCrime', newCrime) 
          }
          catch(e)
          {
            let myToast = this.$toast.error(e)
            myToast.goAway(1500);   
          }          
        },
        async exportUsers ({ commit })
        {
          try
          {
           let data = await axios.get(`http://192.168.1.24:8080/user/export`)
           console.log(data);
          }
          catch(e)
          {
            let myToast = this.$toast.error(e)
            myToast.goAway(1500);    
          }
        }
    }
  })
}

export default createStore