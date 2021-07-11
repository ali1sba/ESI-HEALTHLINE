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
             <div class="row no-gutter">
              <div class="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
              <div class="col-md-8 col-lg-6">
                <div class="login d-flex align-items-center py-5">
                  <div class="container">
                    <div class="row">
                      <div class="col-md-9 col-lg-8 mx-auto">
                        <img class='logoimage' src="logo.png"><br>
                        <h3 style="font-size: large; padding-left:28%;">keeping you well</h3><br>
                        <form>
                          <div class="form-label-group">
                            <input type="email" id="inputEmail" class="form-control" placeholder="Email address" v-model="email" required autofocus>
                            <label for="inputEmail">Adresse e-mail</label>
                          </div>
          
                          <div class="form-label-group">
                            <input type="password" id="inputPassword" class="form-control" placeholder="Password" v-model="password" required>
                            <label for="inputPassword">Mot de passe</label>
                          </div>
          
                          <div class="custom-control custom-checkbox mb-3">
                            <input type="checkbox" class="custom-control-input" id="customCheck1">
                            <label class="custom-control-label" for="customCheck1">Se souvenir du mot de passe</label>
                          </div>
                          <button  @click="login" class="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2" type="submit" style=" background-color: #24b4ab;"
                          >S'identifier</button>
                          <div class="text-center">
                            <a class="small" href="http://192.168.1.3:8081/#/resetpw">Mot de passe oublié?</a>
                            <p >Vous n'avez pas de compte ? <a href="http://192.168.1.3:8081/#/register">Inscrivez-vous ici.</a></p>
                        </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
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
          alert(JSON.stringify(response.data, null, 4));  
      }
    }
  }


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
