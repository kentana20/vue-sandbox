<template>
  <div id="app">
    <myheader></myheader>
    ---
    <p v-if="msg.length > 0">{{msg}}</p>
    <p v-else>no text :(</p>
    <input type="text" v-model="msg">
    <button @click="clear()">clear</button>
    <br />
    ---
    <div>
      <img id="testimg" :src="src"></img>
      <button @click="chimg()">change</button>
    </div>
    <div id="todoApp">
      ---
      <inputfrm></inputfrm>
    </div>
  </div>
</template>

<script>
import myheader from './components/myheader';
import inputfrm from './components/inputfrm';

export default {
  components: {
    myheader,
    inputfrm,
  },
  data() {
    return {
      msg: 'hello, Vue.js',
      src: 'https://cdn0.iconfinder.com/data/icons/mobile-development-icons/128/Start.png',
    };
  },
  methods: {
    clear() {
      if (this.msg === 'no text!') {
        this.msg = '';
      } else {
        this.msg = 'no text!';
      }
    },
    chimg() {
      $.getJSON('http://api.tiqav.com/search/random.json?callback=?', {}, (json) => {
        this.src = json[0].source_url;
      });
      // $.getJSON('https://pixabay.com/api/?key=4523178-235f1f61f555b591793af96e8&q=waikiki&image_type=photo', {}, (json) => {
      //  this.src = json.hits[0].webformatURL;
      // });
    },
  },
  mounted() {
    const that = this;
    $.getJSON('http://www.geonames.org/postalCodeLookupJSON?postalcode=10504&country=US&callback=?', {}, (json) => {
      that.msg = json.postalcodes[0].adminName1;
    });
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
