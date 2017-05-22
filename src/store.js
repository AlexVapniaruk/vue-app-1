import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    reviews: [
      { name: 'Ivan', comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, inventore.' },
      { name: 'Alexander', comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, inventore.' },
      { name: 'Artem', comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, inventore.' },
      { name: 'Alex', comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, inventore.' }
    ]
  }
})
