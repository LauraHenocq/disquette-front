import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import without from 'lodash/without'
import shuffle from 'lodash/shuffle'

Vue.use(Vuex)

export default new Vuex.Store({
  state () {
    return {
      disquettes: [],
      returnedDisquette: ''
    }
  },
  getters: {
    getReturnedDisquette (state) {
      return state.returnedDisquette
    },
    getAllDisquettes (state) {
      return state.disquettes
    }
  },
  mutations: {
    setReturnedDisquette (state, disquette) {
      state.returnedDisquette = disquette
    },
    setDisquettes (state, disquettes) {
      state.disquettes = disquettes
    },
    addADisquette (state, disquette) {
      state.disquettes.push(disquette)
    }
  },
  actions: {
    async getAllDisquettes ({ commit }) {
      try {
        const disquettes = await axios.get('http://localhost:4000/disquettes')
        commit('setDisquettes', disquettes.data)
      } catch (e) {
        console.error(e)
      }
    },

    setANewReturnedDisquette ({ commit, state }) {
      const autresDisquettes = without(state.disquettes, ...state.returnedDisquette)
      const disquetteToReturned = shuffle(autresDisquettes).pop()
      commit('setReturnedDisquette', disquetteToReturned)
    },

    async addADisquette ({ commit }, disquetteToAdd) {
      try {
        await axios.post('http://localhost:4000/disquettes', { disquette: disquetteToAdd })
        commit('addADisquette', disquetteToAdd)
      } catch (e) {
        console.error(e)
      }
    }
  }
})
