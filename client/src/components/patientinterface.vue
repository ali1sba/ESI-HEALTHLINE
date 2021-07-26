<template>
  <div class="patientinterface">
    <div class="wrapper d-flex align-items-stretch">
      <nav id="sidebar" class="active">
        <div class="logoProject">
          <img src="assets/dashboard/logo.png" class="logo" />
        </div>

        <ul class="list-unstyled components mb-5">
          <li>
            <a href="#"
              ><span class="fa fa-home"></span>
              <p class="nom">Home</p></a
            >
          </li>
          <li>
            <a href="#"
              ><span class="fa fa-user"></span>
              <p class="nom">About</p></a
            >
          </li>
          <li>
            <a href="#"
              ><span class="fa fa-sticky-note"></span>
              <p class="nom">Blog</p></a
            >
          </li>
          <li>
            <a href="#"
              ><span class="fa fa-cogs"></span>
              <p class="nom">Services</p>
            </a>
          </li>
          <li>
            <a href="#"
              ><span class="fa fa-paper-plane"></span>
              <p class="nom">Contacts</p></a
            >
          </li>
        </ul>

        <div class="footer">
          <p>by LINARA IT Solutions</p>
        </div>
      </nav>

      <!-- Page Content  -->
      <div id="content" class="p-4 p-md-5">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <button type="button" id="sidebarCollapse" class="menuicon">
              <img src="assets/dashboard/menu1.png" class="menuicon" />
              <span class="sr-only">Toggle Menu</span>
            </button>
            <h3 class="dashboard">Dashboard</h3>
            <button
              class="btn btn-dark d-inline-block d-lg-none ml-auto"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i class="fa fa-bars"></i>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="nav navbar-nav ml-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="#" id="notifs"
                    ><i class="fas fa-exclamation" />
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#" id="messages"
                    ><i class="fas fa-envelope"></i
                  ></a>
                </li>

                <li class="nav-item" id="button">
                  <a class="nav-link" id="profile">
                    <i class="fas fa-user-circle"></i>
                    Profile
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div id="rest">
          <article class="leaderboard">
            <h5 id="patients">Patients</h5>
            <main class="leaderboard__profiles" id="patientlist">
              <article
                class="leaderboard__profile"
                v-for="patient in patients"
                :key="patient.id"
              >
              
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  class="leaderboard__picture"
                />
                <span class="leaderboard__name" @click="showPatient(patient)">
                    
                  {{ patient.firstName }} {{ patient.lastName }}
                </span>
               
              </article>
            </main>
          </article>
          <div class="dossier">
            <div class="currentpatient">
              <img
                src="https://randomuser.me/api/portraits/men/37.jpg"
                alt="Evan Spiegel"
              />
              <div>
                <span >{{ userselected.firstName }} {{ userselected.lastName }}</span>
                <p>{{ userselected.state }}</p>
              </div>
              <br />
            </div>
            <nav id="menutab">
              <a><i></i>Dossier Médical</a>
              <a><i></i>Décision</a>
              <a><i></i>other</a>
              <a><i></i>moerein </a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      patients: [],
      userselected : {
          "firstName": "none",
          "lastName": "none",
          "birthday": "none",
          "sexe": "none",
          "phoneNum": "none",
          "state":"none",
          "scolarYear": "none",
          "idCompte" : "none" ,
          "createdAt" : "none" ,
          "updatedAt" : "none" 
      },
      error: null,
      email: "",
    };
  },
  mounted: function () {
    axios
      .get("http://localhost:8083/admin/valid/")
      .then((response) => {
        this.patients = response.data;
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    async showPatient(user) {
      console.log(user.email);
      this.userselected = user;
    },
  },
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
