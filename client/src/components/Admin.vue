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
              
               <div id="table1">
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">City</th>
                  </tr>
                </thead>
                <tbody>
                 
                </tbody>
                 
              </table>
            </div>
             
                
          </section>
        </section>


        <section v-if="section === 2"  id="section2">
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


</script>



<style scoped>
</style>
