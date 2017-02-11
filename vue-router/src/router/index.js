import Vue from 'vue';
import Router from 'vue-router';
import Top from '../components/Top';
import Keyword from '../components/Keyword';
import Search from '../components/Search';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Top',
      component: Top,
    },
    {
      path: '/keyword',
      name: 'keyword',
      component: Keyword,
    },
    {
      path: '/search',
      name: 'search',
      component: Search,
    },
  ],
});
