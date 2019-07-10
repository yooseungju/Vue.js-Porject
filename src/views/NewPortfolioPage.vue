<template>
<v-container>
  <h2 class="headline my-5 text-xs-center">New Portfolio</h2>

  <v-form>
  <v-text-field
      v-model="title"
      :counter="30"
      label="Title"
      required
    ></v-text-field>
    <ImageUploader v-on:gotimg="changeImgFile"></ImageUploader>
    <markdown-editor v-model="content" ref="markdownEditor"></markdown-editor>
    <v-btn @click="upload" color="pink darken-2" dark><v-icon dark left>fas fa-edit</v-icon>Post</v-btn>
 
  </v-form>
</v-container>
</template>

<script>

import FirebaseService from '@/services/FirebaseService'
import ImageUploader from '../components/ImageUploader'

export default {
	name: 'NewPortfolio',
	components:{
        ImageUploader
    },
	data() {
		return {
            title: "",
            content: "",
            item: "",
            img: "",
            imageFile: "",
         
		}
    },

    created(){
        this.item = this.$route.params.item;
    },

    methods: {
        changeImgFile(value){
            this.imageFile = value;
            alert(this.imageFile)
        },
        postPortfolio() {
            FirebaseService.postPortfolio(this.title, this.content, this.img)
        },

        upload(){
            var xmlHttpRequest = new XMLHttpRequest();
            xmlHttpRequest.open('POST', 'https://api.imgur.com/3/image/', true)

            xmlHttpRequest.setRequestHeader("Authorization", "Client-ID 38e11911aeaa6ab")

            xmlHttpRequest.onreadystatechange = () => {
                if (xmlHttpRequest.readyState == 4) {
                    if (xmlHttpRequest.status == 200) {
                        var result = JSON.parse(xmlHttpRequest.responseText)
                        this.img = result.data.link    
                        this.postPortfolio()
                        alert("업로드 성공")

                    }
                    else {
                        alert("업로드 실패")
                    }
                }
            }
            xmlHttpRequest.send(this.imageFile)
            }, 
        },
}
</script>

<style>
.progress-bar {
  margin: 10px 0;
}
input[type="file"] {
  position: absolute;
  clip: rect(0,0,0,0);
}
</style>