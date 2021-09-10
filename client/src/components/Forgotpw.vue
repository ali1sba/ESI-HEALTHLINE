<template>
  <div class="Resetpw">
  
      <div class="d-flex align-items-center light-blue-gradient" id="lahcenz" style="height: 100vh;">
        <div class="container" id="lahcen" >
            <div class="d-flex justify-content-center" id="lahcen">
                <div class="col-md-7">
                    <div class="card rounded-10 shadow" id="lahcen">
                        <div class="card-body" id="lahcen">
                            <h3>Forget Password</h3>
                            <form>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Email address:</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1"  aria-describedby="emailHelp" v-model="email" placeholder="Enter email">
                                    <small id="emailHelp" class="form-text text-muted">we'll send forget password link on your email.</small>
                                </div>
                                <button type="submit"  class="creatbt"  @click="forgotpw">Forget password</button>
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
     async forgotpw () {
        const response = await AuthServices.forgotpw({
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

@import url(https://fonts.googleapis.com/css?family=Poppins);
body {
  font-family: "Poppins", sans-serif;
}
.light-blue-gradient {
  background: linear-gradient(120deg, #24b4ab 0%, #c2e9fb 100%);
}

.btn btn-primary{
  color: #24b4ab;
}
#lahcen{
  border-radius: 10px;
}
.creatbt:hover {
  color: #24b4ab;
  background-color: white;
}
.creatbt {
  color: white;
  background-color: #24b4ab;
  border-radius: 7px;
}
</style>
