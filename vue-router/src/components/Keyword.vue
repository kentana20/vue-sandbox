<template>
  <div class="container center-block">
    <div class="row">
      <search></search>
      <!-- result -->
    </div>
  </div>
</template>

<script>
import Search from './Search';
// import Card from './Card'
// import { mapGetters } from 'vuex'

export default {
  // computed: {
  //   ...mapGetters(['gifs'])
  // },
  components: {
    Search,
  },
};
</script>
