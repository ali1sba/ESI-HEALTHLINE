<template>
  <div class="DOCdashboard">
    <div class="wrapper d-flex align-items-stretch">
      <nav id="sidebar" :class="{ active: isactive }">
        <div class="logoProject">
          <img src="assets/dashboard/logo.png" class="logo" />
        </div>

        <ul class="list-unstyled components mb-5 menulist">
          <li>
            <a @click="home()">
              <span class="fa fa-home"></span>
              <p class="nom">Home</p></a
            >
          </li>
          <li>
            <a @click="content = 'dossier'">
              <span class="fa fa-user"></span>
              <p class="nom">About</p></a
            >
          </li>
          <li>
            <a @click="content = '3'">
              <span class="fa fa-sticky-note"></span>
              <p class="nom">Blog</p></a
            >
          </li>
          <li>
            <a @click="content = '4'"
              ><span class="fa fa-cogs"></span>
              <p class="nom">Services</p>
            </a>
          </li>
          <li>
            <a @click="content = '5'"
              ><span class="fa fa-cogs"></span>
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
            <button
              type="button"
              id="sidebarCollapse"
              class="menuicon"
              @click="isactive = !isactive"
            >
              <img src="assets/dashboard/menu (1).png" class="menuicon" />
              <span class="sr-only">Toggle Menu</span>
            </button>
            <h3 class="dashboard" id="titledash">Dashboard</h3>

            <div id="icons">
              <el-dropdown
                split-button
                type="info"
                class="messageNotfis"
                id="btn-notifs"
              >
                <i class="el-icon-message-solid"></i>
                <template #dropdown>
                  <el-dropdown-menu>
                    <el-dropdown-item>Alert 1</el-dropdown-item>
                    <el-dropdown-item>Alert 2</el-dropdown-item>
                    <el-dropdown-item>Alert 3</el-dropdown-item>
                    <el-dropdown-item>Alert 4</el-dropdown-item>
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
              <el-dropdown split-button type="info" id="btn-decisions">
                <i class="el-icon-s-promotion"></i>
                <template #dropdown>
                  <el-dropdown-menu>
                    <el-dropdown-item>Action 1</el-dropdown-item>
                    <el-dropdown-item>Action 2</el-dropdown-item>
                    <el-dropdown-item>Action 3</el-dropdown-item>
                    <el-dropdown-item>Action 4</el-dropdown-item>
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
            </div>

            <!-- <div class="collapse navbar-collapse" id="navbarSupportedContent">
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
            </div> -->
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
                @click="showPatient(patient)"
              >
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  class="leaderboard__picture"
                />
                <span
                  class="leaderboard__name"
                  v-loading.fullscreen.lock="fullscreenLoading"
                >
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
            <el-card class="boxRDV">
              <h4>RDV</h4>
              <table class="dashboardTable">
                <thead class="dashboardTablethead">
                  <tr>
                    <th class="dashboardTableth">Name</th>
                    <th class="dashboardTableth">Date</th>
                    <th class="dashboardTableth">Time</th>
                    <th class="dashboardTableth">Statue</th>
                  </tr>
                </thead>

                <tr class="dashboardTabletr">
                  <td class="dashboardTabletd">
                    <a href="#" class="dashboardTableA">Patient n 0</a>
                  </td>
                  <td class="dashboardTabletd">1/5/2021</td>
                  <td class="dashboardTabletd">11am</td>
                  <td class="dashboardTabletd">
                    <p class="status status-unpaid">Annuler</p>
                  </td>
                </tr>

                <tr class="dashboardTabletr">
                  <td class="dashboardTabletd">
                    <a href="#" class="dashboardTableA">Patient n 1</a>
                  </td>
                  <td class="dashboardTabletd">1/5/2021</td>
                  <td class="dashboardTabletd">11am</td>
                  <td class="dashboardTabletd">
                    <p class="status status-paid">Terminer</p>
                  </td>
                </tr>
                <tr class="dashboardTabletr">
                  <td class="dashboardTabletd">
                    <a href="#" class="dashboardTableA">Patient n 2</a>
                  </td>
                  <td class="dashboardTabletd">1/5/2021</td>
                  <td class="dashboardTabletd">11am</td>
                  <td class="dashboardTabletd">
                    <p class="status status-pending">Aujourd'hui</p>
                  </td>
                </tr>
                <tr class="dashboardTabletr">
                  <td class="dashboardTabletd">
                    <a href="#" class="dashboardTableA">Patient n 3</a>
                  </td>
                  <td class="dashboardTabletd">1/5/2021</td>
                  <td class="dashboardTabletd">11am</td>
                  <td class="dashboardTabletd">
                    <p class="status status-pending">ujourd'hui</p>
                  </td>
                </tr>
                <tr class="dashboardTabletr">
                  <td class="dashboardTabletd">
                    <a href="#" class="dashboardTableA">Patient n 4</a>
                  </td>
                  <td class="dashboardTabletd">1/5/2021</td>
                  <td class="dashboardTabletd">11am</td>
                  <td class="dashboardTabletd">
                    <p class="status status-paid">Paid</p>
                  </td>
                </tr>
              </table>
            </el-card>
          </div>

          <!-- ********************** 2 ***************************** -->

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
                  <el-radio-button
                    v-show="hidden"
                    label="examen clinique"
                  ></el-radio-button>
                  <el-radio-button
                    v-show="hidden"
                    label="bilan paraclinique"
                  ></el-radio-button>
                  <el-radio-button
                    v-show="hidden"
                    label="rapport medical"
                  ></el-radio-button>
                  <el-radio-button
                    v-show="hidden"
                    label="ordonnances"
                  ></el-radio-button>
                  <el-radio-button
                    v-show="hidden"
                    label="orientations"
                  ></el-radio-button>
                </el-radio-group>
              </div>
            </center>
            <br />
            <!-- ********************************************Medical file******************************************** -->
            <!-- **********************have or not the Medical file********************** -->

            <el-scrollbar v-show="radio1 === 'Dossier Médical'">
              <el-card
                v-if="!haveMF"
                class="box-card"
                @click="messageIfNoData()"
              >
                <center>
                  <h3>
                    {{ userselected.lastName }} n'a pas de Dossier Médical
                  </h3>
                </center>

                <el-descriptions class="margin-top" :column="2" border>
                  <el-descriptions-item>
                    <template #label>
                      Nom
                    </template>
                    {{ userselected.firstName }}
                  </el-descriptions-item>
                  <el-descriptions-item>
                    <template #label>
                      Prenom
                    </template>
                    {{ userselected.lastName }}
                  </el-descriptions-item>
                  <el-descriptions-item>
                    <template #label>
                      <i class="el-icon-user"></i>
                      state
                    </template>
                    <el-tag size="small">{{ userselected.state }}</el-tag>
                  </el-descriptions-item>
                  <el-descriptions-item
                    v-show="userselected.state === Etudient"
                  >
                    <template #label>
                      <i class="el-icon-guide"></i>
                      scolar Year
                    </template>
                    <el-tag size="small">{{ userselected.scolarYear }}</el-tag>
                  </el-descriptions-item>
                </el-descriptions>

                <el-empty :image-size="300">
                  <el-button
                    type="primary"
                    v-loading.fullscreen.lock="fullscreenLoading"
                    @click="createMF(userselected)"
                    style="background-color: #24b4ab;width:100%;"
                    >Créer le dossier médical</el-button
                  >
                </el-empty>
              </el-card>

              <!-- **********************mehdi********************** -->
              <div v-else>
                <el-card class="box-card" id="information-personnelles">
                  <h6>Informations personnelles</h6>
                  <div class="text item">
                    <center>
                      <el-row :gutter="20">
                        <el-col :span="8"
                          ><el-space>
                            Nom
                            <el-input
                              v-model="userPersInfo.lastName"
                              :disabled="isDisabledPersInfo"
                            ></el-input></el-space
                        ></el-col>
                        <el-col :span="8"
                          ><el-space>
                            Prénom
                            <el-input
                              v-model="userPersInfo.firstName"
                              :disabled="isDisabledPersInfo"
                            ></el-input></el-space
                        ></el-col>

                        <el-col :span="8"
                          ><el-space wrap :size="10">
                            Date de naissance
                            <el-date-picker
                              type="date"
                              v-model="userPersInfo.dateOfBirth"
                              :disabled-date="disabledDate"
                              :shortcuts="shortcuts"
                              :disabled="isDisabledPersInfo"
                            ></el-date-picker></el-space
                        ></el-col>
                      </el-row>
                      <el-row :gutter="20">
                        <el-col :span="8">
                          <el-space wrap :size="10">
                            Lieu de naissance
                            <el-select
                              v-model="userPersInfo.placeOfBirth"
                              multiple
                              filterable
                              remote
                              reserve-keyword
                              placeholder="Lieu de naissance"
                              :remote-method="remoteMethod"
                              :loading="wilayaLoading"
                              :disabled="isDisabledPersInfo"
                            >
                              <el-option
                                v-for="item in wilayaOptions"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                              >
                              </el-option>
                            </el-select>
                          </el-space>
                        </el-col>
                        <el-col :span="8">
                          <el-space wrap :size="10">
                            Sexe
                            <el-select
                              v-model="userPersInfo.sexe"
                              placeholder="Select"
                              :disabled="isDisabledPersInfo"
                            >
                              <el-option
                                v-for="item in sexeOptions"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                              >
                              </el-option>
                            </el-select>
                          </el-space>
                        </el-col>
                        <el-col :span="8">
                          <el-space wrap :size="10">
                            Groupe sanguin
                            <el-select
                              v-model="userPersInfo.bloodGroup"
                              placeholder="Select"
                              :disabled="isDisabledPersInfo"
                            >
                              <el-option
                                v-for="item in bgOptions"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                              >
                              </el-option>
                            </el-select>
                          </el-space>
                        </el-col>
                      </el-row>
                      <el-row :gutter="20">
                        <el-col :span="8">
                          <el-space wrap :size="10">
                            Adresse
                            <el-input
                              v-model="userPersInfo.addresse"
                              :disabled="isDisabledPersInfo"
                            ></el-input></el-space
                        ></el-col>
                        <el-col :span="8"
                          ><el-space wrap :size="10">
                            Téléphone
                            <el-input
                              v-model="userPersInfo.phoneNum"
                              :disabled="isDisabledPersInfo"
                            ></el-input></el-space
                        ></el-col>
                        <el-col :span="8"
                          ><el-space wrap :size="10">
                            Email
                            <el-input
                              v-model="userPersInfo.email"
                              :disabled="true"
                            ></el-input></el-space
                        ></el-col>
                      </el-row>
                      <el-row :gutter="20">
                        <el-col :span="8">
                          <el-space wrap :size="10">
                            NSS
                            <el-input
                              v-model="userPersInfo.numSS"
                              :disabled="isDisabledPersInfo"
                            >
                            </el-input></el-space
                        ></el-col>
                        <el-col :span="8">
                          <el-space wrap :size="10">
                            Fonction
                            <el-select
                              v-model="userPersInfo.state"
                              placeholder="Select"
                              :disabled="isDisabledPersInfo"
                            >
                              <el-option
                                v-for="item in stateOptions"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                              >
                              </el-option>
                            </el-select>
                          </el-space>
                        </el-col>
                        <el-col :span="8">
                          <el-space wrap :size="10">
                            Année scolaire
                            <el-select
                              v-model="userPersInfo.scolarYear"
                              placeholder="Select"
                              :disabled="isDisabledPersInfo"
                            >
                              <el-option
                                v-for="item in scolarYearOptions"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                              >
                              </el-option>
                            </el-select>
                          </el-space>
                        </el-col>
                      </el-row>
                      <el-space direction="vertical">
                        <el-space wrap :size="10">
                          Catégorie
                          <el-input
                            v-model="userPersInfo.category"
                            :disabled="isDisabledPersInfo"
                          ></el-input
                        ></el-space>
                        <br />
                        <el-space wrap :size="10">
                          <div v-if="isDisabledPersInfo">
                            <el-space
                              ><el-button
                                icon="el-icon-edit"
                                @click="modifierInfoPers"
                              >
                                Modifier
                              </el-button></el-space
                            >
                          </div>
                          <div v-else>
                            <el-space
                              ><el-button
                                type="success"
                                icon="el-icon-check"
                                @click="savePersInfo"
                              >
                                Enregister </el-button
                              ><el-button
                                type="danger"
                                icon="el-icon-delete"
                                @click="cancelInfoPers"
                              >
                                Annuler
                              </el-button></el-space
                            >
                          </div>
                        </el-space>
                      </el-space>
                    </center>
                  </div>
                </el-card>
                <!-- **********************nour********************** -->
                <el-card class="box-card" id="Informations-Biométriques">
                  <h6>Informations Biométriques</h6>
                  <center>
                    <div class="text item">
                      <div class="text item" id="biom">
                        <p class="droite">Poids : (kg)</p>
                        <div classe="gauche">
                          <el-input
                            placeholder="Entrez le poids"
                            v-model="userBiomInfo.poids"
                          >
                          </el-input>
                        </div>
                        <p class="droite">Taille : (cm)</p>
                        <div classe="gauche">
                          <el-input
                            id="weight"
                            placeholder="Entrez la taille"
                            v-model="userBiomInfo.taille"
                          >
                          </el-input>
                        </div>
                        <el-button
                          @click="
                            bmiCalculation();
                            saveBiometricInfo();
                          "
                          class="droite"
                        >
                          IMC
                        </el-button>
                        <p class="droite" id="imcValue">{{ responseimc }}</p>
                      </div>
                    </div>
                  </center>
                </el-card>
                <!-- **********************ilhem********************** -->
                <el-card class="box-card" id="Antécédents">
                  <h6>Antécédents</h6>
                  <div class="text item">
                    <el-row>
                      <el-col class="intox" :span="20">
                        <h5>INTOXICATIONS :</h5>
                        <h6>Tabacs</h6>

                        <el-row>
                          <el-col :span="3">A fumer </el-col>
                          <el-col :span="3"
                            ><el-radio
                              :disabled="isDisabledAnts"
                              class="ouinon"
                              v-model="boolFumer"
                              label="1"
                              >Oui</el-radio
                            ></el-col
                          >
                          <el-col :span="3"
                            ><el-radio
                              :disabled="isDisabledAnts"
                              class="ouinon"
                              v-model="boolFumer"
                              label="2"
                              >Non</el-radio
                            ></el-col
                          >
                          <el-col :span="15">
                            <el-space wrap :size="4"
                              >Nombre cigarettes /j<el-input-number
                                :disabled="isDisabledAnts"
                                v-model="nbrFumer"
                                controls-position="right"
                                @change="handleChange"
                                :min="1"
                                :max="20"
                              ></el-input-number></el-space
                          ></el-col>
                        </el-row>
                        <el-row>
                          <el-col :span="3">A chiquer</el-col>
                          <el-col :span="3"
                            ><el-radio
                              :disabled="isDisabledAnts"
                              class="ouinon"
                              v-model="boolChiquer"
                              label="1"
                              >Oui</el-radio
                            ></el-col
                          >
                          <el-col :span="3">
                            <el-radio
                              :disabled="isDisabledAnts"
                              class="ouinon"
                              v-model="boolChiquer"
                              label="2"
                              >Non</el-radio
                            ></el-col
                          >
                          <el-col :span="15">
                            <el-space wrap :size="4"
                              >Nombre de boites /j<el-input-number
                                :disabled="isDisabledAnts"
                                v-model="nbrChiquer"
                                controls-position="right"
                                @change="handleChange"
                                :min="1"
                                :max="20"
                              ></el-input-number></el-space
                          ></el-col>
                        </el-row>
                        <el-row>
                          <el-col :span="3">A prise</el-col>
                          <el-col :span="3"
                            ><el-radio
                              :disabled="isDisabledAnts"
                              class="ouinon"
                              v-model="boolPrise"
                              label="1"
                              >Oui</el-radio
                            ></el-col
                          >
                          <el-col :span="3">
                            <el-radio
                              :disabled="isDisabledAnts"
                              class="ouinon"
                              v-model="boolPrise"
                              label="2"
                              >Non</el-radio
                            ></el-col
                          >
                          <el-col :span="15">
                            <el-space wrap :size="4"
                              >Nombre de boites /j<el-input-number
                                :disabled="isDisabledAnts"
                                v-model="nbrPrise"
                                controls-position="right"
                                @change="handleChange"
                                :min="1"
                                :max="20"
                              ></el-input-number></el-space
                          ></el-col>
                        </el-row>
                        <el-row>
                          <el-col :span="3">ancien fumeur</el-col>
                          <el-col :span="3"
                            ><el-radio
                              :disabled="isDisabledAnts"
                              class="ouinon"
                              v-model="ancienFum"
                              label="1"
                              >Oui</el-radio
                            ></el-col
                          >
                          <el-col :span="3">
                            <el-radio
                              :disabled="isDisabledAnts"
                              class="ouinon"
                              v-model="ancienFum"
                              label="2"
                              >Non</el-radio
                            ></el-col
                          >
                          <el-col :span="15">
                            <el-space wrap :size="4"
                              >periode d'exposition
                              <el-input-number
                                :disabled="isDisabledAnts"
                                v-model="perExpo"
                                controls-position="right"
                                @change="handleChange"
                                :min="1"
                                :max="20"
                              ></el-input-number></el-space
                            >ans</el-col
                          >
                        </el-row>
                        <el-row>
                          <h6>
                            Alcool
                            <el-space wrap :size="10"
                              ><el-input
                                :disabled="isDisabledAnts"
                                placeholder="..."
                                v-model="alcool"
                              ></el-input
                            ></el-space>
                          </h6>
                          <h6>
                            Medicaments
                            <el-space wrap :size="10"
                              ><el-input
                                :disabled="isDisabledAnts"
                                placeholder="..."
                                v-model="medicat"
                              ></el-input
                            ></el-space>
                          </h6>
                        </el-row>
                        <h6>
                          Autres
                          <el-space wrap :size="10"
                            ><el-input
                              :disabled="isDisabledAnts"
                              placeholder=""
                              v-model="autres"
                            ></el-input
                          ></el-space>
                        </h6>
                      </el-col>
                    </el-row>
                    <el-row>
                      <el-col :span="20">
                        <h5>ANTECEDENTS MEDICO /CHIRUGICAUX :</h5>
                        <h6>Affections congenitales</h6>
                        <el-input
                          :disabled="isDisabledAnts"
                          v-model="affec"
                          type="textarea"
                          autosize
                          placeholder=".."
                        ></el-input>
                        <h6>Maladies generalees</h6>
                        <el-input
                          :disabled="isDisabledAnts"
                          v-model="malaGene"
                          type="textarea"
                          autosize
                          placeholder=".."
                        ></el-input>
                        <h6>Intervention chirurgicales</h6>
                        <el-input
                          :disabled="isDisabledAnts"
                          v-model="intChiru"
                          type="textarea"
                          autosize
                          placeholder=".."
                        ></el-input>
                        <h6>Reactions allergiques au medicaments</h6>
                        <el-input
                          :disabled="isDisabledAnts"
                          v-model="reactMed"
                          type="textarea"
                          autosize
                          placeholder=".."
                        ></el-input>
                      </el-col>
                    </el-row>

                    <el-row>
                      <el-space wrap :size="10">
                        <div v-if="isDisabledAnts">
                          <el-space
                            ><el-button
                              icon="el-icon-edit"
                              @click="modifierAntecedents"
                            >
                              Modifier
                            </el-button></el-space
                          >
                        </div>
                        <div v-else>
                          <el-space
                            ><el-button
                              type="success"
                              icon="el-icon-check"
                              @click="saveAntecedents"
                            >
                              Enregister </el-button
                            ><el-button
                              type="danger"
                              icon="el-icon-delete"
                              @click="annulerAntecedents"
                            >
                              Annuler
                            </el-button></el-space
                          >
                        </div>
                      </el-space>
                    </el-row>
                    <!-- <div v-if="isDisabledAnts">
                      <el-space><el-button class="savebtnant"  @click="modifierAntecedents" round>modifier</el-button></el-space>
                    </div>
                    <div v-else>
                      <el-space>
                        <el-button class="savebtnant"  @click="saveAntecedents"  round>Sauvgarder</el-button>
                        <el-button class="savebtnant"  @click="cancelAnts" round>annuler</el-button>
                  </el-space>
                </div> -->
                  </div>
                </el-card>
                <!-- **********************ali********************** -->
                <el-card class="box-card" id="Dépistage">
                  <center>
                    <h6>Dépistage</h6>
                    <div class="text item">
                      <el-space direction="vertical">
                        <el-row>
                          <el-col :span="24">
                            <el-space wrap :size="10">
                              visite médical
                              <el-select
                                v-model="userDepiInfo.typeDeVisite"
                                placeholder="Select"
                                :disabled="isDisabledDepiInfo"
                              >
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
                                v-model="userDepiInfo.DépistageDate1"
                                :disabled="isDisabledDepiInfo"
                                type="date"
                                placeholder="Choississez un jour"
                                :disabled-date="disabledDate"
                                :shortcuts="shortcuts"
                              >
                              </el-date-picker>
                              Docteur
                              <el-input
                                :disabled="isDisabledDepiInfo"
                                placeholder="Entrez quelque chose"
                                v-model="userDepiInfo.docteurName"
                              ></el-input>
                            </el-space>
                          </el-col>
                        </el-row>
                        <!-- <el-row>
                      <el-col :span="24">
                        <el-space wrap :size="50">
                          <el-space wrap :size="10">
                            Poids
                            <el-input
                              placeholder="KG"
                              v-model="userDepiInfo.poids"
                            ></el-input
                          ></el-space>
                          <el-space wrap :size="10"
                            >Taille
                            <el-input
                              placeholder="Mètre"
                              v-model="userDepiInfo.taille"
                            ></el-input
                          ></el-space>
                        </el-space>
                      </el-col>
                    </el-row> 
                    <el-divider></el-divider>-->

                        <el-collapse
                          v-model="userDepiInfo.activeNames"
                          @change="handleChange"
                        >
                          <el-collapse-item title="Audition" name="1">
                            <el-space wrap :size="10">
                              OD
                              <el-select
                                v-model="userDepiInfo.auditionOD"
                                placeholder="OD"
                                :disabled="isDisabledDepiInfo"
                              >
                                <el-option
                                  v-for="item in options1To10"
                                  :key="item.value"
                                  :label="item.label"
                                  :value="item.value"
                                >
                                </el-option>
                              </el-select>
                            </el-space>
                            <el-space wrap :size="10">
                              OG
                              <el-select
                                v-model="userDepiInfo.auditionOG"
                                placeholder="OG"
                                :disabled="isDisabledDepiInfo"
                              >
                                <el-option
                                  v-for="item in options1To10"
                                  :key="item.value"
                                  :label="item.label"
                                  :value="item.value"
                                >
                                </el-option>
                              </el-select>
                            </el-space>
                          </el-collapse-item>
                          <el-collapse-item title="Acuite Visuelle" name="2">
                            <el-space orientation="vertical">
                              <el-space wrap :size="10">
                                OD
                                <el-select
                                  v-model="userDepiInfo.AcuiteVisuelleSansCOD"
                                  placeholder="OD"
                                  :disabled="isDisabledDepiInfo"
                                >
                                  <el-option
                                    v-for="item in options1To10"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value"
                                  >
                                  </el-option>
                                </el-select>
                              </el-space>
                              <el-space wrap :size="10"
                                >OG
                                <el-select
                                  v-model="userDepiInfo.AcuiteVisuelleSansCOG"
                                  placeholder="OG"
                                  :disabled="isDisabledDepiInfo"
                                >
                                  <el-option
                                    v-for="item in options1To10"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value"
                                  >
                                  </el-option>
                                </el-select>
                              </el-space>
                              SANS CORRECTIONS
                            </el-space>
                            <el-space orientation="vertical">
                              <el-space wrap :size="10">
                                OD
                                <el-select
                                  v-model="userDepiInfo.AcuiteVisuelleAvecCOD"
                                  placeholder="OD"
                                  :disabled="isDisabledDepiInfo"
                                >
                                  <el-option
                                    v-for="item in options1To10"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value"
                                  >
                                  </el-option>
                                </el-select>
                              </el-space>
                              <el-space wrap :size="10"
                                >OG
                                <el-select
                                  v-model="userDepiInfo.AcuiteVisuelleAvecCOG"
                                  placeholder="OG"
                                  :disabled="isDisabledDepiInfo"
                                >
                                  <el-option
                                    v-for="item in options1To10"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value"
                                  >
                                  </el-option>
                                </el-select>
                              </el-space>
                              AVEC CORRECTIONS
                            </el-space>
                          </el-collapse-item>

                          <el-collapse-item title="les tests" name="3">
                            <el-row :gutter="10">
                              <el-col :span="8"> Appareils </el-col>

                              <el-col :span="8"> Interrogatoire </el-col>

                              <el-col :span="8"> Examens Clinique </el-col>
                            </el-row>

                            <el-divider></el-divider>
                            <el-row :gutter="10">
                              <el-col :span="8"> peau et muqueu </el-col>

                              <el-col :span="8">
                                <el-checkbox
                                  v-model="userDepiInfo.checkedDouleurs"
                                  :disabled="isDisabledDepiInfo"
                                  >douleurs</el-checkbox
                                >
                              </el-col>

                              <el-col :span="8">
                                <el-input
                                  type="textarea"
                                  :rows="2"
                                  :disabled="isDisabledDepiInfo"
                                  placeholder="Examens clinique"
                                  v-model="userDepiInfo.textarea1"
                                >
                                </el-input>
                              </el-col>
                            </el-row>

                            <el-divider></el-divider>

                            <el-row :gutter="10">
                              <el-col :span="8"> Ophtalmolodique </el-col>

                              <el-col :span="8">
                                <el-checkbox
                                  :disabled="isDisabledDepiInfo"
                                  v-model="userDepiInfo.checkLarmoiement"
                                  label="Larmoiement"
                                ></el-checkbox>
                                <el-checkbox
                                  :disabled="isDisabledDepiInfo"
                                  v-model="userDepiInfo.checkDouleurs"
                                  label="Douleurs"
                                ></el-checkbox>
                                <el-checkbox
                                  :disabled="isDisabledDepiInfo"
                                  v-model="
                                    userDepiInfo.checkTachesdevantlesyeux
                                  "
                                  label="Taches devant les yeux"
                                ></el-checkbox>
                              </el-col>

                              <el-col :span="8">
                                <el-input
                                  type="textarea"
                                  :disabled="isDisabledDepiInfo"
                                  :rows="2"
                                  placeholder="Examens clinique"
                                  v-model="userDepiInfo.textarea2"
                                >
                                </el-input>
                              </el-col>
                            </el-row>
                            <el-divider></el-divider>
                            <el-row :gutter="10">
                              <el-col :span="8"> O.R.L </el-col>
                              <el-col :span="8">
                                <el-checkbox
                                  label="sifflements"
                                  v-model="userDepiInfo.checksifflements"
                                  :disabled="isDisabledDepiInfo"
                                ></el-checkbox>
                                <el-checkbox
                                  label="Angines répétées"
                                  v-model="userDepiInfo.checkAnginesrépétées"
                                  :disabled="isDisabledDepiInfo"
                                ></el-checkbox>
                                <el-checkbox
                                  label="Epistaxis"
                                  v-model="userDepiInfo.checkEpistaxis"
                                  :disabled="isDisabledDepiInfo"
                                ></el-checkbox>
                                <el-checkbox
                                  label="Rhinorhée"
                                  v-model="userDepiInfo.checkRhinorhée"
                                  :disabled="isDisabledDepiInfo"
                                ></el-checkbox>
                              </el-col>

                              <el-col :span="8">
                                <el-input
                                  type="textarea"
                                  :disabled="isDisabledDepiInfo"
                                  :rows="2"
                                  placeholder="Examens clinique"
                                  v-model="userDepiInfo.textarea3"
                                >
                                </el-input>
                              </el-col>
                            </el-row>
                            <el-divider></el-divider>
                            <el-row :gutter="10">
                              <el-col :span="8"> Locomoteur </el-col>

                              <el-col :span="8">
                                Douleurs: <br />

                                <el-checkbox
                                  label="Musculaire"
                                  v-model="userDepiInfo.checkMusculaire"
                                  :disabled="isDisabledDepiInfo"
                                ></el-checkbox>
                                <el-checkbox
                                  label="Articulaire"
                                  v-model="userDepiInfo.checkArticulaire"
                                  :disabled="isDisabledDepiInfo"
                                ></el-checkbox>
                                <el-checkbox
                                  label="vertébraire"
                                  v-model="userDepiInfo.checkvertébraire"
                                  :disabled="isDisabledDepiInfo"
                                ></el-checkbox>
                                <el-checkbox
                                  label="Neurologique"
                                  v-model="userDepiInfo.checkNeurologique"
                                  :disabled="isDisabledDepiInfo"
                                ></el-checkbox>
                              </el-col>

                              <el-col :span="8">
                                <el-input
                                  type="textarea"
                                  :disabled="isDisabledDepiInfo"
                                  :rows="2"
                                  placeholder="Examens clinique"
                                  v-model="userDepiInfo.textarea4"
                                >
                                </el-input>
                              </el-col>
                            </el-row>
                            <el-divider></el-divider>
                            <el-row :gutter="10">
                              <el-col :span="8"> cardio-vasculaire </el-col>

                              <el-col :span="8">
                                <el-checkbox
                                  label="Oedémes"
                                  v-model="userDepiInfo.checkOedémes"
                                  :disabled="isDisabledDepiInfo"
                                ></el-checkbox>
                                <el-checkbox
                                  label="A la marche"
                                  v-model="userDepiInfo.checkAlamarchecv"
                                  :disabled="isDisabledDepiInfo"
                                ></el-checkbox>
                                <el-checkbox
                                  label="au repos"
                                  v-model="userDepiInfo.checkaurepos"
                                  :disabled="isDisabledDepiInfo"
                                ></el-checkbox>
                                <el-checkbox
                                  label="A l'efforts"
                                  v-model="userDepiInfo.checkAlefforts"
                                  :disabled="isDisabledDepiInfo"
                                ></el-checkbox>
                                <el-checkbox
                                  label="Permanents"
                                  v-model="userDepiInfo.checkPermanents"
                                  :disabled="isDisabledDepiInfo"
                                ></el-checkbox>
                                <el-checkbox
                                  label="palpitation"
                                  v-model="userDepiInfo.checkpalpitation"
                                  :disabled="isDisabledDepiInfo"
                                ></el-checkbox>
                              </el-col>

                              <el-col :span="8">
                                <el-input
                                  placeholder="Pouls"
                                  v-model="userDepiInfo.CVPouls"
                                  :disabled="isDisabledDepiInfo"
                                >
                                </el-input>
                                <el-input
                                  placeholder="T.A"
                                  v-model="userDepiInfo.CVTa"
                                  :disabled="isDisabledDepiInfo"
                                >
                                </el-input>
                                <el-input
                                  placeholder="Cyanose"
                                  v-model="userDepiInfo.CVCyanose"
                                  :disabled="isDisabledDepiInfo"
                                >
                                </el-input>
                              </el-col>
                            </el-row>
                            <el-divider></el-divider>
                            <el-row :gutter="10">
                              <el-col :span="8"> Respiratoire </el-col>

                              <el-col :span="8">
                                <el-checkbox
                                  label="Toux"
                                  v-model="userDepiInfo.checkToux"
                                  :disabled="isDisabledDepiInfo"
                                ></el-checkbox>
                                <el-checkbox
                                  label="Dyspnee nacturne"
                                  v-model="userDepiInfo.checkDyspneenacturne"
                                  :disabled="isDisabledDepiInfo"
                                ></el-checkbox>
                                <el-checkbox
                                  label="Dyspnee dlurne"
                                  v-model="userDepiInfo.checkDyspneedlurne"
                                  :disabled="isDisabledDepiInfo"
                                ></el-checkbox>
                                <el-checkbox
                                  label="Expectorations"
                                  v-model="userDepiInfo.checkExpectorations"
                                  :disabled="isDisabledDepiInfo"
                                ></el-checkbox>
                              </el-col>

                              <el-col :span="8">
                                <el-input
                                  type="textarea"
                                  :disabled="isDisabledDepiInfo"
                                  :rows="2"
                                  placeholder="Fréquence respiratoire"
                                  v-model="userDepiInfo.textarea6"
                                >
                                </el-input>
                              </el-col>
                            </el-row>
                            <el-divider></el-divider>
                            <el-row>
                              <el-col :span="8"> Digestif </el-col>

                              <el-col :span="8">
                                <el-checkbox
                                  :disabled="isDisabledDepiInfo"
                                  v-model="userDepiInfo.DigestifPyrosis"
                                  label="Pyrosis"
                                ></el-checkbox>
                                <el-checkbox
                                  :disabled="isDisabledDepiInfo"
                                  v-model="userDepiInfo.DigestifVomissements"
                                  label="Vomissements"
                                ></el-checkbox>
                                <el-input
                                  :disabled="isDisabledDepiInfo"
                                  placeholder="Appétit"
                                  v-model="userDepiInfo.DigestifAppétit"
                                >
                                </el-input
                                ><el-checkbox
                                  :disabled="isDisabledDepiInfo"
                                  v-model="userDepiInfo.checkDigestifAppétit"
                                ></el-checkbox>
                                <el-input
                                  :disabled="isDisabledDepiInfo"
                                  placeholder="Transit"
                                  v-model="userDepiInfo.DigestifTransit"
                                >
                                </el-input
                                ><el-checkbox
                                  :disabled="isDisabledDepiInfo"
                                  v-model="userDepiInfo.checkDigestifTransit"
                                ></el-checkbox>
                                <el-input
                                  :disabled="isDisabledDepiInfo"
                                  placeholder="Selles"
                                  v-model="userDepiInfo.DigestifSelles"
                                >
                                </el-input
                                ><el-checkbox
                                  :disabled="isDisabledDepiInfo"
                                  v-model="userDepiInfo.checkDigestifSelles"
                                ></el-checkbox>
                                <el-input
                                  :disabled="isDisabledDepiInfo"
                                  placeholder="Rectorragies"
                                  v-model="userDepiInfo.DigestifRectorragies"
                                >
                                </el-input
                                ><el-checkbox
                                  :disabled="isDisabledDepiInfo"
                                  v-model="
                                    userDepiInfo.checkDigestifRectorragies
                                  "
                                ></el-checkbox>
                                <el-input
                                  :disabled="isDisabledDepiInfo"
                                  placeholder="Douleur Abdominales"
                                  v-model="
                                    userDepiInfo.DigestifDouleurAbdominales
                                  "
                                >
                                </el-input
                                ><el-checkbox
                                  :disabled="isDisabledDepiInfo"
                                  v-model="
                                    userDepiInfo.checkDigestifDouleurAbdominales
                                  "
                                ></el-checkbox>
                                <el-input
                                  :disabled="isDisabledDepiInfo"
                                  placeholder="Autres"
                                  v-model="userDepiInfo.DigestifAutres"
                                >
                                </el-input
                                ><el-checkbox
                                  :disabled="isDisabledDepiInfo"
                                  v-model="userDepiInfo.checkDigestifAutres"
                                ></el-checkbox>
                              </el-col>

                              <el-col :span="8">
                                <el-input
                                  :disabled="isDisabledDepiInfo"
                                  placeholder="Denture:Carie:"
                                  v-model="userDepiInfo.DigestifDentureCarie"
                                >
                                </el-input>
                                <el-input
                                  :disabled="isDisabledDepiInfo"
                                  placeholder="Gingivopatie"
                                  v-model="userDepiInfo.DigestifGingivopatie"
                                >
                                </el-input>
                                <el-input
                                  :disabled="isDisabledDepiInfo"
                                  placeholder="autres"
                                  v-model="userDepiInfo.Digestifautres"
                                >
                                </el-input>
                                <el-input
                                  :disabled="isDisabledDepiInfo"
                                  placeholder="abdomens"
                                  v-model="userDepiInfo.Digestifabdomens"
                                >
                                </el-input>
                                <el-input
                                  :disabled="isDisabledDepiInfo"
                                  placeholder="Hernie"
                                  v-model="userDepiInfo.DigestifHernie"
                                >
                                </el-input>
                                <el-input
                                  placeholder="Foie"
                                  v-model="userDepiInfo.DigestifFoie"
                                  :disabled="isDisabledDepiInfo"
                                >
                                </el-input>
                              </el-col>
                            </el-row>
                            <el-divider></el-divider>
                            <el-row :gutter="10">
                              <el-col :span="8">
                                Hematologique et Ganglionnaire
                              </el-col>

                              <el-col :span="8">
                                <el-checkbox
                                  label="Ecchymoses"
                                  v-model="userDepiInfo.checkEcchymoses"
                                  :disabled="isDisabledDepiInfo"
                                ></el-checkbox>
                                <el-checkbox
                                  label="Tendances aux hémorragies"
                                  v-model="
                                    userDepiInfo.checkTendancesauxhémorragies
                                  "
                                  :disabled="isDisabledDepiInfo"
                                ></el-checkbox>
                              </el-col>

                              <el-col :span="8">
                                <el-input
                                  :disabled="isDisabledDepiInfo"
                                  placeholder="Pétéchies"
                                  v-model="userDepiInfo.HematologiquePétéchies"
                                >
                                </el-input>
                                <el-input
                                  :disabled="isDisabledDepiInfo"
                                  placeholder="Purpura"
                                  v-model="userDepiInfo.HematologiquePurpura"
                                >
                                </el-input>
                                <el-input
                                  :disabled="isDisabledDepiInfo"
                                  placeholder="Rate"
                                  v-model="userDepiInfo.HematologiqueRate"
                                >
                                </el-input>
                                Ganglions
                                <el-input
                                  :disabled="isDisabledDepiInfo"
                                  placeholder="Cervicaux"
                                  v-model="userDepiInfo.HematologiqueCervicaux"
                                >
                                </el-input>
                                <el-input
                                  :disabled="isDisabledDepiInfo"
                                  placeholder="Sous Auxillaires"
                                  v-model="
                                    userDepiInfo.HematologiqueSsAuxillaires
                                  "
                                >
                                </el-input>
                                <el-input
                                  :disabled="isDisabledDepiInfo"
                                  placeholder="Sous Claviculaires"
                                  v-model="
                                    userDepiInfo.HematologiqueSsClaviculaires
                                  "
                                >
                                </el-input>
                                <el-input
                                  :disabled="isDisabledDepiInfo"
                                  placeholder="Ingionaux"
                                  v-model="userDepiInfo.HematologiqueIngionaux"
                                >
                                </el-input>
                              </el-col>
                            </el-row>
                            <el-divider></el-divider>
                            <el-row :gutter="10">
                              <el-col :span="8"> Endocrinologie </el-col>

                              <el-col :span="8">
                                Douleurs
                                <el-checkbox
                                  label="Obésité familiales"
                                  :disabled="isDisabledDepiInfo"
                                  v-model="userDepiInfo.checkObésitéfamiliales"
                                ></el-checkbox>
                                <el-checkbox
                                  label="A la marche"
                                  :disabled="isDisabledDepiInfo"
                                  v-model="userDepiInfo.checkAlamarche"
                                ></el-checkbox>
                              </el-col>

                              <el-col :span="8">
                                <el-input
                                  :disabled="isDisabledDepiInfo"
                                  placeholder="Tyroide"
                                  v-model="userDepiInfo.EndocrinologieTyroide"
                                >
                                </el-input>
                                <el-input
                                  :disabled="isDisabledDepiInfo"
                                  placeholder="Testicules"
                                  v-model="
                                    userDepiInfo.EndocrinologieTesticules
                                  "
                                >
                                </el-input>
                                <el-input
                                  :disabled="isDisabledDepiInfo"
                                  placeholder="Glandes Mammaires"
                                  v-model="
                                    userDepiInfo.EndocrinologieGlandesMammaires
                                  "
                                >
                                </el-input>
                              </el-col>
                            </el-row>
                            <el-divider></el-divider>

                            <el-row :gutter="10">
                              <el-col :span="8"> Profil Psychologique </el-col>

                              <el-col :span="8">
                                <el-input
                                  :disabled="isDisabledDepiInfo"
                                  type="textarea"
                                  :rows="3"
                                  placeholder="Interrogatoire"
                                  v-model="userDepiInfo.PsychoInterrogatoire"
                                >
                                </el-input>
                              </el-col>

                              <el-col :span="8">
                                <el-input
                                  :disabled="isDisabledDepiInfo"
                                  type="textarea"
                                  :rows="3"
                                  placeholder="Examens Clinique"
                                  v-model="userDepiInfo.PsychoExamensClinique"
                                >
                                </el-input>
                              </el-col>
                            </el-row>
                            <el-divider></el-divider>
                          </el-collapse-item>
                        </el-collapse>
                      </el-space>

                      <center>
                        <div v-if="isDisabledDepiInfo">
                          <el-space
                            ><el-button
                              icon="el-icon-edit"
                              class="savebtnant"
                              @click="modifierInfoDepi"
                            >
                              Modifier
                            </el-button></el-space
                          >
                        </div>
                        <div v-else>
                          <el-space
                            ><el-button
                              type="success"
                              icon="el-icon-check"
                              @click="saveDepiInfo"
                            >
                              Enregister
                            </el-button>
                            <el-button
                              type="danger"
                              icon="el-icon-delete"
                              @click="cancelInfoDepi"
                            >
                              Annuler
                            </el-button></el-space
                          >
                        </div>
                      </center>
                    </div>
                  </center>
                </el-card>
              </div>
            </el-scrollbar>
            <!-- ********************************************Examen Médical******************************************** -->
            <el-scrollbar v-show="radio1 === 'Examen Médical'">
              <el-card class="box-card">
                <el-space>
                  <el-row>
                    <el-col :span="12">
                      <el-card
                        @click="radio1 = 'examen clinique'"
                        class="examcard examcli"
                      >
                        <i class="fa fa-stethoscope"> </i>
                        <h3>Examen clinique</h3>
                        <p>Nombre d'elements :20</p>
                      </el-card>
                    </el-col>
                    <el-col :span="12">
                      <el-card
                        @click="radio1 = 'bilan paraclinique'"
                        class="examcard bilanpara"
                      >
                        <i class="fa fa-heartbeat"> </i>
                        <h3>Bilan paraclinique</h3>
                        <p>Nombre d'elements :20</p>
                      </el-card>
                    </el-col>

                    <el-col :span="12">
                      <el-card
                        @click="radio1 = 'rapport medical'"
                        class="examcard rapmed"
                      >
                        <i class="fa fa-folder-open"> </i>
                        <h3>Rapport medical</h3>
                        <p>Nombre d'elements :20</p>
                      </el-card>
                    </el-col>
                    <el-col :span="12">
                      <el-card
                        @click="radio1 = 'ordonnances'"
                        class="examcard ord"
                      >
                        <i class="fa fa-medkit"> </i>
                        <h3>Ordonnances</h3>
                        <p>Nombre d'elements :20</p>
                      </el-card>
                    </el-col>

                    <el-col :span="12">
                      <el-card
                        @click="radio1 = 'orientations'"
                        class="examcard orient"
                      >
                        <i class="fa fa-user-md"> </i>
                        <h3>Orientations/ evaluations</h3>
                        <p>Nombre d'elements :20</p>
                      </el-card>
                    </el-col>
                  </el-row>
                </el-space>
              </el-card>
            </el-scrollbar>
            <!-- ****************************examen clinique: ilhem******************************* -->
            <el-scrollbar v-show="radio1 === 'examen clinique'">
              <el-card class="box-card">
                <el-empty :image-size="300">
                  <el-button
                    type="primary"
                    v-loading.fullscreen.lock="fullscreenLoading"
                    style="background-color: #24b4ab;width:100%;"
                    >Créer examen clinique</el-button
                  >
                </el-empty>
              </el-card>
            </el-scrollbar>
            <!-- ****************************bilan paraclinique: mahdi + rania******************************* -->
            <el-scrollbar v-show="radio1 === 'bilan paraclinique'">
              <el-card class="box-card">
                <el-empty :image-size="300">
                  <el-button
                    type="primary"
                    v-loading.fullscreen.lock="fullscreenLoading"
                    style="background-color: #24b4ab;width:100%;"
                    >Créer bilan paraclinique</el-button
                  >
                </el-empty>
              </el-card>
            </el-scrollbar>
            <!-- ****************************rapport medical: ali******************************* -->
            <el-scrollbar v-show="radio1 === 'rapport medical'">
              <el-card class="box-card">
                <el-empty :image-size="300">
                  <el-button
                    type="primary"
                    v-loading.fullscreen.lock="fullscreenLoading"
                    style="background-color: #24b4ab;width:100%;"
                    >Créer rapport medical</el-button
                  >
                </el-empty>
              </el-card>
            </el-scrollbar>
            <!-- ****************************ordonnances :noor el hooha :3 ******************************* -->
            <el-scrollbar v-show="radio1 === 'ordonnances'">
              <el-card class="box-card">
                <el-empty :image-size="300">
                  <el-button
                    @click="createOrdonnance(userselected); recoverMedicaments(); radio1 = 'nouvOrd';"
                    type="primary"
                    v-loading.fullscreen.lock="fullscreenLoading"
                    style="background-color: #24b4ab;width:100%;"
                    >Créer ordonnances</el-button                  >
                </el-empty>
              </el-card>
            </el-scrollbar>
            <!-- creer ordonnance -->
            <el-scrollbar v-show="radio1 === 'nouvOrd'">
              
              <el-card class="box-card">
                <div ref="contentord" style="padding: 0px 80px">
                  <p style="font-size:19px; text-align:center;">Ecole superieure d'informatique de Sidi Bel-Abbes</p>
                  <hr  style="width:50%; margin:auto; margin-bottom:5px">
                  <p style="font-size:17px; text-align:center; margin-bottom :0px">Dr Merabet </p>
                  <p style="font-size:17px;text-align:center;">Médecin Géneraliste </p>
                 <hr style="width:30%; margin:auto; margin-bottom:5px">
                <p style="font-size:27px; text-align:center; padding-top:5px; font-weight:500;text-decoration: underline;">Ordonnance</p>
                
                &nbsp; &nbsp;
                <div style="display:flex">
                  <div style="flex:50%">
                  <p style="font-size:17px;">Nom : &nbsp; {{ userselected.firstName }}</p>
                  <p style="font-size:17px;">prenom : &nbsp; {{ userselected.lastName }}</p>
                 
                </div>
                <div style="flex:50%">
                  <p style="font-size:17px;">Le :&nbsp; {{currentDate()}}</p>
                  <p style="font-size:17px;">Age : &nbsp; {{ userselected.age}}</p>

                </div>
                
                  </div>
                               
                <hr>
                <ol id="prescs">

                <li class="prescselement" style="margin: 1px 0px 20px 0px; " v-for="(pr,index) in prescs" :key= index v-bind:class="{floating : index === (prescs.length-1)}" >
                  <!-- <p style="float:left">{{index}} &nbsp; &nbsp;/</p> -->
                   <el-select v-model="pr.nom" filterable placeholder="nom de médicament">
                   <el-option
                      v-for="item in Medoptions"
                      :key="item.value"
                       :label="item.label"
                     :value ="item.value"
                     style="margin-right:20px">
                </el-option>
                </el-select>

                <el-select v-model="pr.forme" filterable placeholder="forme pharmaceutique et dosage ">
                <el-option
                 v-for="item in fpoptions"
                 :key="item.value"
                 :label="item.label"
                :value ="item.value"
                style="margin-right:20px"
                >
                 </el-option>
                </el-select>
                <el-input v-model="pr.posologie"
                style="width : 200px; margin-right:20px">

                </el-input>
                </li>
                </ol>
                <button @click="addprescinput(); " type="primary" style="padding:0px 13px 7px;background-color: #24b4ab;border-radius:50%; border:none; color:white ;font-size:25px; font-weight:500"> + </button>
                <hr>
                <p style="font-size:17px; font-weight:500; text-align:center">Ne laissez jamais les médicaments à la portée des enfants</p>
                <br>
                <div style="display:flex; ">
                  <el-button 
                    @click="createpdf();  "
                    type="primary"
                     style="background-color: #24b4ab;flex:50%; margin:0 30px"
                    >Créer </el-button > 
                       <el-button
                    @click="viewpdf(); addpresc() "
                    type="primary"
                     style="background-color: #24b4ab;flex:50%; margin:0 30px"
                    >view pdf </el-button > 
                </div>

                
                
                </div>
              </el-card>
              
            </el-scrollbar>
            <!-- ****************************orientations: lahcen ******************************* -->
            <el-scrollbar v-show="radio1 === 'orientations'">
              <el-card class="box-card">
                <el-empty :image-size="300">
                  <el-button
                    type="primary"
                    v-loading.fullscreen.lock="fullscreenLoading"
                    style="background-color: #24b4ab;width:100%;"
                    >Créer orientations</el-button
                  >
                </el-empty>
              </el-card>
            </el-scrollbar>
            <!-- ********************************************Statistique******************************************** -->
            <el-scrollbar v-show="radio1 === 'Statistique'">
              <el-card class="box-card">
                <el-empty :image-size="300">
                  <el-button
                    type="primary"
                    v-loading.fullscreen.lock="fullscreenLoading"
                    style="background-color: #24b4ab;width:100%;"
                    >Créer Statistique</el-button
                  >
                </el-empty>
              </el-card>
            </el-scrollbar>
            <!-- ********************************************RDV******************************************** -->
            <el-scrollbar v-show="radio1 === 'RDV'">
              <el-card class="box-card">
                <el-empty :image-size="300">
                  <el-button
                    type="primary"
                    v-loading.fullscreen.lock="fullscreenLoading"
                    style="background-color: #24b4ab;width:100%;"
                    >Créer RDV</el-button
                  >
                </el-empty>
              </el-card>
            </el-scrollbar>
            <!-- ********************************************end******************************************** -->
            <center>
              © Designed and Developed by linara it solutions 2021
            </center>
          </div>

          <!-- ********************** 3 ***************************** -->

          <div v-show="content === '3'" class="dossier">
            <div class="doctor">3</div>
            <center>
              © Designed and Developed by linara it solutions 2021
            </center>
          </div>
          <!-- ********************** 4 ***************************** -->

          <div v-show="content === '4'" class="dossier">
            <div class="doctor">4</div>
            <center>
              © Designed and Developed by linara it solutions 2021
            </center>
          </div>
          <!-- ********************** 5 ***************************** -->

          <div v-show="content === '5'" class="dossier">
            <div class="doctor">
              <br /><br /><br />
              5
            </div>
            <center>
              © Designed and Developed by linara it solutions 2021
            </center>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import jsPDF from 'jspdf';
