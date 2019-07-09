<template>

    <div class="footer">
      <button type="button" @click="searchWeather">보기</button>
<div v-if='view === true'>
  <h2>국가명 : {{ country }}</h2>
  <p>도시명 : {{ city }}</p>
  <p>현재 온도 : {{temper}}</p>
</div>
    </div>


</template>
<script>
import { posix } from 'path';

export default {
  name: 'Footer',
  components: {
  },
  data () {
    return {
      view: false,
      country: '',
      city: ''
      //
    }
  },
  computed: {
      hasResult: function() {
        return this.posts.length > 0
      }
  },
  methods: {
    searchWeather() {
      const BASE_URL = 'http://api.openweathermap.org/data/2.5/weather?q=Daejeon&appid=7298697712e3485d77bb9b2bfd4a2f12'
      this.$http.get(`${BASE_URL}`)
      .then((result) => {
        this.country = result.data.sys.country
        this.city = result.data.name
        this.temper = result.data.main.temp - 273
        this.view = true
        console.log(result)
      })
    }
  }
}
</script>

<style>
.footer {
   left: 0;
   bottom: 0;
   width: 100%;
   background-color: black;
   color: white;
   text-align: center;
}
</style>
