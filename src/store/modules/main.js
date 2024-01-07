// Импортируйте axiosInstance, если он вам нужен
import axiosInstance from '../../helpers/instance';

const state = {
  main: null,
  contacts: null,
};

const getters = {
};

const actions = {
  async getMain({ commit }) {
    try {
      const response = await axiosInstance.get('/api/home/');

      if (response.data) {
        commit('setMain', response.data);
        console.log(response.data)
      }

      return response.data;
    } catch (error) {
      console.log('Ошибка:', error);
      throw error;
    }
  },
  async getContacts({ commit }) {
    try {
      const response = await axiosInstance.get('/api/contacts/');

      if (response.data) {
        commit('setContact', response.data);
        console.log(response.data);
      }
    } catch (error) {
      console.log('Ошибка', error);
      throw error;
    }
  }
};

const mutations = {
  setMain(state, data) {
    state.main = data;
  },
  setContact(state, data) {
    state.contacts = data;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