import axios from "axios";
import DocServices from "@/services/DocServices.js";
export default {
  data() {
    return {
      items : [],
      isactive: true,
      fullscreenLoading: false,
      bgOptions: [
        {
          value: "O+",
          label: "O+",
        },
        {
          value: "O-",
          label: "O-",
        },
        {
          value: "A+",
          label: "A+",
        },
        {
          value: "A-",
          label: "A-",
        },
        {
          value: "B+",
          label: "B+",
        },
        {
          value: "B-",
          label: "B-",
        },
        {
          value: "AB+",
          label: "AB+",
        },
        {
          value: "AB-",
          label: "AB-",
        },
      ],
      sexeOptions: [
        {
          value: "HOMME",
          label: "HOMME",
        },
        {
          value: "FEMME",
          label: "FEMME",
        },
      ],
      stateOptions: [
        {
          value: "Etudiant",
          label: "Etudiant",
        },
        {
          value: "ATS",
          label: "ATS",
        },
      ],
      scolarYearOptions: [
        {
          value: "1CP",
          label: "1CP",
        },
        {
          value: "2CP",
          label: "2CP",
        },
        {
          value: "1CS",
          label: "1CS",
        },
        {
          value: "2CS",
          label: "2CS",
        },
        {
          value: "3CS",
          label: "3CS",
        },
      ],
      value: "",
      wilayaOptions: [],
      wilayaValue: [],
      wilayaList: [],
      wilayaLoading: false,
      wilaya: [
        "Adrar",
        "Aïn Defla",
        "Aïn Témouchent",
        "Alger",
        "Annaba",
        "Batna",
        "Béchar",
        "Béjaïa",
        "Béni Abbès",
        "Biskra",
        "Blida",
        "Bouira",
        "Boumerdès",
        "Bordj Badji Mokhtar",
        "Bordj Bou Arreridj",
        "Chlef",
        "Constantine",
        "Djanet",
        "Djelfa",
        "El Bayadh",
        "El Meniaa",
        "El M'Ghair",
        "El Oued",
        "El Tarf",
        "Ghardaïa",
        "Guelma",
        "Illizi",
        "In Guezzam",
        "In Salah",
        "Jijel",
        "Khenchela",
        "Laghouat",
        "Mascara",
        "Médéa",
        "Mila",
        "Mostaganem",
        "M'Sila",
        "Naâma",
        "Oran",
        "Ouargla",
        "Ouled Djellal",
        "Oum El Bouaghi",
        "Relizane",
        "Saïda",
        "Sétif",
        "Sidi Bel Abbès",
        "Skikda",
        "Souk Ahras",
        "Tamanrasset",
        "Tébessa",
        "Tiaret",
        "Tizi Ouzou",
        "Tindouf",
        "Tissemsilt",
        "Tipaza",
        "Timimoun",
        "Tlemcen",
        "Touggourt",
      ],
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
      radio1: "Dossier Médical",
      // this will represent every single info of the patient (DM,EX,RDV,STATISTICS)
      patientDM: "",

      //the data for personalInfo section****************************************************************************
      //BIOMETRIC
      responseimc: "0",
      userBiomInfo: {
        poids: 0,
        taille: 0,
        imc: 0,
      },
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
        numSS: null,
        state: null,
        scolarYear: null,
        category: null,
      },
      cachedUser: "",
      isDisabledPersInfo: true,
      catégorie: "",
      haveMF: false,
      //the data for Dépistage section****************************************************************************
      userDepiInfo: {
        idDI: "",
        typeDeVisite: "",
        docteurName: "Merabet ",
        poids: "",
        taille: "",
        DépistageDate1: "",
        auditionOD: "",
        auditionOG: "",
        AcuiteVisuelleSansCOD: "",
        AcuiteVisuelleSansCOG: "",
        AcuiteVisuelleAvecCOD: "",
        AcuiteVisuelleAvecCOG: "",
        checkedDouleurs: false,
        textarea1: "",
        textarea2: "",
        textarea3: "",
        textarea4: "",
        textarea5: "",
        textarea6: "",
        CVPouls: "",
        CVTa: "",
        CVCyanose: "",

        checkLarmoiement: false,
        checkDouleurs: false,
        checkTachesdevantlesyeux: false,

        checksifflements: false,
        checkAnginesrépétées: false,
        checkEpistaxis: false,
        checkRhinorhée: false,

        checkMusculaire: false,
        checkArticulaire: false,
        checkvertébraire: false,
        checkNeurologique: false,

        checkToux: false,
        checkDyspneenacturne: false,
        checkDyspneedlurne: false,
        checkExpectorations: false,

        checkOedémes: false,
        checkAlamarchecv: false,
        checkaurepos: false,
        checkAlefforts: false,
        checkPermanents: false,
        checkpalpitation: false,

        checkObésitéfamiliales: false,
        checkAlamarche: false,

        checkEcchymoses: false,
        checkTendancesauxhémorragies: false,

        DigestifDentureCarie: "",
        DigestifGingivopatie: "",
        Digestifautres: "",
        Digestifabdomens: "",
        DigestifHernie: "",
        DigestifFoie: "",
        DigestifAppétit: "",
        DigestifTransit: "",
        DigestifSelles: "",
        DigestifRectorragies: "",
        DigestifDouleurAbdominales: "",
        DigestifAutres: "",
        DigestifPyrosis: false,
        DigestifVomissements: false,
        checkDigestifAppétit: false,
        checkDigestifTransit: false,
        checkDigestifSelles: false,
        checkDigestifRectorragies: false,
        checkDigestifDouleurAbdominales: false,
        checkDigestifAutres: false,
        HematologiquePétéchies: "",
        HematologiquePurpura: "",
        HematologiqueRate: "",
        HematologiqueCervicaux: "",
        HematologiqueSsAuxillaires: "",
        HematologiqueSsClaviculaires: "",
        HematologiqueIngionaux: "",
        EndocrinologieTyroide: "",
        EndocrinologieTesticules: "",
        EndocrinologieGlandesMammaires: "",
        PsychoInterrogatoire: "",
        PsychoExamensClinique: "",
      },

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
      options1To10: [
        {
          value: 0,
          label: "0",
        },
        {
          value: 1,
          label: "1",
        },
        {
          value: 2,
          label: "2",
        },
        {
          value: 3,
          label: "3",
        },
        {
          value: 4,
          label: "4",
        },
        {
          value: 5,
          label: "5",
        },
        {
          value: 6,
          label: "6",
        },
        {
          value: 7,
          label: "7",
        },
        {
          value: 8,
          label: "8",
        },
        {
          value: 9,
          label: "9",
        },
        {
          value: 10,
          label: "10",
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
      activeNames: ["1"],

      handleChange(val) {
        console.log(val);
      },
      cachedUserdepistage: "",
      isDisabledDepiInfo: true,

      //  antecendents******************************************************************************
      userAntInfo: {
        boolFumer: "2",
        boolChiquer: "2",
        boolPrise: "2",
        ancienFum: "2",
        nbrFumer: "",
        nbrChiquer: "",
        nbrPrise: "",
        perExpo: "",
        alcool: "",
        medicat: "",
        autres: "none",
        affec: "none",
        malaGene: "none",
        intChiru: "none",
        reactMed: "none",
      },
      cashedUserAnt: "",
      isDisabledAnts: true,
      
      //Ordonnance
       ordselected :"none",

  
      prescs :[],
      
      
      Medoptions: [],
      fpoptions:[
        {
          value: "123",
          label: "123",
        },
         {
          value: "122",
          label: "122",
        },
         {
          value:"222",
          label: "222",
        },

      ]

      
    };

  },
  mounted: function() {
    axios
      .get("http://localhost:8083/doc/patients")
      .then((response) => {
        let x = 0;
        response.data.forEach((element) => {
          if (!(x === 0)) {
            this.patients.push(element);
          }
          x = x + 1;
        });
        this.userselected = this.patients[0];
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    this.wilayaList = this.wilaya.map((item) => {
      return { value: `${item}`, label: `${item}` };
    });
  },
  methods: {
     currentDate() {
      const current = new Date();
      const date = `${current.getDate()}-${current.getMonth()+1}-${current.getFullYear()}`;
      return date;
    },
  
    remoteMethod(query) {
      if (query !== "") {
        this.wilayaLoading = true;
        setTimeout(() => {
          this.wilayaLoading = false;
          this.wilayaOptions = this.wilayaList.filter((item) => {
            return item.label.toLowerCase().indexOf(query.toLowerCase()) > -1;
          });
        }, 200);
      } else {
        this.wilayaOptions = [];
      }
    },
    home() {
      this.content = "dashboard";
      axios
        .get("http://localhost:8083/doc/patients")
        .then((response) => {
          let x = 0;
          this.patients = [];
          response.data.forEach((element) => {
            if (!(x === 0)) {
              this.patients.push(element);
            }
            x = x + 1;
          });
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    stringToBoolean(string) {
      switch (string.toLowerCase().trim()) {
        case "true":
        case "yes":
        case "1":
          return true;
        case "false":
        case "no":
        case "0":
        case null:
          return false;
        default:
          return Boolean(string);
      }
    },

    BooleanToString(booleanVar) {
      if (booleanVar) {
        return "true";
      } else {
        return "false";
      }
    },

    ArrayToString(array) {
      alert(array);
      var str = array.toString();
      alert("str=" + str);
      return str;
    },
    stringToArray(str) {
      var result = str;
      result = [""];
      return result;
    },

    openFullScreen1() {
      this.fullscreenLoading = true;
      setTimeout(() => {
        this.fullscreenLoading = false;
      }, 1000);
    },
    openFullScreen3() {
      this.fullscreenLoading = true;
      setTimeout(() => {
        this.fullscreenLoading = false;
      }, 3000);
    },

    messageIfNoData() {
      this.$message({
        showClose: true,
        message: "Attention, ceci est un avertissement.",
        type: "warning",
        duration: 5000,
      });
    },
    messageSaveDone() {
      this.$message({
        showClose: true,
        message: "All modification have been saved",
        type: "success",
        duration: 4000,
      });
    },

    bmiCalculation() {
      var bmi =
        this.userBiomInfo.poids /
        ((this.userBiomInfo.taille / 100) * (this.userBiomInfo.taille / 100));
      this.userBiomInfo.imc = bmi;
      if (bmi < 25) {
        this.responseimc = "Low: " + bmi.toFixed(2) + " kg/m2";
      } else if (bmi >= 25 && bmi < 30) {
        this.responseimc = "Moderate: " + bmi.toFixed(2) + " kg/m2";
      } else if (bmi >= 30) {
        this.responseimc = "High: " + bmi.toFixed(2) + " kg/m2";
      }
    },
    createpdf() {
  let pdfName = 'test'; 
    var doc = new jsPDF();
    doc.text("Hello World", 10, 10);
    doc.save(pdfName + '.pdf');
 },
 viewpdf(){
   
    var doc = new jsPDF();
    doc.text("Hello World", 10, 10);
doc.output('dataurlnewwindow');          
 },
    async showPatient(user) {
      this.openFullScreen1();
      this.content = "dossier";
      this.userselected = user;
      try {
        const response = await DocServices.showPatient({
          id: user.id,
        });
        // am sending an attribute "haveDM"
        // haveDM : true => the patient haveDM => display the DM and hide the "créer le dossier médical" button
        // haveDM : false => the patient dont haveDM => display the "créer le dossier médical" button with some infos
        // this.patientDM = response
        this.haveMF = response.data.medFile.haveDM;
        this.userPersInfo = response.data.medFile.personalInfo;
        this.userDepiInfo = response.data.medFile.depistagelInfo;
        this.userBiomInfo = response.data.medFile.biometricInfo;

        this.userDepiInfo.checkedDouleurs = this.stringToBoolean(
          this.userDepiInfo.checkedDouleurs
        );
        this.userDepiInfo.DigestifPyrosis = this.stringToBoolean(
          this.userDepiInfo.DigestifPyrosis
        );
        this.userDepiInfo.DigestifVomissements = this.stringToBoolean(
          this.userDepiInfo.DigestifVomissements
        );
        this.userDepiInfo.checkDigestifAppétit = this.stringToBoolean(
          this.userDepiInfo.checkDigestifAppétit
        );
        this.userDepiInfo.checkDigestifTransit = this.stringToBoolean(
          this.userDepiInfo.checkDigestifTransit
        );
        this.userDepiInfo.checkDigestifSelles = this.stringToBoolean(
          this.userDepiInfo.checkDigestifSelles
        );
        this.userDepiInfo.checkDigestifRectorragies = this.stringToBoolean(
          this.userDepiInfo.checkDigestifRectorragies
        );
        this.userDepiInfo.checkDigestifDouleurAbdominales = this.stringToBoolean(
          this.userDepiInfo.checkDigestifDouleurAbdominales
        );
        this.userDepiInfo.checkDigestifAutres = this.stringToBoolean(
          this.userDepiInfo.checkDigestifAutres
        );

        this.userDepiInfo.checkLarmoiement = this.stringToBoolean(
          this.userDepiInfo.checkLarmoiement
        );
        this.userDepiInfo.checkDouleurs = this.stringToBoolean(
          this.userDepiInfo.checkDouleurs
        );
        this.userDepiInfo.checkTachesdevantlesyeux = this.stringToBoolean(
          this.userDepiInfo.checkTachesdevantlesyeux
        );

        this.userDepiInfo.checksifflements = this.stringToBoolean(
          this.userDepiInfo.checksifflements
        );
        this.userDepiInfo.checkAnginesrépétées = this.stringToBoolean(
          this.userDepiInfo.checkAnginesrépétées
        );
        this.userDepiInfo.checkEpistaxis = this.stringToBoolean(
          this.userDepiInfo.checkEpistaxis
        );
        this.userDepiInfo.checkRhinorhée = this.stringToBoolean(
          this.userDepiInfo.checkRhinorhée
        );

        this.userDepiInfo.checkMusculaire = this.stringToBoolean(
          this.userDepiInfo.checkMusculaire
        );
        this.userDepiInfo.checkArticulaire = this.stringToBoolean(
          this.userDepiInfo.checkArticulaire
        );
        this.userDepiInfo.checkvertébraire = this.stringToBoolean(
          this.userDepiInfo.checkvertébraire
        );
        this.userDepiInfo.checkNeurologique = this.stringToBoolean(
          this.userDepiInfo.checkNeurologique
        );

        this.userDepiInfo.checkToux = this.stringToBoolean(
          this.userDepiInfo.checkToux
        );
        this.userDepiInfo.checkDyspneenacturne = this.stringToBoolean(
          this.userDepiInfo.checkDyspneenacturne
        );
        this.userDepiInfo.checkDyspneedlurne = this.stringToBoolean(
          this.userDepiInfo.checkDyspneedlurne
        );
        this.userDepiInfo.checkExpectorations = this.stringToBoolean(
          this.userDepiInfo.checkExpectorations
        );

        this.userDepiInfo.checkOedémes = this.stringToBoolean(
          this.userDepiInfo.checkOedémes
        );
        this.userDepiInfo.checkAlamarchecv = this.stringToBoolean(
          this.userDepiInfo.checkAlamarchecv
        );
        this.userDepiInfo.checkaurepos = this.stringToBoolean(
          this.userDepiInfo.checkaurepos
        );
        this.userDepiInfo.checkAlefforts = this.stringToBoolean(
          this.userDepiInfo.checkAlefforts
        );
        this.userDepiInfo.checkPermanents = this.stringToBoolean(
          this.userDepiInfo.checkPermanents
        );
        this.userDepiInfo.checkpalpitation = this.stringToBoolean(
          this.userDepiInfo.checkpalpitation
        );

        this.userDepiInfo.checkObésitéfamiliales = this.stringToBoolean(
          this.userDepiInfo.checkObésitéfamiliales
        );
        this.userDepiInfo.checkAlamarche = this.stringToBoolean(
          this.userDepiInfo.checkAlamarche
        );

        this.userDepiInfo.checkEcchymoses = this.stringToBoolean(
          this.userDepiInfo.checkEcchymoses
        );
        this.userDepiInfo.checkTendancesauxhémorragies = this.stringToBoolean(
          this.userDepiInfo.checkTendancesauxhémorragies
        );
        
        


        console.log(response.data.medFile.depistagelInfo);
        // this.checkListOphtalmolodique = this.stringToArray(this.checkListOphtalmolodique)
        // this.userDepiInfo.checkListORL = this.stringToArray(this.userDepiInfo.checkListORL)
        //  this.userDepiInfo.checkListLocomoteur = this.stringToArray(this.userDepiInfo.checkListLocomoteur)
        //  this.userDepiInfo.checkListRespiratoire = this.stringToArray(this.userDepiInfo.checkListRespiratoire)
        //  this.userDepiInfo.checkListCardioVasculaire = this.stringToArray(this.userDepiInfo.checkListCardioVasculaire)
        //  this.userDepiInfo.checkListEndocrinologie = this.stringToArray(this.userDepiInfo.checkListEndocrinologie)
        //  this.userDepiInfo.checkListHematologique = this.stringToArray(this.userDepiInfo.checkListHematologique)
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
        this.openFullScreen3();
        this.haveMF = true;
        // this.userDepiInfo.idDI = response.data.mf.screeningInfoId;
        console.log(response.data);
      } catch (error) {
        this.error = error.response.data.error;
        console.log(this.error);
      }
    },
     
    //  handleChange(value) {
    // console.log(value);}

    async modifierInfoPers() {
      try {
        this.cachedUser = Object.assign({}, this.userPersInfo);
        this.isDisabledPersInfo = false;
        console.log("modifierInfoPers button was clicked !");
      } catch (error) {
        console.log("something went wrong");
      }
    },

    async cancelInfoPers() {
      try {
        this.userPersInfo = Object.assign({}, this.cachedUser);
        this.isDisabledPersInfo = true;
        console.log("cancelInfoPers button was clicked !");
      } catch (error) {
        console.log("something went wrong");
      }
    },

    async savePersInfo() {
      try {
        this.cachedUser = Object.assign({}, this.userPersInfo);
        this.isDisabledPersInfo = true;

        console.log("savePersInfo button was clicked !");
        console.log(this.userPersInfo);

        const response = await DocServices.savePersInfo({
          personalInfo: this.userPersInfo,
        });
        console.log(response.data);
      } catch (error) {
        console.log(`something went wrong ${error}`);
      }
    },

    async modifierInfoDepi() {
      try {
        this.cachedUserDepistage = Object.assign({}, this.userDepiInfo);
        this.isDisabledDepiInfo = false;
        console.log("modifierInfoDepi button was clicked !");
      } catch (error) {
        alert("something went wrong");
      }
    },
    async cancelInfoDepi() {
      try {
        this.userDepiInfo = Object.assign({}, this.cachedUserDepistage);
        this.isDisabledDepiInfo = true;
        console.log("cancelInfoDepi button was clicked !");
      } catch (error) {
        alert("something went wrong");
      }
    },
    async saveBiometricInfo() {
      try {
        this.cachedUser = Object.assign({}, this.userBiomInfo);
        console.log("save biominfo button was clicked !");
        console.log(this.userBiomInfo);
        const response = await DocServices.saveBiometricInfo({
          biometricInfo: this.userBiomInfo,
        });
        console.log(response.data);
        console.log("biom info done");
      } catch (error) {
        console.log(`something went wrong ${error}`);
      }
    },
    async saveDepiInfo() {
      try {
        this.cachedUserDepistage = Object.assign({}, this.userDepiInfo);
        this.isDisabledDepiInfo = true;
        console.log("saveDepiInfo button was clicked !");
        console.log(this.userDepiInfo);
        // this.checkListOphtalmolodique = this.checkListOphtalmolodique.toString();
        // this.userDepiInfo.checkListORL = this.userDepiInfo.checkListORL.toString().toString();
        //  this.userDepiInfo.checkListLocomoteur = this.userDepiInfo.checkListLocomoteur.toString();
        //  this.userDepiInfo.checkListRespiratoire = this.userDepiInfo.checkListRespiratoire.toString();
        //  this.userDepiInfo.checkListCardioVasculaire = this.userDepiInfo.checkListCardioVasculaire.toString();
        //  this.userDepiInfo.checkListEndocrinologie = this.userDepiInfo.checkListEndocrinologie.toString();
        //  this.userDepiInfo.checkListHematologique = this.userDepiInfo.checkListHematologique.toString();

        this.userDepiInfo.checkedDouleurs = this.BooleanToString(
          this.userDepiInfo.checkedDouleurs
        );
        this.userDepiInfo.DigestifPyrosis = this.BooleanToString(
          this.userDepiInfo.DigestifPyrosis
        );
        this.userDepiInfo.DigestifVomissements = this.BooleanToString(
          this.userDepiInfo.DigestifVomissements
        );
        this.userDepiInfo.checkDigestifAppétit = this.BooleanToString(
          this.userDepiInfo.checkDigestifAppétit
        );
        this.userDepiInfo.checkDigestifTransit = this.BooleanToString(
          this.userDepiInfo.checkDigestifTransit
        );
        this.userDepiInfo.checkDigestifSelles = this.BooleanToString(
          this.userDepiInfo.checkDigestifSelles
        );
        this.userDepiInfo.checkDigestifRectorragies = this.BooleanToString(
          this.userDepiInfo.checkDigestifRectorragies
        );
        this.userDepiInfo.checkDigestifDouleurAbdominales = this.BooleanToString(
          this.userDepiInfo.checkDigestifDouleurAbdominales
        );
        this.userDepiInfo.checkDigestifAutres = this.BooleanToString(
          this.userDepiInfo.checkDigestifAutres
        );

        this.userDepiInfo.checkLarmoiement = this.BooleanToString(
          this.userDepiInfo.checkLarmoiement
        );
        this.userDepiInfo.checkDouleurs = this.BooleanToString(
          this.userDepiInfo.checkDouleurs
        );
        this.userDepiInfo.checkTachesdevantlesyeux = this.BooleanToString(
          this.userDepiInfo.checkTachesdevantlesyeux
        );

        this.userDepiInfo.checksifflements = this.BooleanToString(
          this.userDepiInfo.checksifflements
        );
        this.userDepiInfo.checkAnginesrépétées = this.BooleanToString(
          this.userDepiInfo.checkAnginesrépétées
        );
        this.userDepiInfo.checkEpistaxis = this.BooleanToString(
          this.userDepiInfo.checkEpistaxis
        );
        this.userDepiInfo.checkRhinorhée = this.BooleanToString(
          this.userDepiInfo.checkRhinorhée
        );

        this.userDepiInfo.checkMusculaire = this.BooleanToString(
          this.userDepiInfo.checkMusculaire
        );
        this.userDepiInfo.checkArticulaire = this.BooleanToString(
          this.userDepiInfo.checkArticulaire
        );
        this.userDepiInfo.checkvertébraire = this.BooleanToString(
          this.userDepiInfo.checkvertébraire
        );
        this.userDepiInfo.checkNeurologique = this.BooleanToString(
          this.userDepiInfo.checkNeurologique
        );

        this.userDepiInfo.checkToux = this.BooleanToString(
          this.userDepiInfo.checkToux
        );
        this.userDepiInfo.checkDyspneenacturne = this.BooleanToString(
          this.userDepiInfo.checkDyspneenacturne
        );
        this.userDepiInfo.checkDyspneedlurne = this.BooleanToString(
          this.userDepiInfo.checkDyspneedlurne
        );
        this.userDepiInfo.checkExpectorations = this.BooleanToString(
          this.userDepiInfo.checkExpectorations
        );

        this.userDepiInfo.checkOedémes = this.BooleanToString(
          this.userDepiInfo.checkOedémes
        );
        this.userDepiInfo.checkAlamarchecv = this.BooleanToString(
          this.userDepiInfo.checkAlamarchecv
        );
        this.userDepiInfo.checkaurepos = this.BooleanToString(
          this.userDepiInfo.checkaurepos
        );
        this.userDepiInfo.checkAlefforts = this.BooleanToString(
          this.userDepiInfo.checkAlefforts
        );
        this.userDepiInfo.checkPermanents = this.BooleanToString(
          this.userDepiInfo.checkPermanents
        );
        this.userDepiInfo.checkpalpitation = this.BooleanToString(
          this.userDepiInfo.checkpalpitation
        );

        this.userDepiInfo.checkObésitéfamiliales = this.BooleanToString(
          this.userDepiInfo.checkObésitéfamiliales
        );
        this.userDepiInfo.checkAlamarche = this.BooleanToString(
          this.userDepiInfo.checkAlamarche
        );

        this.userDepiInfo.checkEcchymoses = this.BooleanToString(
          this.userDepiInfo.checkEcchymoses
        );
        this.userDepiInfo.checkTendancesauxhémorragies = this.BooleanToString(
          this.userDepiInfo.checkTendancesauxhémorragies
        );

        const response = await DocServices.saveDepiInfo({
          DepistageInfo: this.userDepiInfo,
        });
        this.userDepiInfo = Object.assign({}, this.cachedUserDepistage);
        this.messageSaveDone();
        console.log(response.data);
      } catch (error) {
        console.log(`something went wrong ${error}`);
      }
    },
    // recover medicaments

   async recoverMedicaments() {
    try {
      const response = await DocServices.recoverMedicaments()
      let list=[];
    response.data.medicaments.map(function(value) {
     list.push({value: value.nom, label : value.nom });
     
     });
        // response.data.forEach((element) => {
        //    let allm = []

        //    for (f in response.data) {
        //    allm.push({
        //     fieldName: f,
        //       message: formerList[f]
        //    })
        // }})
        this.Medoptions=list;
      console.log(list);
       
    } catch (error) {
      console.log(`something went wrong ${error}`);
    }
   },
    async createOrdonnance(user) {
      try {
        const response = await DocServices.createOrdonnance({
          id: user.id,
        });
        this.ordselected=response.data.ord.id;
        this.addprescinput();

        console.log(response.data);
      } catch (error) {
        this.error = error.response.data.error;
        console.log(this.error);
      }
    },
    async addprescinput() {
      
     await this.prescs.push({
      
      nom: "",
      forme: "",
      posologie: "",
      ordonnanceId: this.ordselected,
      })
    },

     async addpresc(){
       try {
         
        //  this.prescription.ordonnanceId = OrdonnanceId;
         
        const response = await DocServices.addpresc({
         
          presc :this.prescs
        });
        console.log(this.prescs);
        
        console.log(response.data);
      } catch (error) {
        this.error = error.response.data.error;
        console.log(this.error);
      }
     }
  },
  //antecedents*****************************************************************************************
  async modifierAntecedents() {
    try {
      this.cachedUser = Object.assign({}, this.userAntInfo);
      this.isDisabledAnts = false;
      console.log("modifierAntecedents button was clicked !");
    } catch (error) {
      console.log("something went wrong");
    }
  },
  async annulerAntecedents() {
    try {
      this.userAntInfo = Object.assign({}, this.cachedUser);
      this.isDisabledAnts = true;
      console.log("annulerAntecedents button was clicked !");
    } catch (error) {
      console.log("something went wrong");
    }
  },
  async saveAntecedents() {
    try {
      this.cachedUser = Object.assign({}, this.userAntInfo);
      this.isDisabledAnts = true;
      console.log("saveAntcedents button was clicked !");
      console.log(this.userAntInfo);

      const response = await DocServices.saveAntecedents({
        antecedentsInfo: this.userAntInfo,
      });
      console.log(response.data);
    } catch (error) {
      console.log(`something went wrong ${error}`);
    }
  },
   
   async saveOrdonnance() {
    try {

      this.cachedUser = Object.assign({}, this.userAntInfo);
      console.log("saveOrd button was clicked !");
      console.log(this.userAntInfo);

      const response = await DocServices.saveAntecedents({
        antecedentsInfo: this.userAntInfo,
      });
      console.log(response.data);
    } catch (error) {
      console.log(`something went wrong ${error}`);
    }
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
.boxRDV {
  width: 97%;
  margin: 20px;
  padding-right: 50px;
  border-radius: 15px;
}
.el-row {
  margin-bottom: 20px;
}

.el-col {
  border-radius: 4px;
}
.gauche {
  float: right;
  width: 70px;
}
.droite {
  margin-right: 20px;
  float: left;
  margin-top: 5px;
  width: 85px;
}
#biom {
  width: 350px;
  padding-top: 0px;
}
#imcValue {
  padding: 7px;
  margin-left: 10px;
  width: 150px;
}
.savebtnant:hover {
  color: #24b4ab;
  background-color: white;
}
.savebtnant {
  color: white;
  background-color: #24b4ab;
  float: right;
}

.dashboardTable {
  border-collapse: collapse;
  box-shadow: 0 5px 10px #e1e5ee;
  background-color: white;
  text-align: left;
  overflow: hidden;
  width: 100%;
}
.dashboardTablethead {
  box-shadow: 0 5px 10px #e1e5ee;
}

.dashboardTableth {
  padding: 1rem 2rem;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  font-size: 0.7rem;
  font-weight: 900;
}

.dashboardtabletd {
  padding: 1rem 2rem;
}

.dashboardtableA {
  text-decoration: none;
  color: #2962ff;
}

.status {
  border-radius: 0.2rem;
  background-color: red;
  padding: 0.2rem 1rem;
  text-align: center;
}
.status-pending {
  background-color: #fff0c2;
  color: #a68b00;
}

.status-paid {
  background-color: #c8e6c9;
  color: #388e3c;
}

.status-unpaid {
  background-color: #ffcdd2;
  color: #c62828;
}

.amount {
  text-align: right;
}

.dashboardTabletr:nth-child(even) {
  background-color: #f4f6fb;
}
.examcard {
  align-items: center;
  text-align: center;
  margin: 1%;
  background-size: cover;
  border: none;
}
.examcli {
  background-image: url("https://images.unsplash.com/photo-1557825835-a526494be845?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80");
}
.bilanpara {
  background-image: url("https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGRvY3RvcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60");
}
.rapmed {
  background-image: url("https://images.unsplash.com/photo-1554224155-1696413565d3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZmlsZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60");
}
.ord {
  background-image: url("https://images.unsplash.com/photo-1622227922682-56c92e523e58?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aG9zcGl0YWwlMjBzaWdufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60");
}
.orient {
  background-image: url("https://images.unsplash.com/photo-1485848395967-65dff62dc35b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=749&q=80");
}
.examcard i {
  font-size: 5rem;
  color: white;
}
.examcard h3,
.examcard p {
  color: white;
  text-shadow: 2px 2px 8px grey;
}
#prescs, .prescselement{
  list-style-type: decimal;
}
.floating{
  float:left;
}
</style>
