<template>

    <div class="footer">
      <div>
      <button type="button" @click="searchWeatherDaejeon">대전 날씨 보기</button>
      <button type="button" @click="searchWeatherSeoul">서울 날씨 보기</button>
      <button type="button" @click="searchWeatherLondon">런던 날씨 보기</button>
    </div>
<div v-if='viewDaejeon === true' style="border: 1px solid gold; float: left; width: 33%;">
  <h2>국가명 : {{ countryDaejeon }}</h2>
  <p>도시명 : {{ cityDaejeon }}</p>
  <p>현재 온도 : {{temperDaejeon}}</p>
</div>
<div v-if='viewSeoul === true' style="border: 1px solid gold; float: left; width: 33%;">
<h2>국가명 : {{ countrySeoul }}</h2>
<p>도시명 : {{ citySeoul }}</p>
<p>현재 온도 : {{temperSeoul}}</p>
</div>
<div v-if='viewLondon === true' style="border: 1px solid gold; float: left; width: 33%;">
<h2>국가명 : {{ countryLondon }}</h2>
<p>도시명 : {{ cityLondon }}</p>
<p>현재 온도 : {{temperLondon}}</p>
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
      viewDaejeon : false,
      viewSeoul : false,
      viewLondon : false,
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
    searchWeatherDaejeon() {
      const BASE_URL = 'http://api.openweathermap.org/data/2.5/weather?q=Daejeon&appid=7298697712e3485d77bb9b2bfd4a2f12'
      this.$http.get(`${BASE_URL}`)
      .then((result) => {
        this.countryDaejeon = result.data.sys.country
        this.cityDaejeon = result.data.name
        this.temperDaejeon = result.data.main.temp - 273
        this.temperDaejeon = this.temperDaejeon.toFixed(2)
        this.viewDaejeon = true
        console.log(result)
      })
    },
    searchWeatherSeoul() {
      const BASE_URL = 'http://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=7298697712e3485d77bb9b2bfd4a2f12'
      this.$http.get(`${BASE_URL}`)
      .then((result) => {
        this.countrySeoul = result.data.sys.country
        this.citySeoul = result.data.name
        this.temperSeoul=result.data.main.temp - 273
        this.temperSeoul = this.temperSeoul.toFixed(2)
        this.viewSeoul = true
        console.log(result)
      })
    },
    searchWeatherLondon() {
      const BASE_URL = 'http://api.openweathermap.org/data/2.5/weather?q=London&appid=7298697712e3485d77bb9b2bfd4a2f12'
      this.$http.get(`${BASE_URL}`)
      .then((result) => {
        this.countryLondon = result.data.sys.country
        this.cityLondon = result.data.name
        this.temperLondon=result.data.main.temp - 273
        this.temperLondon = this.temperLondon.toFixed(2)
        this.viewLondon = true
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
