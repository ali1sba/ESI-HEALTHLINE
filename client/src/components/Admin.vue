<template>
  <div class="admin">
  
     <header role="banner">
        <h1>Admin Panel</h1>
        <ul class="utilities">
          <br>
          <li class="users"><a href="#">My Account</a></li>
        </ul>
      </header>
      <nav role='navigation' id='navg'>
        <ul class="main">
          <div id="dashboard_btn" @click="section = 1"> <li class="dashboard"><a href="#/admin">Section 1</a></li> </div>
          <div id="edit_btn" @click="section = 2"><li class="edit"><a href="#/admin">Section 2</a></li> </div> 

        </ul>
      </nav>
      
      <main role="main">
        <section v-if="section === 1" id="section1">
          <section class="panel important">
            <h2>Les comptes a validée</h2>
            <ul>
              <li>Ici se retrouve tout les comptes qui attend toujours la validation de l'admin</li>
            </ul>
          </section>
          
          <section class="panel important">
            <h2>Les Comptes</h2>
              
               <br> <br> <br> <br> <br> <br> <br> <br> <br> <br>  <br> <br> <br> <br> <br> <br>  <br> <br> <br>
                
              
          </section>
        </section>


        <section v-else  id="section2">
          <section  class="panel important">
            <h2>Tout les comptes dans le site</h2>
            <ul>
              <li>Ici se retrouve tout les comptes qui sont deja validée</li>
            </ul>
          </section>
          
          <section class="panel important">
            <h2>Les Comptes</h2>
              
               <br> <br> <br> <br> <br> <br> <br> <br> <br> <br>  <br> <br> <br> <br> <br> <br>  <br> <br> <br>
                
              
          </section>
        </section>

        
        
      
      </main>

     
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
    }}

</script>



<style scoped>

</style>
