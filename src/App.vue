<template>
  <v-app>
    <v-content>
     <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import FirebaseService from '@/services/FirebaseService'

export default {
  name: 'App',
  el:'#app',
  components: {   
  },
  data () {
    return {
      posts: [],
      //
    }
  },
  mounted() {
		this.getPosts('AI')
	},
	methods: {
		async getPosts(item) {
			this.posts = await FirebaseService.getPosts(item)
    },
  }
}
</script>
