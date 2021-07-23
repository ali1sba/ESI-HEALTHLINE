<template>
  <div class="ResetpwToken">
  
      <div class="d-flex align-items-center light-blue-gradient" style="height: 100vh;">
        <div class="container" >
            <div class="d-flex justify-content-center">
                <div class="col-md-7">
                    <div class="card rounded-0 shadow">
                        <div class="card-body">
                            <h3>Reset Password</h3>
                            <form>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Password:</label>
                                    <input type="password" class="form-control" id="resetPassword" v-model="password" placeholder="Enter the new password">
                                    <br>
                                    <input type="password" class="form-control" id="resetPassword" v-model="password2" placeholder="Confirm the new password">
                                </div>
                                <div class="error" v-html="error" ></div>
                                <br/>
                                <button type="submit"  class="btn btn-primary"  @click="resetpw">Submit new password</button>
                            </form>
                        </div>
                    </div>
                </div>
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
        password : ''
      }
    },
    // the response of the click
    methods : {
     async resetpw () {
        try {
          if (this.password === this.password2){
            const response = await AuthServices.resetpw({
                password : this.password,
                id: this.$route.params.ResetPasswordToken
            })
            console.log(response.data)
            alert(JSON.stringify(response.data, null, 4))
          } else {
            this.error = 'problem in confirmation of the passeword'
          }
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


</style>
