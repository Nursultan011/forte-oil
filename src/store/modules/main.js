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
      axiosInstance.defaults.headers.common['Accept-Language'] = localStorage.getItem('lang') || 'ru';

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
      axiosInstance.defaults.headers.common['Accept-Language'] = localStorage.getItem('lang') || 'ru';

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
      axiosInstance.defaults.headers.common['Accept-Language'] = localStorage.getItem('lang') || 'ru';

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
      axiosInstance.defaults.headers.common['Accept-Language'] = localStorage.getItem('lang') || 'ru';

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
      axiosInstance.defaults.headers.common['Accept-Language'] = localStorage.getItem('lang') || 'ru';

      const response = await axiosInstance.get('/api/contacts/');

      if (response.data) {
        commit('setContact', response.data);
        console.log(response.data);
      }
    } catch (error) {
      console.log('Ошибка', error);
      throw error;
    }
  },
  async postRequest({ commit }, payload) {
    try {
      const response = await axiosInstance.post('/api/form_request/', payload);

      if (response.data) {
        // commit('setMain', response.data);
        return response.data;
      }

    } catch (error) {
      throw error.response;
    }
  },
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
