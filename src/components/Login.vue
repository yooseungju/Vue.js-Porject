<template>

    <div class="login">
      <!-- <v-flex xs12 sm6 md3>
      <v-text-field
        label="email"
        type="email"
        v-model="singin_email"

      ></v-text-field>

      <v-text-field
        label="password"
        type="password"
        v-model="singin_password"

      ></v-text-field>

    </v-flex>
    <v-btn color="info" v-on:click="singIn">Sign In</v-btn>
    <v-btn color="info" v-on:click="singIn_Facebook">Facebook</v-btn> -->



    <div style='display:inline;float:right;min-width:1200px;'>
      <!-- signUp -->
        <div class="text-xs-right" style='display:inline;float:right;'>
      <v-dialog
        v-model="dialog_singup"
        width="500"
      >
        <template v-slot:activator="{ on }">
          <v-btn
            color="red lighten-2"
            dark
            v-on="on"
          >
            Sign Up
          </v-btn>
        </template>

        <v-card>
          <v-card-title
            class="headline grey lighten-2"
            primary-title
          >
            Sign Up
          </v-card-title>

          <v-card-text>
            <v-flex xs12 sm6 md3>
            <v-text-field
              label="email"
              type="email"
              v-model="singup_email"

            ></v-text-field>
          </v-flex>


          <v-flex xs12 sm6 md3>
            <v-text-field
            v-model="singup_password"
              label="password"
              type="password"
            ></v-text-field>
          </v-flex>
          <v-btn color="info" v-on:click="signUp">Sign Up</v-btn>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              flat
              @click="dialog_singup = false"
            >
              close
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  <!-- signin     -->
    <div class="text-xs-right" style='display:inline;float:right;'>
    <v-dialog
    v-model="dialog_singin"
    width="500"
    >
    <template v-slot:activator="{ on }">
      <v-btn
        color="red lighten-2"
        dark
        v-on="on"
      >
        Sign In
      </v-btn>
    </template>

    <v-card>
      <v-card-title
        class="headline grey lighten-2"
        primary-title
      >
        Sign In
      </v-card-title>

      <v-card-text>
        <v-flex xs12 sm6 md3>
          <v-text-field
            label="email"
            type="email"
            v-model="singin_email"

          ></v-text-field>
      </v-flex>


      <v-flex xs12 sm6 md3>
        <v-text-field
          label="password"
          type="password"
          v-model="singin_password"

        ></v-text-field>
      </v-flex>
      <v-btn color="info" v-on:click="singIn">Sign In</v-btn>
      <v-btn color="info" v-on:click="singIn_Facebook">Facebook</v-btn>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="primary"
          flat
          @click="dialog_singin = false"
        >
          close
        </v-btn>


      </v-card-actions>
    </v-card>
    </v-dialog>
    </div>

    </div>
    </div>


</template>

<script>
  import firebase from 'firebase'
  var firebaseDatabase = firebase.database();

export default ({
  name : 'login',
  data() {
    return {
      singup_email : '',
      singup_password : '',
      singin_email : '',
      singin_password : '',
      dialog_singin: false,
      dialog_singup: false,
    }
  },
  methods: {
       login() {
        alert('Sign Up')
      },
    signUp(){
      firebase.auth().createUserWithEmailAndPassword(this.singup_email, this.singup_password)
        .then(() => alert('회원가입 성공.'))
        .catch(err => console.log(err.message))
    },
    singIn(){
      firebase.auth().signInWithEmailAndPassword(this.singin_email, this.singin_password)
        .then(() => alert('로그인 되었습니다.'))
        .catch(err => alert('누구세요?'))
    },
    singIn_Facebook(){
      var provider = new firebase.auth.FacebookAuthProvider();

      firebase.auth().signInWithPopup(provider).then((result)=>{
        var token = result.credential.accessToken;

        var user = result.user;
        alert('페이스북 로긴 성공')
      }).catch(err => console.log(err.message))
    },
   }
})

</script>