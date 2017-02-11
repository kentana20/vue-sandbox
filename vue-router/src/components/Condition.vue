<template>
  <div class="container center-block">
    <div class="row">
      <csearch></csearch>
      <!-- result -->
      <box
        v-for="hotel in chotels"
        :hotel="hotel">
      </box>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Csearch from './Csearch';
import Box from './Box';

export default {
  computed: {
    ...mapGetters(['chotels']),
  },
  components: {
    Csearch,
    Box,
  },
};
</script>
