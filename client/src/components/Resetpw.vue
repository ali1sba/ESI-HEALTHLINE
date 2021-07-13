<template>
  <div class="Resetpw">
  
      <div class="d-flex align-items-center light-blue-gradient" style="height: 100vh;">
        <div class="container" >
            <div class="d-flex justify-content-center">
                <div class="col-md-7">
                    <div class="card rounded-0 shadow">
                        <div class="card-body">
                            <h3>Forget Password</h3>
                            <form>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Email address:</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1"  aria-describedby="emailHelp" v-model="email" placeholder="Enter email">
                                    <small id="emailHelp" class="form-text text-muted">we'll send forget password link on your email.</small>
                                </div>
                                <button type="submit"  class="btn btn-primary"  @click="resetpw">Forget password</button>
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
        email : ''
      }
    },
    // the response of the click
    methods : {
     async resetpw () {
        const response = await AuthServices.resetpw({
          email : this.email 
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
