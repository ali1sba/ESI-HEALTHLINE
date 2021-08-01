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
            <el-scrollbar >
              <button
                @click="createMF(userselected)"
                class="btn btn-primary btn-block font-weight-bold mb-2"
                style="background-color: #24b4ab"
              >
                Créer le dossier médical
              </button>

              <!-- **********************mehdi********************** -->

              <el-card class="box-card" id="information-personnelles">
                <h6>Informations personnelles</h6>
                <div class="text item">
                  <el-space direction="vertical">
                    <el-space wrap :size="10">
                      <el-space> Nom <el-input v-model="userPersInfo.lastName" :disabled="isDisabledPersInfo"></el-input></el-space>
                      <el-space> Prénom <el-input v-model="userPersInfo.firstName" :disabled="isDisabledPersInfo"></el-input></el-space>
                    </el-space>
                    <el-space wrap :size="10"> Date de naissance 
                      <el-date-picker 
                        type="date"
                        v-model="userPersInfo.dateOfBirth"
                        :disabled-date="disabledDate"
                        :shortcuts="shortcuts"
                        :disabled="isDisabledPersInfo"
                      >
                      </el-date-picker>
                      Lieu de naissance <el-input v-model="userPersInfo.placeOfBirth" :disabled="isDisabledPersInfo"></el-input>
                    </el-space>
                    <el-space wrap :size="10"> Sexe <el-input v-model="userPersInfo.sexe" :disabled="isDisabledPersInfo"></el-input> Groupe sanguin <el-input v-model="userPersInfo.bloodGroup" :disabled="isDisabledPersInfo"></el-input></el-space>
                    <el-space wrap :size="10"> Adresse <el-input v-model="userPersInfo.addresse" :disabled="isDisabledPersInfo"></el-input> Téléphone <el-input v-model="userPersInfo.phoneNum" :disabled="isDisabledPersInfo"></el-input></el-space>
                    <el-space wrap :size="10"> Email <el-input v-model="userPersInfo.email" :disabled="true"></el-input> NSS <el-input v-model="userPersInfo.numSS" :disabled="isDisabledPersInfo"></el-input></el-space>
                    <el-space wrap :size="10"> 
                      Fonction <el-input v-model="userPersInfo.state" :disabled="isDisabledPersInfo"></el-input>
                      Année scolaire <el-input v-model="userPersInfo.scolarYear" :disabled="isDisabledPersInfo"></el-input>
                    </el-space>
                    <el-space wrap :size="10"> Catégorie <el-input v-model="userPersInfo.category" :disabled="isDisabledPersInfo"></el-input></el-space>
                    <div v-if="isDisabledPersInfo">
                      <el-space><el-button icon="el-icon-edit" @click="modifierInfoPers"> Modifier </el-button></el-space>
                    </div>
                    <div v-else>
                      <el-space><el-button type="success" icon="el-icon-check" @click="savePersInfo"> Enregister </el-button><el-button type="danger" icon="el-icon-delete" @click="cancelInfoPers"> Annuler </el-button></el-space>
                    </div>
                  </el-space>
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
                  <!-- TODO -->
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
                     

                      <el-collapse-item title="les tests" name="3">
                        
                                 <el-row :gutter="10">
                        <el-col :span="8">
                          Appareils
                        </el-col>
                        
                        <el-col :span="8">
                          
                         Interrogatoire
                        </el-col>
                        
                        <el-col :span="8">
                          
                          Examens Clinique
                        </el-col>
                        </el-row>

<el-divider></el-divider>
                        <el-row :gutter="10">
                        <el-col :span="8">
                          peau et muqueu
                        </el-col>
                        
                        <el-col :span="8">
                          
                          <el-checkbox v-model="checkedDouleurs">douleurs</el-checkbox>
                        </el-col>
                        
                        <el-col :span="8">
                          
                          <el-input
                            type="textarea"
                            :rows="2"
                            placeholder="Examens clinique"
                            v-model="textarea1">
                          </el-input>
                        </el-col>
                        </el-row>

<el-divider></el-divider>
                          
                        <el-row :gutter="10">
                          <el-col :span="8">
                            Ophtalmolodique
                          </el-col>
                          
                          <el-col :span="8">
                            
                            <el-checkbox-group v-model="checkListOphtalmolodique">
                              <el-checkbox label="Larmoiement"></el-checkbox>
                              <el-checkbox label="Douleurs"></el-checkbox>
                              <el-checkbox label="Taches devant les yeux"></el-checkbox>
                            
                            </el-checkbox-group>
                          </el-col>
                          
                          <el-col :span="8" >
                          
                            <el-input
                              type="textarea"
                              :rows="2"
                              placeholder="Examens clinique"
                              v-model="textarea2">
                            </el-input>
                          </el-col>
                        </el-row>
