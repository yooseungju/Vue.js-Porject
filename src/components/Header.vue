<template>
  <div class="header">
<div id="google_translate_element"></div>
    <div style="margin-left:2%;">
      <h2 style="font-family: 'Gugi', cursive;">SSAFY 원투쓰리!</h2>

      <Login>
      </Login>

    </div>


</div>

</template>

<script>
import Login from './Login'

export default ({
  data() {
      return {
    }
  },
  components: {
      Login
   },
})

</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Black+Han+Sans|Gugi&display=swap');
</style>