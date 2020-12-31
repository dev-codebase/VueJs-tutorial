import { createStore } from 'vuex';
import { UserModule } from './user';
export default createStore({
  state: {},

  // Mutations are functions that effect the STATE
  mutations: {},

  //Actions are functions that are called throughout the application that call mutations
  actions: {},

  modules: {
    User: UserModule
  }
})
