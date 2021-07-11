<template>
  <div class="register">
    <div class="container-fluid formpage">
    <div class="row no-gutters">
      <div class="this col-md-8 px-5 ">

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
                  <option>Male</option>
                  <option>Femele</option>
                  </select></div>
            </div>
          </div>


          <div class="col-sm-12">
            <input type="email" placeholder="e-mail" v-model="email" class="form-control my-3 p-2">
          </div>

          <div class="row g-3">
            <div class="col-sm-6">
              <input type="password" class="form-control" v-model="password" id="password" placeholder="Mot de passe"  required>
            </div>

            <div class="col-sm-6">
              <input type="password" class="form-control" v-model="password2" id="password" placeholder="Confirmer mot de passe" required>
            </div>
          </div><br>

          <div class="row g-3">
            <div class="col-sm-6">
              <input type="" class="form-control" id="number" v-model="phoneNum" placeholder="Numéro de telephone"  required>
           </div>
            

            <div class="col-sm-6">
              <select class="form-control" v-model="stat" id="exampleFormControlSelect1">
                <option>état</option>
                <option>étudiant</option>
                <option>ouvrier</option>
                </select></div>

                <div class="col-sm-12">
                  <select class="form-control" v-model="scolarYear" id="exampleFormControlSelect1">
                    <option>année scolaire</option>
                    <option>1CPI</option>
                    <option>2CPI</option>
                    <option>1CS</option>
                    <option>2CS</option>
                    <option>3CS</option>
                    </select>
                </div>
           </div>

          <div class="row g-3">
            <div class="col-sm-4">
              <button type="button" @click="register" class="btn1 mt-3 mb-5" >S'inscrire</button>
            </div>
            <div class="col-sm-8">
              <p style="padding-top: 6%;">Vous avez déjà un compte? <a href="#">s'identifier</a></p>
            </div>
          </div>
          
        
        </form>
      </div>


      <div class="imageform col-md-4" >

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
        scolarYear: 'Scolar year'
      }
    },
    // the response of the click
    methods : {
     async register () {
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
          alert(JSON.stringify(response.data, null, 4));  
      }
    }
  }

</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>



</style>
