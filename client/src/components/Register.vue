<template>
  <div class="register">
    <!-- <div class="container-fluid formpage">
      <div class="row formrow no-gutters">
        <div class="thisform col-md-8 px-5 " >
          <form class="needs-validation" novalidate>
            <div class="row formrow g-2">
              <div class="col-sm-12">
                <img
                  src="logo.png"
                  style="
                    text-align: center;
                    margin-bottom: 20px;
                    margin-left: 0;
                  "
                />
              </div>
            </div>
            <div class="row formrowm g-3">
              <div class="col-sm-6">
                <input
                  type="text"
                  class="form-control"
                  id="firstName"
                  v-model="firstName"
                  placeholder="first name"
                  required
                />
                <div class="invalid-feedback">
                  Valid first name is required.
                </div>
              </div>

              <div class="col-sm-6">
                <input
                  type="text"
                  class="form-control"
                  id="lastName"
                  v-model="lastName"
                  placeholder="last name"
                  required
                />
                <div class="invalid-feedback">Valid last name is required.</div>
              </div>
            </div>
            <br />

            <div class="row formrow g-3">
              <div class="col-sm-6">
                <input
                  type="date"
                  class="form-control"
                  id="datenaiss"
                  v-model="birthday"
                  placeholder="date de naissance"
                  required
                />
              </div>

              <div class="col-sm-6">
                <div class="form-group">
                  <select
                    class="form-control"
                    v-model="sexe"
                    id="exampleFormControlSelect1"
                  >
                    <option>Sexe</option>
                    <option>HOMME</option>
                    <option>FEMME</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="col-sm-12">
              <input
                type="email"
                placeholder="e-mail"
                v-model="email"
                class="form-control my-3 p-2"
              />
            </div>

            <div class="row formrow g-3">
              <div class="col-sm-6">
                <input
                  type="password"
                  class="form-control"
                  v-model="password"
                  id="password"
                  placeholder="password"
                  required
                />
              </div>

              <div class="col-sm-6">
                <input
                  type="password"
                  class="form-control"
                  v-model="password2"
                  id="password2"
                  placeholder="confirm password"
                  required
                />
              </div>
            </div>
            <br />

            <div class="row formrow g-3">
              <div class="col-sm-6">
                <input
                  type=""
                  class="form-control"
                  id="number"
                  v-model="phoneNum"
                  placeholder="phone number"
                  required
                />
              </div>

              <div class="col-sm-6">
                <select
                  class="form-control"
                  v-model="state"
                  @click="switcher(state)"
                  id="exampleFormControlSelect2"
                >
                  <option>state</option>
                  <option>Etudiant</option>
                  <option>ATS</option>
                </select>
              </div>

              <div v-if="student === 'Etudiant'" class="col-sm-12">
                <select
                  class="form-control"
                  v-model="scolarYear"
                  id="exampleFormControlSelect3"
                >
                  <option>Scolar year</option>
                  <option>1CPI</option>
                  <option>2CPI</option>
                  <option>1CS</option>
                  <option>2CS</option>
                  <option>3CS</option>
                </select>
              </div>
            </div>

            <div class="error" v-html="error" ></div>
            <br/>
            
            <div class="row formrow g-3">
              <div class="col-sm-4">
                <button type="button" @click="register" class="btnform mt-3 mb-5">
                  S'inscrire
                </button>
              </div>
              <div class="col-sm-8">
                <p style="padding-top: 6%">
                  Vous avez déjà un compte? <router-link to="/">s'identifier . </router-link>
                </p>
              </div>
            </div>
          </form>
        </div>

        <div class="imageform col-md-4"></div>
      </div>
    </div> -->
  <!-- code starts here -->
  <!-- first half data form -->
 

  <el-row class="formrow">
  <el-col class="firsthalf" :span="14">
    <div class=" coldiv grid-content bg-purple">
      <!-- first row logo part -->
      <br/>
   <el-row>
     <el-col class="formlogo" :span="8"><img src="logo.png" ></el-col>
   </el-row> 
    <br/><br/>
   <div class="formelems">
   <!-- second row name  -->
   <el-row> 
   <el-col class="m1" :span="10"><el-input v-model="lastName" placeholder="nom" required></el-input><div class="invalid-feedback">  Valid last name is required. </div></el-col> 
   <el-col :span="10"><el-input v-model="firstName" placeholder="prenom" required></el-input><div class="invalid-feedback">  Valid first name is required. </div></el-col>  
   </el-row> 
   <!-- third row input --> 
   <el-row>
     <el-col :span="20"><el-input v-model="email" placeholder="email"></el-input></el-col> 
   </el-row>
   <!-- forth row input  -->
   <el-row>
     <el-col class="m1" :span="10"><el-input id="password" placeholder="mot de passe" v-model="password" show-password></el-input></el-col>
     <el-col :span="10"><el-input id="password2" placeholder="confirmer votre mot de passe" v-model="password2" show-password></el-input></el-col>
   </el-row>
   <!-- fifth row password  -->
   <el-row>
    <el-col :span="20"><el-input id="number" v-model="phoneNum" placeholder="numero de telephone"></el-input></el-col> 
   </el-row>
   <el-row>
      <!-- sixth row input  -->
   <el-col :span="7"><el-date-picker id="datenaiss" v-model="birthday" type="date" placeholder="date de naiss"> </el-date-picker></el-col>
   <!-- <el-col  style="margin-right:1%" :span="7"><el-input v-model="birthplace" placeholder="lieu de naissance" ></el-input> </el-col> -->
   <el-col  :span="7"><el-select id="exampleFormControlSelect1" v-model="sexe" placeholder="sexe">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" ></el-option>
      </el-select></el-col>
      <el-col  style="margin-right:1%" :span="6"><el-select  v-model="state" >
        <el-option  v-for="item in optionstate" :key="item.value" :label="item.label" :value="item.value" ></el-option>
      </el-select></el-col> 
    </el-row>
  <!-- seventh row year  -->
  <el-row>
    <el-col :span="6"><el-select v-if="state === 'Etudiant'" v-model="scolarYear" >
       <el-option v-for="item in optionyear" :key="item.value" :label="item.label" :value="item.value" ></el-option>
      </el-select></el-col>
    <div class="error" v-html="error" ></div>
  </el-row>
 <!-- sign up button  -->
  <el-row>
    <el-col :span="4"><el-button @click="register" type="primary" plain>s'inscrire</el-button></el-col>
    <el-col class="formline" :span="7"><p> Vous avez déjà un compte? <router-link to="/">s'identifier </router-link> </p></el-col>
  </el-row>
   </div>
  </div>
  </el-col>
 <!-- second half image  -->
  </el-row>
  <!-- styling goes here -->
  </div>  
