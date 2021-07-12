<template>
  <div class="hello">
    <!--
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>-->


    <body>
    <div class="app">
         <div class="container-fluid">
             <div class="row no-gutters">
              <div class="image col-lg-8" style="padding: 0;">
                  <img src="image2.jpg" class="img-fluid">
              </div>
              <div class=" this col-lg-4 px-5 pt-5">
                  <img src="logo.png"><br>
                  <h4>keeping you well</h4><br>
                  <form>
                      <div class="form-row">
                          <div class="col-lg-10" style="margin-left:7%;">
                              <input type="email" 
                                    placeholder="Email Address" 
                                    v-model="email"
                                    class="form-control my-3 p-2" >
                          </div>
                      </div>
                      <div class="form-row">
                        <div class="col-lg-10" style="margin-left:7%;">
                            <input type="password" 
                                  placeholder="********" 
                                  v-model="password"
                                  class="form-control my-3 p-2">
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="col-lg-10" style="margin-left:7%;">
                            <button type="button" 
                                    @click="login"
                                    class="btn1 mt-3 mb-5">Login</button>
                        </div>
                    </div>
                    <a href="http://192.168.1.3:8081/#/resetpw">Forgot password?</a>
                    <p >Don't have an account? <a href="http://localhost:8081/#/register">Register here.</a></p>
                  </form>
              </div>
             </div>
         </div>
        </div>

    
  </body>
  </div>
</template>

<script>
  import AuthServices from '@/services/AuthentificationService' 
  export default {
    data () {
      return{
        email : '',
        password : ''
      }
    },
    // the response of the click
    methods : {
     async login () {
        const response = await AuthServices.login({
          email : this.email , 
          password : this.password
        })
          console.log(response.data)
      }
    }
  }


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
