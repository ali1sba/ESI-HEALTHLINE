<template>
  <div class="register">
    <div class="container-fluid">
    <div class="row no-gutters">
      <div class="this col-md-8 px-5 pt-5">

        <form class="needs-validation" novalidate>
          <div class="row g-2">
            <div class="col-sm-12" >
              <img src="logo.png" style="text-align: center; ;margin-bottom: 20px; margin-left: 0;">
            </div>

          </div>
          <div class="row g-3">
            <div class="col-sm-6">
              <input type="text" class="form-control" id="firstName" v-model="firstName" placeholder="first name"  required>
              <div class="invalid-feedback">
                Valid first name is required.
              </div>
            </div>

            <div class="col-sm-6">
              <input type="text" class="form-control" id="lastName" v-model="lastName" placeholder="last name"  required>
              <div class="invalid-feedback">
                Valid last name is required.
              </div>
            </div>
          </div><br>

          <div class="row g-3">
            <div class="col-sm-6">
              <input type="date" class="form-control" id="datenaiss" v-model="date" placeholder="date de naissance"  required>
            </div>

            <div class="col-sm-6">
              <div class="form-group">
                <select class="form-control" v-model="sexe" id="exampleFormControlSelect1">
                  <option >Sexe</option>
                  <option>HOMME</option>
                  <option>FEMME</option>
                  </select></div>
            </div>
          </div>


          <div class="col-sm-12">
            <input type="email" placeholder="e-mail" v-model="email" class="form-control my-3 p-2">
          </div>

          <div class="row g-3">
            <div class="col-sm-6">
              <input type="password" class="form-control" v-model="password" id="password" placeholder="password"  required>
            </div>

            <div class="col-sm-6">
              <input type="password" class="form-control" v-model="password2" id="password2" placeholder="confirm password" required>
            </div>
          </div><br>

          <div class="row g-3">
            <div class="col-sm-6">
              <input type="" class="form-control" id="number" v-model="phoneNum" placeholder="phone number"  required>
           </div>
            

            <div class="col-sm-6">
              <select class="form-control" v-model="stat" @click="student = (stat == 'Etudiant')" id="exampleFormControlSelect2">
                <option>state</option>
                <option>Etudiant</option>
                <option>ATS</option>
                </select></div>

                <div v-if="student" class="col-sm-12">
                  <select class="form-control" v-model="scolarYear" id="exampleFormControlSelect3">
                    <option>Scolar year</option>
                    <option>1CPI</option>
                    <option>2CPI</option>
                    <option>1CS</option>
                    <option>2CS</option>
                    <option>3CS</option>
                    </select>
                </div>
           </div>

          <div class="error" v-html="error"/>
          <br>

          <div class="row g-3">
            <div class="col-sm-4">
              <button type="button" @click="register" class="btn1 mt-3 mb-5" >Sign up</button>
            </div>
            <div class="col-sm-8">
              <p style="padding: 5%; margin-left: 40%;">Already have an account? <router-link to="/">sign in</router-link></p>
            </div>
          </div>
          
        
        </form>
      </div>


      <div class="image col-md-4" style="padding: 0; outline: 1px;">
        <img src="image3.jpg">
      </div>
    </div>
  </div>
    
  </div>
</template>

<script>
 import AuthServices from '@/services/AuthentificationService' 
  export default {
    data () {
      return{
        firstName: '',
        lastName: '',
        date: '',
        sexe: 'Sexe',
        email : '',
        password : '',
        password2 : '',
        phoneNum : '',
        stat: 'state',
        scolarYear: 'Scolar year',
        error: null
      }
    },
    // the response of the click
    methods : {
     async register () {
       try {
        const response = await AuthServices.register({
          firstName: this.firstName,
          lastName: this.lastName,
          date: this.date,
          sexe: this.sexe,
          email : this.email , 
          password : this.password,
          password2 : this.password2,
          phoneNum : this.phoneNum,
          stat: this.stat,
          scolarYear: this.scolarYear
        })
        console.log(response.data)
       } catch (error) {
         this.error = error.response.data.error
         console.log(this.error)
       }
      }
    }
  }

</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  color: red;
}
</style>
