<template>
  <div>
    <!-- Img Banner -->

    <!-- Post list -->
    <v-container>
        <v-btn  :to="`new/`" color="primary" dark ><v-icon dark left small>fas fa-edit</v-icon>New</v-btn>

        <v-layout>
        <v-flex xs12>
            <PortfolioList :item="item" :limits="10" :load-more="true"></PortfolioList>
            <h2>{{item}}</h2>
        </v-flex>
      </v-layout>
      
    </v-container>
  </div>
</template>

<script>

import PortfolioList from '../components/PortfolioList'

export default {
    name: 'PortfolioPage',
    data(){
        return{
            item:""
        }
    },
    created(){
        this.item = this.$route.params.item;
    },
	components: {
		PortfolioList,
	}
}
</script>
