<template>
  <div>
    <h1>Vue-Routerサンプル<small> - タブでURLが変わる - </small></h1>
    <ul class="nav nav-tabs nav-justified">
      <li role="presentation">
        <router-link to="/top" class="">Top</router-link>
      </li>
      <li role="presentation">
        <router-link to="/keyword" class="">キーワード</router-link>
      </li>
      <li role="presentation">
        <router-link to="/condition" class="">条件</router-link>
      </li>
    </ul>
  </div>
</template>
