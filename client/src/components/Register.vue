<template>
  <div class="register">

  <!-- code starts here -->
  <!-- first half data form -->
 

  <el-row class="formrow">
  <el-col class="firsthalf" :span="14">
    <div class=" coldiv grid-content bg-purple">
      <!-- first row logo part -->
      <br/>
   <el-row>
     <el-col class="formlogo" :span="6"><img src="logo_version3.png" ></el-col>
   </el-row> 
   <br>
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
     <el-col :span="10"><el-input id="password2" placeholder="confirmez votre mot de passe" v-model="password2" show-password></el-input></el-col>
   </el-row>
   <!-- fifth row password  -->
   <el-row>
    <el-col :span="20"><el-input id="number" v-model="phoneNum" placeholder="numero de telephone"></el-input></el-col> 
   </el-row>
   <el-row>
      <!-- sixth row input  -->
   <el-col style="margin-right:1%" class="m1" :span="7"><el-date-picker id="datenaiss" v-model="birthday" type="date" placeholder="date de naiss"> </el-date-picker></el-col>
   <!-- <el-col  style="margin-right:1%" :span="7"><el-input v-model="birthplace" placeholder="lieu de naissance" ></el-input> </el-col> -->
   <el-col style="margin-right:1.3%" :span="6"><el-select id="exampleFormControlSelect1" v-model="sexe" placeholder="sexe">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" ></el-option>
      </el-select></el-col>
      <el-col  :span="7"><el-select  v-model="state" >
        <el-option  v-for="item in optionstate" :key="item.value" :label="item.label" :value="item.value" ></el-option>
      </el-select></el-col> 
    </el-row>
  <!-- seventh row year  -->
  <el-row>
    <el-col class="m1" :span="6"><el-select v-if="state === 'Etudiant'" v-model="scolarYear" placeholder="Année scolaire">
       <el-option v-for="item in optionyear" :key="item.value" :label="item.label" :value="item.value" ></el-option>
      </el-select>
    </el-col>
    <el-col :span="6"><el-select v-if="state === 'Etudiant'" v-model="group" placeholder="Groupe" >
       <el-option v-for="item in optiongroup" :key="item.value" :label="item.label" :value="item.value" ></el-option>
      </el-select>
    </el-col>
    <div class="error" v-html="error" ></div>
  </el-row>
 <!-- sign up button  -->

  <el-row>
    <el-col :span="10" ><el-button @click="register()" class="savebtnant" style="width:120px;" >s'inscrire</el-button></el-col>
    <el-col :span="10" ><p class="formline"> Vous avez déjà un compte? <router-link style="color:#24b4ab;" to="/">s'identifier </router-link> </p></el-col>
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
      group: "",
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
          value: '2CS-ISI',
          label: '2CS-ISI'
         }, {
          value: '2CS-SIW',
          label: '2CS-SIW'
         }, {
          value: '3CS-ISI',
          label: '3CS-ISI'
         }, {
          value: '3CS-SIW',
          label: '3CS-SIW'
        }],
        optiongroup: [{
          value: 'G1',
          label: 'G1'
        }, {
          value: 'G2',
          label: 'G2'
        }, {
          value: 'G3',
          label: 'G3'
        }, {
          value: 'G4',
          label: 'G4'
        }, {
          value: 'G5',
          label: 'G5'
        }],
        valueyear: ''
    };
  },
  // the response of the click
  methods: {
    async register() {
      try {
        if (this.password === this.password2){
          if (this.state === "ATS"){
            this.scolarYear= "/"
            this.group = "/"
          }
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
          scolarYear: this.scolarYear,
          group: this.group
          
        })
        alert("register successfull")
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
.formelems{
  padding: 0;
  margin:0;
  
}
.el-col{
 margin-top: 2%;
 width: 100%;
}

.firsthalf{
  margin:0;
  background-color: white;
  bottom: 0;
  height: 100%;
}
.formlogo{
 margin-left: 35%;
 width: 100%;
 height: 100%;
}
.formline{
  margin-top: 4%;
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
margin-right: 1%;
padding: 0;
width: fit-content;
}
.savebtnant:hover {
  color: #24b4ab;
  background-color: white;
  border:1px solid #24b4ab;
}
.savebtnant {
  color: white;
  background-color: #24b4ab;
  float: left;
  display:flex;
  border:5px #24b4ab;
  font-size: 20px;
  
}
</style>
