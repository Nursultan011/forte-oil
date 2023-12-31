// Импортируйте axiosInstance, если он вам нужен
import axiosInstance from '../../helpers/instance';

const state = {
  main: null,
  about: null,
  services: null,
  products: null,
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
  async getAbout({ commit }) {
    try {
      const response = await axiosInstance.get('/api/about/');

      if (response.data) {
        commit('setAbout', response.data);
        console.log(response.data);
      }
    } catch (error) {
      console.log('Ошибка', error);
      throw error;
    }
  },
  async getServices({ commit }) {
    try {
      const response = await axiosInstance.get('/api/services/');

      if (response.data) {
        commit('setServices', response.data);
        console.log(response.data);
      }
    } catch (error) {
      console.log('Ошибка', error);
      throw error;
    }
  },
  async getProducts({ commit }) {
    try {
      const response = await axiosInstance.get('/api/products/');

      if (response.data) {
        commit('setProducts', response.data);
        console.log(response.data);
      }
    } catch (error) {
      console.log('Ошибка', error);
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
  setAbout(state, data) {
    state.about = data;
  },
  setServices(state, data) {
    state.services = data;
  },
  setProducts(state, data) {
    state.products = data;
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
