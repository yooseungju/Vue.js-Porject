<template>
  <div>
    Main 페이지입니다!
    <div class="chart">
      <mix-chart></mix-chart>
    </div>
  </div>
</template>
<script>

import Login from '../components/Login'
import mixChart from '../components/mixChart.vue'

export default {
  name: 'Main',
  components: {
    mixChart,
    Login
	},
}
</script>

<style>
.chart{
  width:400px;
  height:400px;
}
</style>
