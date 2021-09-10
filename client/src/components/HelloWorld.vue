<template>
  <div class="hello"> 
    <body >
    <div class="app" >


       <el-row  class="formrow" >

         <el-col :span="16" >
           
         </el-col>

        <el-col :span="8" class="firsthalf" >
          <el-card class="box-card" >
           <br/><br/><br/>
          <center>
          <img src="logo.png" class="projectLOGO" /><br />
          <h4 >
            keeping you well
          </h4>
          </center>
          <br />
          <el-form ref="form" :model="form" >
            
            <el-input type="email" round placeholder="Adresse e-mail" v-model="form.email" required style="border-radius: 15px; border: 1px solid #DCDFE6;"></el-input>
            <br /><br /><el-input type="password" show-password=true round v-model="form.password" placeholder="Mot de passe" required style="border-radius: 15px; border: 1px solid #DCDFE6 ;"></el-input>
            <!-- <div class="error" v-html="error" /> -->
            <br /><br /><el-checkbox v-model="form.checked" label="Se souvenir du mot de passe" ></el-checkbox>
            <br /><br /><el-button type="primary" @click="login" style="background-color: #24b4ab;width:100%;" round>S'identifier</el-button>
            <br /><br /><br /><router-link to="forgotpw" class="small">Mot de passe oublié?</router-link>
            <br />
            <p>
              Vous n'avez pas de compte ?
              <router-link to="register">Inscrivez-vous ici.</router-link>
            </p>
            <br/><br/><br/><br/><br/>
          </el-form>
          </el-card>
          
          
        </el-col>
      </el-row>  
    </div>  
       </body>    
  </div>
</template>

<script>
// import router from "../router"
import AuthServices from "@/services/AuthentificationService";
export default {
  data() {
    return {
      champsvides:false,
      form: {
          email: "",
          password: "",
          checked: false
        },

      error:"",
    };
  },
  // the response of the click
  methods: {
    async login() {
      try {
        const response = await AuthServices.login({
          email: this.form.email,
          password: this.form.password,
        });
        alert("welecome")
        console.log(response.data)
        this.$store.dispatch('setToken', response.data.user.token)
        this.$store.dispatch('setUser', response.data.user.id)
        this.$store.dispatch('setRole', response.data.user.role)
        if (this.$store.state.isUserLoggedIn) {
          if (this.$store.state.role === 'MED') {
            this.$router.push('/DOCdashboard')
          } else if (this.$store.state.role === 'ASSIS') {
            this.$router.push('/Assistant')
          } else if (this.$store.state.role === 'ADMIN') {
            this.$router.push('/admin')
          }
        } else {
          this.$router.push('/')
        }
      } catch (error) {
        this.error = error.response.data.error;
        this.loginCheckVide();
        this.loginCheckErr();
        console.log(this.error);
      }
    },
    async loginCheckVide() {
    try {
      this.champsvides=false
          //  this.prescs[i].nom == "" || 
          if (this.form.email == ""||this.form.password == ""){
            console.log("true")
            this.champsvides=true
          }
        if(!this.champsvides){ 
          console.log(this.champsvides) 
          //this.creepdf2()
          //console.log('befire bulk')
        } else {
          this.$notify.error({
            title: "ERREUR",
            dangerouslyUseHTMLString: true,
            message: "<strong>Champ(s) Vide(s)</strong>",
          });
        }
    } catch (error) {
      console.log(`something went wrong zqsdftgyhuj ${error}`);
    }},
    async loginCheckErr() {
    try {
          //  this.prescs[i].nom == "" || 
          if (this.error != "" && !this.champsvides){
            console.log(this.error)
            this.$notify.error({
              title: "ERREUR",
              dangerouslyUseHTMLString: true,
              message: `<strong>${this.error}</strong>`,
            });
            
          }
 
    } catch (error) {
      console.log(`something went wrong zqsdftgyhuj ${error}`);
    }},
   
    
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

/* .error {
  color: red;
} */
a {
  color: #24b4ab;
}
@import url(https://fonts.googleapis.com/css?family=Poppins);
body {
  font-family: "Poppins", sans-serif;
   background-image: url("../../public/image2.jpg");
  background-position:left; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size:cover; /* Resize the background image to cover the entire container */
  
}
.light-blue-gradient {
  background: linear-gradient(120deg, #24b4ab 0%, #c2e9fb 100%);
}
.btn btn-primary {
  color: #24b4ab;
}
.formrow{
  margin: 0;
  height: 100vh;
  background-size: cover;
}
.firsthalf{
  margin:0;
  background-color: white;
  bottom: 0;
}
.projectLOGO{
  width:40% ;
  height:40%;
}
.box-card {
  width: 100%;
  height: 100%;
  border-radius: 15px;
}
</style>