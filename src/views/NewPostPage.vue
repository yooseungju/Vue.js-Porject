<template>
<v-container>
  <h2 class="headline my-5 text-xs-center">New Post</h2>

  <v-form>
  <v-text-field
      v-model="title"
      :counter="30"
      label="Title"
      required
    ></v-text-field>
   
    
    <img :src="imageUrl" height="150" v-if="imageUrl" id="image" />

    <v-text-field
        label="Select Image"
         @click="pickFile"
        v-model="imageName"
        prepend-icon="attach_file"
    ></v-text-field>

    <input
        id = "file"
        type="file"
        style="display: none"
        ref="image"
        accept="image/*"
        @change="onFilePicked"
    />


    <markdown-editor v-model="content" ref="markdownEditor"></markdown-editor>
    <v-btn @click="upload" color="pink darken-2" dark><v-icon dark left>fas fa-edit</v-icon>Post</v-btn>
 
  </v-form>
</v-container>
</template>

<script>

import FirebaseService from '@/services/FirebaseService'

export default {
	name: 'NewPost',
	
	data() {
		return {
            title: "",
            content: "",
            item: "",
            img: "",
            imageUrl: "",
            imageName: "",
            imageFile: "",
         
		}
    },
    created(){
    this.item = this.$route.params.item;
    },

    methods: {
        postPost() {
            FirebaseService.postPost(this.item ,this.title, this.content,this.img)
            alert("성공")
            },

        upload(){
            var xmlHttpRequest = new XMLHttpRequest();
            xmlHttpRequest.open('POST', 'https://api.imgur.com/3/image/', true)
            xmlHttpRequest.setRequestHeader("Authorization", "Client-ID be7ccb835f18115")

            xmlHttpRequest.send(this.imageFile);

            xmlHttpRequest.onreadystatechange = function () {
                if (xmlHttpRequest.readyState == 4) {
                    if (xmlHttpRequest.status == 200) {
                        var result = JSON.parse(xmlHttpRequest.responseText);
                        this.img = result.data.link;  
                        
                    }
                    else {
                        alert("업로드 실패");
                    }
                }
            };
            this.postPost()
        }, 

        pickFile(){
            this.$refs.image.click();
        },

        onFilePicked(e) {
            const files = e.target.files;
            if (files[0] !== undefined) {
                this.imageName = files[0].name;
                
                if (this.imageName.lastIndexOf(".") <= 0) {
                    return;
                }
                const fr = new FileReader();
                fr.readAsDataURL(files[0]);
                fr.addEventListener("load", () => {
                this.imageUrl = fr.result;
                this.imageFile = files[0];
                });
            } 
        }


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