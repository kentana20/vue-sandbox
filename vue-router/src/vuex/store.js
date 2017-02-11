import Vuex from 'vuex';
import Vue from 'vue';
import {
  CHANGE_KEYWORD,
  SEARCH,
} from './mutation-types';

Vue.use(Vuex);

const state = {
  keyword: '',
  hotels: [],
};

function getHotels(query) {
  const params = encodeURIComponent(query).replace(/%20/g, '+');
  // return fetch('http://api.giphy.com/v1/gifs/search?q=' + params + '&api_key=dc6zaTOxFJmzC')

  // https://app.rakuten.co.jp/services/api/Travel/KeywordHotelSearch/20131024?format=json&keyword=%E4%BC%8A%E8%B1%86&applicationId=1099272863408503218&callack=?
  return fetch(`https://app.rakuten.co.jp/services/api/Travel/KeywordHotelSearch/20131024?format=json&hits=10&sort=-roomCharge&keyword=${params}&applicationId=1099272863408503218`)
          .then(res => res.json());
}
const actions = {
  [CHANGE_KEYWORD]({ commit }, keyword) {
    commit(CHANGE_KEYWORD, keyword);
  },

  [SEARCH]({ commit, state }) {
    getHotels(state.keyword)
      .then((data) => {
        commit(SEARCH, data.hotels);
      });
  },
};

const getters = {
  hotels: state => state.hotels,
};

const mutations = {
  [CHANGE_KEYWORD](state, keyword) {
    state.keyword = keyword;
  },
  [SEARCH](state, hotels) {
    state.hotels = hotels;
  },
};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
});
