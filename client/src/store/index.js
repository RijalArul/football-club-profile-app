import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    areas: [],
    clubs: []
  },
  mutations: {
    SET_AREAS (state, payload) {
      state.areas = payload
    },

    SET_ALL_CLUB (state, payload) {
      state.clubs = payload
    }
  },
  actions: {
    async actionFetchAreas (context) {
      try {
        const response = await axios({
          method: 'GET',
          url: 'http://api.football-data.org/v2/areas',
          headers: {
            'X-Auth-Token': '8399a7988b4e4ba2b2aeae585bdc390b'
          }
        })
        const { areas } = response.data
        const europeAreas = areas.filter(
          area => area.parentArea === 'Europe' && area.ensignUrl
        )
        context.commit('SET_AREAS', europeAreas)
      } catch (err) {
        console.log(err)
      }
    },

    async actionFetchAllClub (context, payload) {
      try {
        const response = await axios({
          method: 'GET',
          url: `http://api.football-data.org/v2/teams?areas=${payload}`,
          headers: {
            'X-Auth-Token': '8399a7988b4e4ba2b2aeae585bdc390b'
          }
        })

        const { teams } = response.data
        const filterTeams = teams.filter(team => team.crestUrl)
        context.commit('SET_ALL_CLUB', filterTeams)
      } catch (err) {
        console.log(err)
      }
    }
  },
  modules: {}
})