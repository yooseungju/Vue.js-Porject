<template>
  <div class="header">
<div id="google_translate_element"></div>
    <div style="margin-left:2%;">
      <h2 style="font-family: 'Gugi', cursive;">SSAFY 원투쓰리!</h2>
      <h4 style="float:right; margin-right:2%; font-family: 'Gugi', cursive;"><a href="/newpost" style="color:black">newpost</a></h4>
      <h4 style="float:right; margin-right:2%; font-family: 'Gugi', cursive;"><a href="/post" style="color:black">post</a></h4>
      <h4 style="float:right; margin-right:2%; font-family: 'Gugi', cursive;"><a href="/profile" style="color:black">profile</a></h4>

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