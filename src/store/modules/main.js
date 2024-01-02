// Импортируйте axiosInstance, если он вам нужен
import axiosInstance from '../../helpers/instance';

const state = {
  main: null,
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
};

const mutations = {
  getMain(state, data) {
    state.main = data;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
