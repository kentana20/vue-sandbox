<template>
  <div class="input-group">
    <input @change="CHANGE_KEYWORD($event.target.value)" v-on:keyup="SEARCH" type="text" class="form-control" placeholder="検索ワード">
    <span class="input-group-btn">
      <button @click="SEARCH" class="btn btn-default" type="button">検索</button>
    </span>
  </div><!-- /input-group -->
</template>
