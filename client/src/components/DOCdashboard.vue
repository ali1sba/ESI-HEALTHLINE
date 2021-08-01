<template>
  <div class="DOCdashboard">
    <div class="wrapper d-flex align-items-stretch">
      <nav id="sidebar" class="active">
        <div class="logoProject">
          <img src="assets/dashboard/logo.png" class="logo" />
        </div>

        <ul class="list-unstyled components mb-5">
          <li>
            <a>
              <span class="fa fa-home" @click="content = 'dashboard'"></span>
              <p class="nom">Home</p></a
            >
          </li>
          <li>
            <a>
              <span class="fa fa-user" @click="content = 'dossier'"></span>
              <p class="nom">About</p></a
            >
          </li>
          <li>
            <a
              ><span class="fa fa-sticky-note" @click="content = '3'"></span>
              <p class="nom">Blog</p></a
            >
          </li>
          <li>
            <a
              ><span class="fa fa-cogs" @click="content = '4'"></span>
              <p class="nom">Services</p>
            </a>
          </li>
          <li>
            <a
              ><span class="fa fa-paper-plane" @click="content = '5'"></span>
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
                  {{ patient.lastName }}</span
                >
              </article>
            </main>
          </article>

          <!-- ********************** home ***************************** -->

          <div v-show="content === 'dashboard'" class="dossier">
            <div class="doctor">
              <img src="assets/dashboard/doctorr.png" />
              <div>
                <h1>BIENVENUE Dr.Merabet</h1>
                <h3>Passez une belle journée</h3>
              </div>
            </div>
            <div>
              <svg class="Rectangle1">
                <rect
                  id="Rectangle1"
                  rx="29"
                  ry="29"
                  x="0"
                  y="0"
                  width="109"
                  height="140"
                ></rect>
              </svg>
              <svg class="Rectangle2">
                <rect
                  id="Rectangle2"
                  rx="29"
                  ry="29"
                  x="0"
                  y="0"
                  width="109"
                  height="140"
                ></rect>
              </svg>
              <svg class="Rectangle3">
                <rect
                  id="Rectangle3"
                  rx="29"
                  ry="29"
                  x="0"
                  y="0"
                  width="109"
                  height="140"
                ></rect>
              </svg>
              <svg class="Rectangle4">
                <rect
                  id="Rectangle4"
                  rx="29"
                  ry="29"
                  x="0"
                  y="0"
                  width="109"
                  height="140"
                ></rect>
              </svg>
            </div>
            <div>
              <button>+ ajouter RDV</button>
            </div>
          </div>

          <!-- ********************** dossier ***************************** -->

          <div v-show="content === 'dossier'" class="dossier">
            <div class="currentpatient">
              <img
                src="https://randomuser.me/api/portraits/men/37.jpg"
                alt="Evan Spiegel"
              />
              <div>
                <span
                  >{{ userselected.firstName }}
                  {{ userselected.lastName }}</span
                >
                <p>{{ userselected.state }}</p>
              </div>
              <br />
            </div>
            <center>
              <div>
                <el-radio-group v-model="radio1">
                  <el-radio-button label="Dossier Médical"></el-radio-button>
                  <el-radio-button label="Examen Médical"></el-radio-button>
                  <el-radio-button label="Statistique"></el-radio-button>
                  <el-radio-button label="RDV"></el-radio-button>
                </el-radio-group>
              </div>
            </center>
            <br />
            <el-scrollbar height="400px">
              <button
                @click="createMF(userselected)"
                class="btn btn-primary btn-block font-weight-bold mb-2"
                style="background-color: #24b4ab"
              >
                Créer le dossier médical
              </button>

              <!-- **********************mehdi********************** -->

              <el-card class="box-card" id="information-personnelles">
                <h6>nformations personnelles</h6>
                <div class="text item">
                  <!-- TODO -->
                </div>
              </el-card>
              <!-- **********************nour********************** -->
              <el-card class="box-card" id="Informations-Biométriques">
                <h6>Informations Biométriques</h6>
                <div class="text item">
                  <!-- TODO -->
                </div>
              </el-card>
              <!-- **********************ilhem********************** -->
              <el-card class="box-card" id="Antécédents">
                <h6>Antécédents</h6>
                <div class="text item">
                  <el-row>
                    <el-col  class="intox" :span="20">
                      <h5>INTOXICATIONS : </h5>
                      <h6>Tabacs</h6> 
                     
                        <el-row> 
                                <el-col :span="3">A fumer </el-col>
                                <el-col :span="3"><el-radio v-model="radioFumer" label="1">Oui</el-radio></el-col>
                                <el-col :span="3"><el-radio v-model="radioFumer" label="2">Non</el-radio></el-col>
                                <el-col :span="15"> <el-space wrap :size="4">Nombre cigarettes /j<el-input-number v-model="nbrFumer" controls-position="right" :disabled="true" @change="handleChange" :min="1" :max="20"></el-input-number></el-space></el-col>
                        </el-row>  
                        <el-row>      
                      <el-col :span="3">A chiquer</el-col> 
                      <el-col :span="3"><el-radio v-model="radioChiquer" label="1">Oui</el-radio></el-col>
                      <el-col :span="3"> <el-radio v-model="radioChiquer" label="2">Non</el-radio></el-col>
                      <el-col :span="15"> <el-space wrap :size="4">Nombre de boites /j<el-input-number v-model="nbrChiquer" controls-position="right" :disabled="true" @change="handleChange" :min="1" :max="20"></el-input-number></el-space></el-col>
                        </el-row>
                       <el-row>
                       <el-col :span="3">A prise</el-col> 
                       <el-col :span="3"><el-radio v-model="radioPrise" label="1">Oui</el-radio></el-col>
                       <el-col :span="3"> <el-radio v-model="radioPrise" label="2">Non</el-radio></el-col>
                       <el-col :span="15"> <el-space wrap :size="4">Nombre de boites /j<el-input-number v-model="nbrPrise" controls-position="right" :disabled="true" @change="handleChange" :min="1" :max="20"></el-input-number></el-space></el-col>
                       </el-row>
                    
                     <el-row >
                     <h6>Alcool              
                     <el-space wrap :size="10"><el-input placeholder="" v-model="alcool"></el-input></el-space>
                    </h6>  
                    <h6>Medicaments
                     <el-space wrap :size="10"><el-input placeholder="" v-model="medicat"></el-input></el-space>
                    </h6>  </el-row>
                    <h6>Autres
                   <el-space wrap :size="10"><el-input placeholder="" v-model="autres"></el-input></el-space>
                    </h6>
                    </el-col>
                  </el-row>
                  <el-row>
                    <el-col :span="20">
                       <h5>ANTECEDENTS MEDICO /CHIRUGICAUX : </h5>
                        <h6>Affections congenitales</h6><el-input v-model="affec"  type="textarea" autosize placeholder=".."></el-input>
                        <h6>Maladies generalees</h6><el-input v-model="malaGene"  type="textarea" autosize placeholder=".."></el-input>
                        <h6>Intervention chirurgicales</h6><el-input v-model="intChiru"  type="textarea" autosize placeholder=".."></el-input>
                        <h6>Reactions allergiques au medicaments</h6><el-input v-model="reactMed"  type="textarea" autosize placeholder=".."></el-input>
                    </el-col>
                  </el-row>
                </div>
              </el-card>
              <!-- **********************ali********************** -->
              <el-card class="box-card" id="Dépistage">
                <h6>Dépistage</h6>
                <div class="text item">
                  
                  <el-space direction="vertical">
                    <el-row>
                      <el-col :span="24">
                    <el-space wrap :size="10">
                      visite médical
                      <el-select v-model="typeDeVisite" placeholder="Select">
                        <el-option
                          v-for="item in options1"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value"
                        >
                        </el-option>
                      </el-select>
                      Date
                      <el-date-picker
                        v-model="DépistageDate1"
                        type="date"
                        placeholder="Choississez un jour"
                        :disabled-date="disabledDate"
                        :shortcuts="shortcuts"
                      >
                      </el-date-picker>
                      Docteur
                      <el-input
                        placeholder="Entrez quelque chose"
                        v-model="docteurName"
                      ></el-input>
                    </el-space>
                    </el-col >
                    </el-row>
                    <el-row>
                      <el-col :span="24">
                    <el-space wrap :size="50">
                     <el-space wrap :size="10"> Poids <el-input placeholder="KG" v-model="poids"></el-input></el-space>
                      <el-space wrap :size="10">Taille <el-input placeholder="Mètre" v-model="taille"></el-input></el-space>
                    </el-space>
                    </el-col>
                    </el-row>
                    <el-divider></el-divider>

                     <el-collapse v-model="activeNames" @change="handleChange">
                      <el-collapse-item title="Audition" name="1">
                        <el-space wrap :size="10"> OD <el-input placeholder="/10" v-model="auditionOD"></el-input></el-space>
                        <el-space wrap :size="10">OG <el-input placeholder="/10" v-model="auditionOG"></el-input></el-space>
                      </el-collapse-item>
                      <el-collapse-item title="Acuite Visuelle" name="2">
                        <el-space orientation="vertical">
                        <el-space wrap :size="10"> OD <el-input placeholder="/10" v-model="AcuiteVisuelleSansCOD"></el-input></el-space>
                        <el-space wrap :size="10">OG <el-input placeholder="/10" v-model="AcuiteVisuelleSansCOG"></el-input></el-space>
                        SANS CORRECTIONS
                        </el-space>
                        <el-space orientation="vertical">
                        <el-space wrap :size="10"> OD <el-input placeholder="/10" v-model="AcuiteVisuelleAvecCOD"></el-input></el-space>
                        <el-space wrap :size="10">OG <el-input placeholder="/10" v-model="AcuiteVisuelleAvecCOG"></el-input></el-space>
                        AVEC CORRECTIONS
                        </el-space>
                      </el-collapse-item>
                      <el-collapse-item title="Efficacité" name="3">
                        peau et muqueu
                      </el-collapse-item>
  <el-collapse-item title="Controllabilité" name="4">
    <div>Prise de décision: possibilité de donner des conseils sur les opérations, mais ne jamais prendre de décisions à la place des utilisateurs;</div>
    <div>Contrôle des conséquences: les utilisateurs devraient pouvoir contrôler l'exécution de leurs opérations, y compris l'annulation et la suppression des opérations courantes.</div>
  </el-collapse-item>
