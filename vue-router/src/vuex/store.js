import Vuex from 'vuex';
import Vue from 'vue';
import {
  CHANGE_KEYWORD,
  SEARCH,
  CHANGE_CHECKIN,
  CHANGE_CHECKOUT,
  CSEARCH,
} from './mutation-types';

Vue.use(Vuex);

const state = {
  keyword: '',
  checkin: '',
  checkout: '',
  hotels: [],
  chotels: [],
};

function getHotels(query) {
  const params = encodeURIComponent(query).replace(/%20/g, '+');
  // return fetch('http://api.giphy.com/v1/gifs/search?q=' + params + '&api_key=dc6zaTOxFJmzC')

  // https://app.rakuten.co.jp/services/api/Travel/KeywordHotelSearch/20131024?format=json&keyword=%E4%BC%8A%E8%B1%86&applicationId=1099272863408503218&callack=?
  return fetch(`https://app.rakuten.co.jp/services/api/Travel/KeywordHotelSearch/20131024?format=json&hits=10&sort=-roomCharge&keyword=${params}&applicationId=1099272863408503218`)
          .then(res => res.json());
}

function getVacancy(checkin, checkout) {
  return fetch(`https://app.rakuten.co.jp/services/api/Travel/VacantHotelSearch/20131024?format=json&checkinDate=${checkin}&checkoutDate=${checkout}&largeClassCode=japan&middleClassCode=tokyo&smallClassCode=tokyo&detailClassCode=A&applicationId=1099272863408503218`)
          .then(res => res.json());
}

const actions = {
  [CHANGE_KEYWORD]({ commit }, keyword) {
    commit(CHANGE_KEYWORD, keyword);
  },

  [CHANGE_CHECKIN]({ commit }, checkin) {
    commit(CHANGE_CHECKIN, checkin);
  },

  [CHANGE_CHECKOUT]({ commit }, checkout) {
    commit(CHANGE_CHECKOUT, checkout);
  },

  [SEARCH]({ commit, state }) {
    getHotels(state.keyword)
      .then((data) => {
        commit(SEARCH, data.hotels);
      });
  },

  [CSEARCH]({ commit, state }) {
    getVacancy(state.checkin, state.checkout)
      .then((data) => {
        commit(CSEARCH, data.hotels);
      });
  },
};

const getters = {
  hotels: state => state.hotels,
  chotels: state => state.chotels,
};

const mutations = {
  [CHANGE_KEYWORD](state, keyword) {
    state.keyword = keyword;
  },
  [SEARCH](state, hotels) {
    state.hotels = hotels;
  },
  [CHANGE_CHECKIN](state, checkin) {
    state.checkin = checkin;
  },
  [CHANGE_CHECKOUT](state, checkout) {
    state.checkout = checkout;
  },
  [CSEARCH](state, chotels) {
    state.chotels = chotels;
  },
};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
});
