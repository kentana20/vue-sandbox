<template>
  <div id="head">
    <div>{{head}}</div>
    <button @click="change()">change</button>
  </div>
</template>

<script>
  module.exports = {
    data() {
      return {
        head: 'header text',
        oldtext: [],
      };
    },
    methods: {
      change() {
        this.oldtext.push({
          text: this.head,
        });
        if (this.head === 'header change') {
          this.head = 'header text';
        } else {
          this.head = 'header change';
        }
      },
    },
  };
</script>