<el-divider></el-divider>
                        <el-row :gutter="10">
                        <el-col :span="8">
                          O.R.L
                        </el-col>
                        
                        <el-col :span="8">
                          
                           <el-checkbox-group v-model="checkListORL">
                            <el-checkbox label="sifflements"></el-checkbox>
                            <el-checkbox label="Angines répétées"></el-checkbox>
                            <el-checkbox label="Epistaxis"></el-checkbox>
                            <el-checkbox label="Rhinorhée"></el-checkbox>
                           
                          </el-checkbox-group>
                        </el-col>
                        
                        <el-col :span="8" >
                         
                          <el-input
                            type="textarea"
                            :rows="2"
                            placeholder="Examens clinique"
                            v-model="textarea3">
                          </el-input>
                        </el-col>
                        </el-row>
<el-divider></el-divider>  
                      <el-row :gutter="10">
                        <el-col :span="8">
                          Locomoteur
                        </el-col>
                        
                        <el-col :span="8">
                          Douleurs
                           <el-checkbox-group v-model="checkListLocomoteur">
                            <el-checkbox label="Musculaire"></el-checkbox>
                            <el-checkbox label="Articulaire"></el-checkbox>
                            <el-checkbox label="vertébraire"></el-checkbox>
                            <el-checkbox label="Neurologique"></el-checkbox>
                           
                          </el-checkbox-group>
                        </el-col>
                        
                        <el-col :span="8" >
                         
                          <el-input
                            type="textarea"
                            :rows="2"
                            placeholder="Examens clinique"
                            v-model="textarea4">
                          </el-input>
                        </el-col>
                      </el-row>
<el-divider></el-divider>
                      <el-row :gutter="10">
                        <el-col :span="8">
                          cardio-vasculaire
                        </el-col>
                        
                        <el-col :span="8">
                          Douleurs
                           <el-checkbox-group v-model="checkListCardioVasculaire">
                            <el-checkbox label="Oedémes"></el-checkbox>
                            <el-checkbox label="A la marche"></el-checkbox>
                            <el-checkbox label="au repos"></el-checkbox>
                            <el-checkbox label="A l'efforts"></el-checkbox>
                            <el-checkbox label="Permanents"></el-checkbox>
                            <el-checkbox label="palpitation"></el-checkbox>
                          </el-checkbox-group>
                        </el-col>
                        
                        <el-col :span="8" >
                         
                          <el-input
                            placeholder="Pouls"
                            v-model="CVPouls">
                          </el-input>
                          <el-input
                            placeholder="T.A"
                            v-model="CVTa">
                          </el-input>
                          <el-input
                            placeholder="Cyanose"
                            v-model="CVCyanose">
                          </el-input>
                        </el-col>
                      </el-row>
<el-divider></el-divider>
                      <el-row :gutter="10">
                        <el-col :span="8">
                          Respiratoire
                        </el-col>
                        
                        <el-col :span="8">
                          Douleurs
                           <el-checkbox-group v-model="checkListRespiratoire">
                            <el-checkbox label="Toux"></el-checkbox>
                            <el-checkbox label="Dyspnee nacturne"></el-checkbox>
                            <el-checkbox label="Dyspnee dlurne"></el-checkbox>
                            <el-checkbox label="Expectorations"></el-checkbox>
                            <el-checkbox label="douleures toracique"></el-checkbox>
                          </el-checkbox-group>
                        </el-col>
                        
                        <el-col :span="8" >
                         
                          <el-input
                            type="textarea"
                            :rows="2"
                            placeholder="Fréquence respiratoire"
                            v-model="textarea6">
                          </el-input>
                        </el-col>
                      </el-row>
