import Vue from 'vue';
import Router from 'vue-router';
import Top from '../components/Top';
import Keyword from '../components/Keyword';
import Condition from '../components/Condition';

Vue.use(Router);
Vue.filter('moneyDelimiter', (value) => { value.toLocaleString(); });

export default new Router({
  routes: [
    {
      path: '/top',
      name: 'Top',
      component: Top,
    },
    {
      path: '/keyword',
      name: 'keyword',
      component: Keyword,
    },
    {
      path: '/condition',
      name: 'condition',
      component: Condition,
    },
  ],
});