</template>

<script>
// here starts script of element
import AuthServices from "@/services/AuthentificationService";
export default {
  data() {
    return {
      student : "ATS",
      firstName: "",
      lastName: "",
      birthday: "",
      // birthplace: "",
      sexe: "Sexe",
      email: "",
      password: "",
      password2: "",
      phoneNum: "",
      state: "etat",
      scolarYear: "",
      error: null,
       options: [{
          value: 'FEMME',
          label: 'FEMME'
        }, {
          value: 'HOMME',
          label: 'HOMME'
        }],
        value: '',
        optionstate: [{
          value: 'ATS',
          label: 'ATS'
        }, {
          value: 'Etudiant',
          label: 'Etudiant'
        }],
        valuestate: '',
        optionyear: [{
          value: '1CPI',
          label: '1CPI'
        }, {
          value: '2CPI',
          label: '2CPI'
         }, {
          value: '1CS',
          label: '1CS'
          }, {
          value: '2CS',
          label: '2CS'
          }, {
          value: '3CS',
          label: '3CS'
        }],
        valueyear: ''
    };
  },
  // the response of the click
  methods: {
    async register() {
      try {
        if (this.password === this.password2){
          if (this.state === "ATS"){this.scolarYear= "/"}
          this.error = ''
          const response = await AuthServices.register({
          firstName: this.firstName,
          lastName: this.lastName,
          birthday: this.birthday,
          // birthplace: this.birthplace,
          sexe: this.sexe,
          email: this.email,
          password: this.password,
          password2: this.password2,
          phoneNum: this.phoneNum,
          state: this.state,
          scolarYear: this.scolarYear
          
        })
        alert("regiter successfull")
        console.log(response.data)
        } else {
          this.error = 'problem in confirmation of the password'
        }
       
        
        
       } catch (error) {
         this.error = error.response.data.error
         console.log(this.error)
       }

     
    },
   
   
  },
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
.register{
  background-image: url("image4.jpg");
    background-size: cover;  
}
.imageform{
  opacity: 0;
}
.error {
  color: red;
}
body{
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}

.el-col{
 margin-top: 2%;
 width: 100%;
}

.firsthalf{
  margin:0;
  background-color: white;
  bottom: 0;
}
.formlogo{
 margin-left: 35%;
 
}

.formline{
  margin-left: 40%;
}
.coldiv{
  padding: 2% 0 2% 12% ;
}
.formrow{
  margin: 0;
  height: 100vh;
  background-size: cover;
}
.register{
  height: 100vh;
}
.m1{
margin-right: 0.3%;
padding: 0;
}

</style>
