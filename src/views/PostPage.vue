<template>
  <div>
    <!-- Img Banner -->


    <!-- Post list -->
    <v-container>
        <v-btn  :to="`${item}/new`" color="primary" dark ><v-icon dark left small>fas fa-edit</v-icon>New</v-btn>

        <v-layout>
        <v-flex xs12>
            <PostList :item="item" :limits="10" :load-more="true"></PostList>
            <h2>{{item}}</h2>
        </v-flex>
      </v-layout>
      
    </v-container>
  </div>
</template>

<script>

import PostList from '../components/PostList.vue'

export default {
    name: 'PostPage',
    data(){
        return{
            item:""
        }
    },
    created(){
        this.item = this.$route.params.item;
    },
	components: {
		PostList,
	}
}
</script>