<el-divider></el-divider>
     <el-row >
                        <el-col :span="8">
                          Digestif
                        </el-col>
                        
                        <el-col :span="8">
                          <el-checkbox v-model="DigestifPyrosis" label="Pyrosis"></el-checkbox>
                          <el-checkbox v-model="DigestifVomissements" label="Vomissements"></el-checkbox>
                            <el-input
                            placeholder="Appétit"
                            v-model="DigestifAppétit">
                          </el-input><el-checkbox v-model="checkDigestifAppétit"></el-checkbox>
                          <el-input
                            placeholder="Transit"
                            v-model="DigestifTransit">
                          </el-input><el-checkbox v-model="checkDigestifTransit"></el-checkbox>
                          <el-input
                            placeholder="Selles"
                            v-model="DigestifSelles">
                          </el-input><el-checkbox v-model="checkDigestifSelles"></el-checkbox>
                          <el-input
                            placeholder="Rectorragies"
                            v-model="DigestifRectorragies">
                          </el-input><el-checkbox v-model="checkDigestifRectorragies"></el-checkbox>
                          <el-input
                            placeholder="Douleur Abdominales"
                            v-model="DigestifDouleurAbdominales">
                          </el-input><el-checkbox v-model="checkDigestifDouleurAbdominales"></el-checkbox>
                          <el-input
                            placeholder="Autres"
                            v-model="DigestifAutres">
                          </el-input><el-checkbox v-model="checkDigestifAutres"></el-checkbox>

                          
                           
                        </el-col>
                        
                        <el-col :span="8" >
                         
                          <el-input
                            placeholder="Denture:Carie:"
                            v-model="DigestifDentureCarie">
                          </el-input>
                          <el-input
                            placeholder="Gingivopatie"
                            v-model="DigestifGingivopatie">
                          </el-input>
                          <el-input
                            placeholder="autres"
                            v-model="Digestifautres">
                          </el-input>
                          <el-input
                            placeholder="abdomens"
                            v-model="Digestifabdomens">
                          </el-input>
                          <el-input
                            placeholder="Hernie"
                            v-model="DigestifHernie">
                          </el-input>
                          <el-input
                            placeholder="Foie"
                            v-model="DigestifFoie">
                          </el-input>
                        </el-col>
                      </el-row>
<el-divider></el-divider>
<el-row :gutter="10">
                        <el-col :span="8">
                          Hematologique et Ganglionnaire
                        </el-col>
                        
                        <el-col :span="8">
                          <el-checkbox-group v-model="checkListHematologique">
                            <el-checkbox label="Ecchymoses"></el-checkbox>
                            <el-checkbox label="Tendances aux hémorragies"></el-checkbox>
                          </el-checkbox-group>
                          
                           
                        </el-col>
                        
                        <el-col :span="8" >
                         
                          <el-input
                            placeholder="Pétéchies"
                            v-model="HematologiquePétéchies">
                          </el-input>
                          <el-input
                            placeholder="Purpura"
                            v-model="HematologiquePurpura">
                          </el-input>
                          <el-input
                            placeholder="Rate"
                            v-model="HematologiqueRate">
                          </el-input>
                          Ganglions
                          <el-input
                            placeholder="Cervicaux"
                            v-model="HematologiqueCervicaux">
                          </el-input>
                          <el-input
                            placeholder="Sous Auxillaires"
                            v-model="HematologiqueSsAuxillaires">
                          </el-input>
                          <el-input
                            placeholder="Sous Claviculaires"
                            v-model="HematologiqueSsClaviculaires">
                          </el-input>
                          <el-input
                            placeholder="Ingionaux"
                            v-model="HematologiqueIngionaux">
                          </el-input>

                          
                        </el-col>
                      </el-row>
<el-divider></el-divider>
 <el-row :gutter="10">
                        <el-col :span="8">
                          Endocrinologie
                        </el-col>
                        
                        <el-col :span="8">
                          Douleurs
                           <el-checkbox-group v-model="checkListEndocrinologie">
                            <el-checkbox label="Obésité familiales"></el-checkbox>
                            <el-checkbox label="A la marche"></el-checkbox>
                          </el-checkbox-group>
                        </el-col>
                        
                        <el-col :span="8" >
                         
                          <el-input
                            placeholder="Tyroide"
                            v-model="EndocrinologieTyroide">
                          </el-input>
                          <el-input
                            placeholder="Testicules"
                            v-model="EndocrinologieTesticules">
                          </el-input>
                          <el-input
                            placeholder="Glandes Mammaires"
                            v-model="EndocrinologieGlandesMammaires">
                          </el-input>
                        </el-col>
                      </el-row>
<el-divider></el-divider>

 <el-row :gutter="10">
                        <el-col :span="8">
                          Profil Psychologique
                        </el-col>
                        
                        <el-col :span="8">
                          
                            <el-input
                              type="textarea"
                              :rows="3"
                              placeholder="Interrogatoire"
                              v-model="PsychoInterrogatoire">
                            </el-input>
                        </el-col>
                        
                        <el-col :span="8" >
                         
                           <el-input
                              type="textarea"
                              :rows="3"
                              placeholder="Examens Clinique"
                              v-model="PsychoExamensClinique">
                            </el-input>
                        </el-col>
                      </el-row>
<el-divider></el-divider>




                      </el-collapse-item>
                      










