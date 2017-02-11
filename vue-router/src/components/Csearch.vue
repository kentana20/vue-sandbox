<template>
  <div class="input-group">
    <input @change="CHANGE_KEYWORD($event.target.value)" type="text" class="form-control" placeholder="チェックイン日">
    <!-- <input @change="CHANGE_COUT($event.target.value)" type="text" class="form-control" placeholder="チェックアウト日"> -->
    <span class="input-group-btn">
      <button @click="CSEARCH" class="btn btn-default" type="button">検索</button>
    </span>
  </div><!-- /input-group -->
</template>

<script>
  import { mapActions } from 'vuex';
  import { CHANGE_KEYWORD, SEARCH } from '../vuex/mutation-types';

  export default {
    methods: {
      ...mapActions([
        CHANGE_KEYWORD, SEARCH,
      ]),
    },
  };
</script>
