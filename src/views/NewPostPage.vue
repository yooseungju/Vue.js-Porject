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
   
    <img :src="imageUrl" height="150" v-if="imageUrl" />
        <v-text-field
            label="Select Image"
            @click="pickFile"
            v-model="imageName"
            prepend-icon="attach_file"
        ></v-text-field>

    <input
        type="file"
        style="display: none"
        ref="image"
        accept="image/*"
        @change="onFilePicked"
    />

    <v-btn color="primary" @click="upload">Upload</v-btn>
    <h3>{{imageFile}}</h3>
    <h3>{{imageUrl}}</h3>

    <markdown-editor v-model="content" ref="markdownEditor"></markdown-editor>

    <v-btn @click="postPost()" color="pink darken-2" dark><v-icon dark left>fas fa-edit</v-icon>Post</v-btn>
    {{uploading}}
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
            img: "",
            item:"",

            photo: null,
            photo_url: null,
            dialog: false,
            imageName: "",
            imageUrl: "",
            imageFile: "",
         
		}
    },
    created(){
    this.item = this.$route.params.item;
    },

    methods: {
        postPost() {
            FirebaseService.uploadImg(this.item, this.imageName, this.imageFile, this.title, this.content)
            alert("성공했어")
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