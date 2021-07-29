<template>
  <div class="register">
    <div class="container-fluid formpage">
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
    </div>
  </div>
</template>

<script>
import AuthServices from "@/services/AuthentificationService";
export default {
  data() {
    return {
      student : "ATS",
      firstName: "",
      lastName: "",
      birthday: "",
      sexe: "Sexe",
      email: "",
      password: "",
      password2: "",
      phoneNum: "",
      state: "state",
      scolarYear: "Scolar year",
      error: null,
    };
  },
  // the response of the click
  methods: {
    async register() {
      try {
        if (this.password === this.password2){
          this.error = ''
          const response = await AuthServices.register({
          firstName: this.firstName,
          lastName: this.lastName,
          birthday: this.birthday,
          sexe: this.sexe,
          email: this.email,
          password: this.password,
          password2: this.password2,
          phoneNum: this.phoneNum,
          state: this.state,
          scolarYear: this.scolarYear
          
        })
        alert("regiter sussecfull")
        console.log(response.data)
        } else {
          this.error = 'problem in confirmation of the passeword'
        }
       
        
        
       } catch (error) {
         this.error = error.response.data.error
         console.log(this.error)
       }

     
    },
    async switcher (state){
        this.student = state 
        if (!(this.student === 'Etudiant') ){
          this.scolarYear = '/'
        }
    },
  },
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.error {
  color: red;
}
</style>
