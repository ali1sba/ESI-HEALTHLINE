<template>
  <div class="admin">
    <header role="bannerAdmin">
      <h1>Admin Panel</h1>
    </header>
    <nav role="navigationAdmin">
      <ul class="mainAdmin">
        <div id="dashboard_btn" @click="section = 1">
          <li class="dashboardAdmin"><a href="#/admin">Section 1</a></li>
        </div>
        <div id="edit_btn" @click="section = 2">
          <li class="editAdmin"><a href="#/admin">Section 2</a></li>
        </div>
        <div id="message_btn" @click="section = 3">
          <li class="AddNewAdmin"><a href="#/admin">Section 3</a></li>
        </div>
      </ul>
    </nav>

    <main role="mainAdmin">
      <section v-if="section === 1" id="section1">
        <section class="PanelAdmin">
          <h2>Les comptes a validée</h2>
          <ul>
            <li>
              Ici se retrouve tout les comptes qui attend toujours la validation
              de l'admin
            </li>
          </ul>
        </section>

        <section class="PanelAdmin">
          <h2>Les Comptes</h2>
          <div id="app">
            <table class="responsive-table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Nom</th>
                  <th scope="col">Email</th>
                  <th scope="col">sexe</th>

                  <th scope="col">Num telephone</th>
                  <th scope="col">statu</th>
                  <th scope="col">années scolaire</th>
                </tr>
              </thead>

              <tbody>
                <tr v-for="(user, index) in users" :key="user.id">
                  <th scope="row">{{ index + 1 }}</th>
                  <td>{{ user.firstName }} {{ user.lastName }}</td>
                  <td id="Email">{{ user.email }}</td>
                  <td>{{ user.sexe }}</td>

                  <td>{{ user.phoneNum }}</td>
                  <td>{{ user.state }}</td>
                  <td>{{ user.scolarYear }}</td>
                  <td>
                    <input
                      type="button"
                      ref="myRef"
                      value="Valider"
                      class="ValiderBtn"
                      @click="validateUser(index, user)"
                    />
                  </td>
                  <td>
                    <input
                      type="button"
                      value="Supprimer"
                      class="SupprimerBtn"
                      @click="deleteUser(index,user)"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </section>

      <section v-if="section === 2" id="section2">
        <section class="PanelAdmin">
          <h2>Tout les comptes dans le site</h2>
          <ul>
            <li>Ici se retrouve tout les comptes qui sont deja validée</li>
          </ul>
        </section>
        <section class="PanelAdmin">
          <h2>Les Comptes</h2>
          <div id="app2">
            <table class="responsive-table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Nom</th>
                  <th scope="col">Email</th>
                  <th scope="col">sexe</th>

                  <th scope="col">Num telephone</th>
                  <th scope="col">statu</th>
                  <th scope="col">années scolaire</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(user, index) in usersvalid" :key="user.id">
                  <th scope="row">{{ index + 1 }}</th>
                  <td>{{ user.firstName }} {{ user.lastName }}</td>
                  <td id="Email">{{ user.email }}</td>
                  <td>{{ user.sexe }}</td>

                  <td>{{ user.phoneNum }}</td>
                  <td>{{ user.stat }}</td>
                  <td>{{ user.scolarYear }}</td>
                  <td>
                    <input
                      type="button"
                      value="disactiver"
                      class="SupprimerBtn"
                      @click="desactivateUser(user)"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </section>
    </main>
  </div>
</template>

<script>
import axios from "axios";
import adminservice from "../services/adminservice";
export default {
  data() {
    return {
      users: [],
      usersvalid: [],
      error: null,
      email: "",
    };
  },
  mounted: function () {
    axios
      .get("http://localhost:8083/admin/novalid/")
      .then((response) => {
        this.users = response.data;
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .get("http://localhost:8083/admin/valid/")
      .then((response) => {
        this.usersvalid = response.data;
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    async validateUser(index, user) {
      console.log(user.email);
      const response = await adminservice.validateUser({
        email: user.email
      });
      // alert("activation sussecfull");
      console.log(response.data);   
      this.users.splice(index, 1);
    },

    async deleteUser(index, user) {
      console.log(user.email);
      try {
        const response = await adminservice.deleteUser({
          email: user.email
        });
        alert("delete sussecfull");
        console.log(response.data);
      } catch (error) {
        this.error = error.response.data.error;
        console.log(this.error);
      }
      this.users.splice(index, 1);
    },

    async desactivateUser(user) {
      console.log(user.email);

      try {
        const response = await adminservice.desactivateUser({
          email: user.email,
        });
        alert("desactivation sussecfull");
        console.log(response.data);
      } catch (error) {
        this.error = error.response.data.error;
        console.log(this.error);
      }

    },
  },
};
</script>



<style scoped>
</style>
