<template>
  <div class="input-group">
    <input @change="CHANGE_CHECKIN($event.target.value)" type="text" class="form-control" placeholder="チェックイン日">
    <input @change="CHANGE_CHECKOUT($event.target.value)" type="text" class="form-control" placeholder="チェックアウト日">
    <span class="input-group-btn">
      <button @click="CSEARCH" class="btn btn-default" type="button">検索</button>
    </span>
  </div><!-- /input-group -->
</template>

<script>
  import { mapActions } from 'vuex';
  import { CHANGE_CHECKIN, CHANGE_CHECKOUT, CSEARCH } from '../vuex/mutation-types';

  export default {
    methods: {
      ...mapActions([
        CHANGE_CHECKIN, CHANGE_CHECKOUT, CSEARCH,
      ]),
    },
  };
</script>