</el-collapse>
                    
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
        state: "none",
        scolarYear: "none",
      },
      // err
      error: null,
      email: "",
      // navigation bar*******************************************************************************************
      radio1: "",
      // this will represent every single info of the patient (DM,EX,RDV,STATISTICS)
      patientDM: "",
      //the data for personalInfo section****************************************************************************
      userPersInfo: {
        idUser: null,
        idPI: null,
        firstName: null,
        lastName: null,
        dateOfBirth: null,
        placeOfBirth: null,
        sexe: null,
        bloodGroup: null,
        addresse: null,
        phoneNum: null,
        email: null,
        numSS: null,
        state: null,
        scolarYear: null,
        category: null,
      },
      cachedUser : "",
      isDisabledPersInfo: true,
      catégorie: "",
     //the data for Dépistage section****************************************************************************
      typeDeVisite:"",
      docteurName: "Merabet ",
      poids:"",
      taille :"",
      DépistageDate1:"",
      auditionOD:"",
      auditionOG:"",
      AcuiteVisuelleSansCOD:"",
      AcuiteVisuelleSansCOG:"",
      AcuiteVisuelleAvecCOD:"",
      AcuiteVisuelleAvecCOG:"",
      checkedDouleurs: true,
      textarea1:"",
      textarea2:"",
      textarea3:"",
      textarea4:"",
      textarea5:"",
      textarea6:"",
      CVPouls:"",
      CVTa:"",
      CVCyanose:"",
      checkListOphtalmolodique: [''],
      checkListORL: [''],
      checkListLocomoteur: [''],
      checkListRespiratoire: [''],
      checkListCardioVasculaire: [''],
      DigestifDentureCarie:"",
      DigestifGingivopatie:"",
      Digestifautres:"",
      Digestifabdomens:"",
      DigestifHernie:"",
      DigestifFoie:"",
      DigestifAppétit:"",
      DigestifTransit:"",
      DigestifSelles:"",
      DigestifRectorragies:"",
      DigestifDouleurAbdominales:"",
      DigestifAutres:"",
      DigestifPyrosis: false,
      DigestifVomissements: false,
      checkDigestifAppétit: false,
      checkDigestifTransit: false,
      checkDigestifSelles: false,
      checkDigestifRectorragies: false,
      checkDigestifDouleurAbdominales: false,
      checkDigestifAutres: false,
      checkListHematologique: [''],
      HematologiquePétéchies:"",
      HematologiquePurpura:"",
      HematologiqueRate:"",
      HematologiqueCervicaux:"",
      HematologiqueSsAuxillaires:"",
      HematologiqueSsClaviculaires:"",
      HematologiqueIngionaux:"",
      checkListEndocrinologie: [''],
      EndocrinologieTyroide:"",
      EndocrinologieTesticules:"",
      EndocrinologieGlandesMammaires:"",
      PsychoInterrogatoire:"",
      PsychoExamensClinique:"",

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
    
      
      

      // date function
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
      

      //variable de taitement des defferantes sections 
      activeNames: ['1'],

      handleChange(val) {
        console.log(val);
      },
      

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
      try {
        const response = await DocServices.showPatient({
          id: user.id
        });
        // am sending an attribute "haveDM"
        // haveDM : true => the patient haveDM => display the DM and hide the "créer le dossier médical" button
        // haveDM : false => the patient dont haveDM => display the "créer le dossier médical" button with some infos
        // this.patientDM = response
        this.userPersInfo = response.data.medFile.personalInfo
        console.log(response.data);
      } catch (error) {
        this.error = error.response.data.error;
        console.log(this.error);
      }
    },
    async createMF(user) {
      try {
        const response = await DocServices.createMF({
          id: user.id,
        });
        console.log(response.data);
      } catch (error) {
        this.error = error.response.data.error;
        console.log(this.error);
      }
    },
    async modifierInfoPers () {
      try {
        this.cachedUser = Object.assign({}, this.userPersInfo);
        this.isDisabledPersInfo = false
        console.log("modifierInfoPers button was clicked !");
      } catch (error) {
        console.log("something went wrong");
      }
    },
    async cancelInfoPers () {
      try {
        this.userPersInfo = Object.assign({}, this.cachedUser);
        this.isDisabledPersInfo = true
        console.log("cancelInfoPers button was clicked !");
      } catch (error) {
        console.log("something went wrong");
      }
    },
    async savePersInfo () {
      try {
        this.cachedUser = Object.assign({}, this.userPersInfo);
        this.isDisabledPersInfo = true
        console.log("savePersInfo button was clicked !");
        console.log(this.userPersInfo);
        
        const response = await DocServices.savePersInfo({
          personalInfo: this.userPersInfo
        });
        console.log(response.data);
      } catch (error) {
        console.log(`something went wrong ${error}`);
      }
    },
  },
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