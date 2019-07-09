<template>

    <div class="footer">
      <weather
       api-key="bfbf1028ce23c6b4053b773996f5b7df"
       title="Weather"
       :latitude="lat"
       :longitude="lon"
       language="en"
       units="uk">
   </weather>
    </div>


</template>
<script>
import VueWeatherWidget from 'vue-weather-widget';
import 'vue-weather-widget/dist/css/vue-weather-widget.css';
export default {
  data(){
    return{
      lat: '',
      lon: ''
    }
  },
   components: {
       'weather': VueWeatherWidget
   },
   mounted(){
     var vm = this
     navigator.geolocation.getCurrentPosition(function(pos){
       vm.lat = pos.coords.latitude.toString();
       vm.lon = pos.coords.longitude.toString();
     })
   }
}
</script>

<style>
.footer {
   left: 0;
   bottom: 0;
   width: 100%;
   background-color: white;
   color: white;
   text-align: center;
}
</style>
