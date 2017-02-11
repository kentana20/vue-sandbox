<template>
  <div class="gif mdl-card mdl-shadow--2dp">
    <div class="mdl-card__title mdl-card--expand">
      <img :src="gif.images.fixed_height.url" alt="" />
    </div>
    <div class="mdl-card__actions">
      <span class="filename">{{gif.slug}}</span>
      <i class="material-icons">favorite</i>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      gif: Object
    }
  }
</script>

<style>
.gif {
  margin: 0 auto;
  width: 80%;
  display: flex;
  justify-content:space-between;
  margin-bottom: 20px;
}
.gif.mdl-card {
  width: 384px;
  height: 384px;
}
.gif> .mdl-card__actions {
  height: 50px;
  padding: 8px;
  background: rgba(0, 0, 0, 0.2);
}
.filename {
  color: #fff;
  font-size: 12px;
  font-weight: 500;
}

</style>