</el-collapse>

                    <el-space></el-space>
                    <el-space></el-space>
                    <el-space></el-space>
                    <el-space></el-space>
                    <el-space></el-space>
                    <el-space></el-space>
                  </el-space>

                  <!-- TODO -->
                </div>
              </el-card>

              <center>
                © Designed and Developed by linara it solutions 2021
              </center>
            </el-scrollbar>
          </div>

          <!-- ********************** 3 ***************************** -->

          <div v-show="content === '3'" class="dossier">
            <div class="doctor">3</div>
          </div>
          <!-- ********************** 4 ***************************** -->

          <div v-show="content === '4'" class="dossier">
            <div class="doctor">4</div>
          </div>
          <!-- ********************** 5 ***************************** -->

          <div v-show="content === '5'" class="dossier">
            <div class="doctor">
              <br /><br /><br />
              5
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import DocServices from "@/services/DocServices.js";
export default {
  data() {
    return {
      //************************************************************************************************************
      patients: [],
      content: "dashboard",
      userselected: {
        firstName: "none",
        lastName: "none",
        birthday: "none",
        sexe: "none",
        phoneNum: "none",
        state: "none",
        scolarYear: "none",
        idCompte: "none",
        createdAt: "none",
        updatedAt: "none",
      },
      // err
      error: null,
      email: "",
      // navigation bar*******************************************************************************************
      radio1: "",

      //the data for Dépistage section****************************************************************************

      // the first selection typeDeVisite
      options1: [
        {
          value: "admission",
          label: "admission",
        },
        {
          value: "Systimatique",
          label: "Systimatique",
        },
      ],
      typeDeVisite: "",

      docteurName: "Merabet ",
      poids: "0",
      taille : "0",

      // date
      disabledDate(time) {
        return time.getTime() > Date.now();
      },
      shortcuts: [
        {
          text: "Today",
          value: new Date(),
        },
        {
          text: "Yesterday",
          value: () => {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24);
            return date;
          },
        },
        {
          text: "A week ago",
          value: () => {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
            return date;
          },
        },
      ],
      DépistageDate1: "",

      //variable de taitement des defferantes sections 
      activeNames: ['1'],

      handleChange(val) {
        console.log(val);
      },
      auditionOD:"",
      auditionOG:"",
      AcuiteVisuelleSansCOD:"",
      AcuiteVisuelleSansCOG:"",
      AcuiteVisuelleAvecCOD:"",
      AcuiteVisuelleAvecCOG:"",
    //  antecendents
    radioFumer:'2',
    radioChiquer:'2',
    radioPrise:'2',
    nbrFumer:"",
    nbrChiquer:"",
    nbrPrise:"",
    alcool:"",
    medicat:"",
    autres:"none",
    affec:"none",
    malaGene:"",
    intChiru:"",
    reactMed:"",
    };
  },
  mounted: function() {
    axios
      .get("http://localhost:8083/doc/patients")
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
      this.content = "dossier";
      this.userselected = user;
    },

    async createMF(user) {
      try {
        const response = await DocServices.createMF({
          id: user.id,
        });
        // alert("welecome")
        console.log(response.data);
      } catch (error) {
        this.error = error.response.data.error;
        console.log(this.error);
      }
    },
  },
  //antecedents
  handleChange(value) {
  console.log(value);}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.text {
  font-size: 14px;
}

.item {
  margin: 20px;
  padding: 18px 0;
}

.box-card {
  width: 97%;
  margin: 20px;
  border-radius: 15px;
}

.el-row {
    margin-bottom: 20px;
  
  }
  .el-col {
    border-radius: 4px;
  }
</style>
