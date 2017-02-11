<template>
  <div>
    <h1>Vue.js で宿泊施設検索</h1>
    <ul class="nav nav-tabs nav-justified">
      <li role="presentation">
        <router-link to="/top" class="">Top</router-link>
      </li>
      <li role="presentation active">
        <router-link to="/keyword" class="" id="keyword">キーワード</router-link>
      </li>
      <li role="presentation">
        <router-link to="/condition" class="">条件</router-link>
      </li>
    </ul>
    <h5></h5>
  </div>
</template>
