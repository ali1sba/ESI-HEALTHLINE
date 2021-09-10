<template>
  <div class="admin">
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
</el-menu>
<el-menu
  :default-active="activeIndex2"
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b">
  <el-menu-item index="1">HealtheLine</el-menu-item>
  <el-menu-item index="4">Profile</el-menu-item>
  <el-menu-item index="4" @click="logout">Logout</el-menu-item>
</el-menu>
    <nav role="navigationAdmin">
      <ul class="mainAssistant">
        <div id="dashboard_btn" @click="recoverRDVG()">
          <li class="dashboardAdmin"><a href="#/Assistant">RDV groupés</a></li>
        </div>
        <div id="dashboard_btn" @click="recoverRDVI()">
          <li class="dashboardAdmin"><a href="#/Assistant">RDV individuels</a></li>
        </div>
      </ul>
    </nav>
    <main role="mainAdmin">
      <!-- ********************************************** RDV GROUPE  ******************************************************* -->
      <div class="section1Assistant">
        <section v-if="section === 1" id="section1">
          <section class="panel important">
              <el-card class="box-card">
                  <h2>RDV groupés</h2>
                   <el-card   class="cardGris">
                      <el-row>
                        <el-col :span="6">Année/Groupe</el-col>
                        <el-col :span="6">Type de RDV</el-col>
                        <el-col :span="6">Date And Time</el-col>
                        <el-col :span="6">Note</el-col>
                      </el-row>
                  </el-card>
                  <el-timeline style="margin:1% 0% 0% 0%;">
                    <el-timeline-item  placement="top" v-for="Rdv in RDVGroupList" :key="Rdv.id" >
                      <el-card   class="cardGris">
                        <el-row>
                          <el-col :span="6">{{Rdv.ScolarYear}}/{{Rdv.Group}}</el-col>
                          <el-col :span="6">{{Rdv.Type}}</el-col>
                          <el-col :span="6">{{Rdv.DateAndTime}}</el-col>
                          <el-col :span="6">{{Rdv.Note}}</el-col>
                        </el-row>
                        <!-- <el-button type="" style="align-items: right;" @click="ConsulterRDV(Rdv)">Consulter</el-button> -->
                        <el-button type="" style="align-items: right;" @click="modifRDVGroup(Rdv)">Modifier</el-button>
                        <el-popconfirm
                          confirmButtonText="Oui"
                          cancelButtonText="Non"
                          icon="el-icon-info"
                          iconColor="red"
                          title="Etes-vous sur de vouloir Annuler ce RDV ?"
                          @confirm="annulerRDVGroup(Rdv)"
                          @cancel="cancelEvent"
                        >
                          <template #reference>
                            <el-button type="" style="align-items: right;">Annuler</el-button>
                          </template>
                        </el-popconfirm>
                      </el-card>
                    </el-timeline-item>
                  </el-timeline>
                  <el-button
                  type="primary"
                    @click="recoverGroups()"
                    style="background-color: #24b4ab; width: 50%">
                    programmer un RDV
                    </el-button>
                  </el-card>

                  <el-dialog title=" Programmer un RDV " v-model="dialogRDVGroupFormVisible" :before-close="annulerModifRDVGroup">
                    <el-form :model="form">
                      <el-form-item label="Année" :label-width="formLabelWidth">
                        <el-select v-model="rdvGroup.annee" filterable remote placeholder="Sélectionnez l'année scolaire">
                          <el-option
                            v-for="item in optionyear"
                            :key="item.value"
                            :label="item.label"
                            :value ="item.value"
                            style="margin-right:20px">
                          </el-option>
                        </el-select>
                      </el-form-item>
                      <el-form-item label="Groupe" :label-width="formLabelWidth">
                        <el-select v-model="rdvGroup.group" filterable remote placeholder="Sélectionnez le groupe">
                          <el-option
                            v-for="item in optiongroup"
                            :key="item.value"
                            :label="item.label"
                            :value ="item.value"
                            style="margin-right:20px">
                          </el-option>
                        </el-select>
                      </el-form-item>
                      <el-form-item label="type de RDV" :label-width="formLabelWidth">
                        <el-select v-model="rdvGroup.typeRDV" placeholder="Sélectionnez un type">
                          <el-option label="consultation médical" value="consultation médical"></el-option>
                          <el-option label="suivi médical" value="suivi médical"></el-option>
                        </el-select>
                      </el-form-item>
                      <el-form-item label="Date" :label-width="formLabelWidth">
                        <el-date-picker
                          v-model="rdvGroup.date"
                          type="datetime"
                          placeholder="Selectionnez date et horaire"
                          :shortcuts="shortcuts"
                          :default-time="defaultTime1"
                          :disabled-date="disabledDate">
                        </el-date-picker>
                      </el-form-item>
                      <el-form-item label="Note" :label-width="formLabelWidth">
                        <el-input v-model="rdvGroup.note" placeholder="Note"></el-input>
                      </el-form-item>
                    </el-form>
                    <template #footer>
                      <span class="dialog-footer">
                        <el-button @click="annulerProgRDVGroup()">Annuler</el-button>
                        <el-button type="primary" @click="progRDVGroup()">Confirmer</el-button>
                      </span>
                    </template>
                  </el-dialog>

                  <el-dialog title=" Modifier un RDV " v-model="dialogRDVGroupFormVisible2" :before-close="annulerModifRDVGroup">
                    <el-form :model="form">
                      <el-form-item label="Année" :label-width="formLabelWidth">
                        <el-select v-model="rdvGroupForm.ScolarYear" filterable remote disabled placeholder="Sélectionnez l'année scolaire">
                          <el-option
                            v-for="item in optionyear"
                            :key="item.value"
                            :label="item.label"
                            :value ="item.value"
                            style="margin-right:20px">
                          </el-option>
                        </el-select>
                      </el-form-item>
                      <el-form-item label="Groupe" :label-width="formLabelWidth">
                        <el-select v-model="rdvGroupForm.Group" filterable remote disabled placeholder="Sélectionnez le groupe">
                          <el-option
                            v-for="item in optiongroup"
                            :key="item.value"
                            :label="item.label"
                            :value ="item.value"
                            style="margin-right:20px">
                          </el-option>
                        </el-select>
                      </el-form-item>
                      <el-form-item label="type de RDV" :label-width="formLabelWidth">
                        <el-select v-model="rdvGroupForm.Type" placeholder="Sélectionnez un type">
                          <el-option label="consultation médical" value="consultation médical"></el-option>
                          <el-option label="suivi médical" value="suivi médical"></el-option>
                        </el-select>
                      </el-form-item>
                      <el-form-item label="Date" :label-width="formLabelWidth">
                        <el-date-picker
                          v-model="rdvGroupForm.DateAndTime"
                          type="datetime"
                          placeholder="Selectionnez date et horaire"
                          :shortcuts="shortcuts"
                          :disabled-date="disabledDate">
                        </el-date-picker>
                      </el-form-item>
                      <el-form-item label="Note" :label-width="formLabelWidth">
                        <el-input v-model="rdvGroupForm.Note" placeholder="Note"></el-input>
                      </el-form-item>
                    </el-form>
                    <template #footer>
                      <span class="dialog-footer">
                        <el-button @click="annulerModifRDVGroup()">Annuler</el-button>
                        <el-button type="primary" @click="confirmModifRDVGroup()">Confirmer</el-button>
                      </span>
                    </template>
                  </el-dialog>
          </section>
        </section>
      </div>
      <!-- ********************************************** RDV INDIVIDUEL  ******************************************************* -->
      <div class="section2Assistant">
        <section v-if="section === 2" id="section2">
          <section class="panel important">
              <el-card class="box-card">
                  <h2>RDV individuels</h2>
                   <el-card   class="cardGris">
                      <el-row>
                        <el-col :span="6">Patient</el-col>
                        <el-col :span="6">Type de RDV</el-col>
                        <el-col :span="6">Date And Time</el-col>
                        <el-col :span="6">Note</el-col>
                      </el-row>
                  </el-card>
                  <el-timeline style="margin:1% 0% 0% 0%;">
                    <el-timeline-item  placement="top" v-for="Rdv in RDVIndivList" :key="Rdv.id" >
                      <el-card   class="cardGris">
                        <el-row>
                          <el-col :span="6">{{Rdv.Patient}}</el-col>
                          <el-col :span="6">{{Rdv.Type}}</el-col>
                          <el-col :span="6">{{Rdv.DateAndTime}}</el-col>
                          <el-col :span="6">{{Rdv.Note}}</el-col>
                        </el-row>
                        <!-- <el-button type="" style="align-items: right;" @click="ConsulterRDV(Rdv)">Consulter</el-button> -->
                        <el-button type="" style="align-items: right;" @click="modifRDVIndiv(Rdv)">Modifier</el-button>
                        <el-popconfirm
                          confirmButtonText="Oui"
                          cancelButtonText="Non"
                          icon="el-icon-info"
                          iconColor="red"
                          title="Etes-vous sur de vouloir Annuler ce RDV ?"
                          @confirm="annulerRDVIndiv(Rdv)"
                          @cancel="cancelEvent"
                        >
                          <template #reference>
                            <el-button type="" style="align-items: right;">Annuler</el-button>
                          </template>
                        </el-popconfirm>
                      </el-card>
                    </el-timeline-item>
                  </el-timeline>
                  <el-button
                  type="primary"
                    @click="recoverPatients()"
                    style="background-color: #24b4ab; width: 50%">
                    programmer un RDV
                    </el-button>
                  </el-card>

                  <el-dialog title=" Programmer un RDV " v-model="dialogRDVIndivFormVisible" :before-close="annulerProgRDVIndividuel">
                    <el-form :model="form">
                      <el-form-item label="Patient" :label-width="formLabelWidth">
                        <el-select v-model="rdvIndiv.idPatient" filterable remote placeholder="Sélectionnez le patient">
                          <el-option
                            v-for="item in Patients"
                            :key="item.value"
                            :label="item.label"
                            :value ="item.value"
                            style="margin-right:20px">
                          </el-option>
                        </el-select>
                      </el-form-item>
                      <el-form-item label="type de RDV" :label-width="formLabelWidth">
                        <el-select v-model="rdvIndiv.typeRDV" placeholder="Sélectionnez un type">
                          <el-option label="consultation médical" value="consultation médical"></el-option>
                          <el-option label="suivi médical" value="suivi médical"></el-option>
                        </el-select>
                      </el-form-item>
                      <el-form-item label="Date" :label-width="formLabelWidth">
                        <el-date-picker
                          v-model="rdvIndiv.date"
                          type="datetime"
                          placeholder="Selectionnez date et horaire"
                          :shortcuts="shortcuts"
                          :default-time="defaultTime1"
                          :disabled-date="disabledDate">
                        </el-date-picker>
                      </el-form-item>
                      <el-form-item label="Note" :label-width="formLabelWidth">
                        <el-input v-model="rdvIndiv.note" placeholder="Note"></el-input>
                      </el-form-item>
                    </el-form>
                    <template #footer>
                      <span class="dialog-footer">
                        <el-button @click="annulerProgRDVIndividuel()">Annuler</el-button>
                        <el-button type="primary" @click="progRDVIndividuel()">Confirmer</el-button>
                      </span>
                    </template>
                  </el-dialog>

                  <el-dialog title=" Modifier un RDV " v-model="dialogRDVIndivFormVisible2" :before-close="annulerModifRDVIndividuel">
                    <el-form :model="form">
                      <el-form-item label="Patient" :label-width="formLabelWidth">
                        <el-select v-model="rdvIndivForm.Patient" filterable remote disabled>
                          <el-option
                            v-for="item in Patients"
                            :key="item.value"
                            :label="item.label"
                            :value ="item.value"
                            style="margin-right:20px">
                          </el-option>
                        </el-select>
                      </el-form-item>
                      <el-form-item label="type de RDV" :label-width="formLabelWidth">
                        <el-select v-model="rdvIndivForm.Type" placeholder="Sélectionnez un type">
                          <el-option label="consultation médical" value="consultation médical"></el-option>
                          <el-option label="suivi médical" value="suivi médical"></el-option>
                        </el-select>
                      </el-form-item>
                      <el-form-item label="Date" :label-width="formLabelWidth">
                        <el-date-picker
                          v-model="rdvIndivForm.DateAndTime"
                          type="datetime"
                          placeholder="Selectionnez date et horaire"
                          :shortcuts="shortcuts"
                          :disabled-date="disabledDate">
                        </el-date-picker>
                      </el-form-item>
                      <el-form-item label="Note" :label-width="formLabelWidth">
                        <el-input v-model="rdvIndivForm.Note" placeholder="Note"></el-input>
                      </el-form-item>
                    </el-form>
                    <template #footer>
                      <span class="dialog-footer">
                        <el-button @click="annulerModifRDVIndividuel()">Annuler</el-button>
                        <el-button type="primary" @click="confirmModifRDVIndividuel()">Confirmer</el-button>
                      </span>
                    </template>
                  </el-dialog>
          </section>
        </section>
      </div>
    </main>
  </div>
</template>

<script>
import AssisServices from "@/services/AssisServices.js"
export default {
  data() {
      return {
          disabledDate (time) {
            return time.getTime() < Date.now()
          },
          radio2: 'Historique',
          radio3: 'Groupé',
          formLabelWidth:'120px',
          defaultTime1: [
            new Date(2000, 1, 1, 10, 0, 0),
          ],
          value: '',
          // ************ RDV GROUP **********************
          dialogRDVGroupFormVisible: false,
          dialogRDVGroupFormVisible2: false,
          optionyear: [{
            value: '1CPI',
            label: '1CPI'
          }, {
            value: '2CPI',
            label: '2CPI'
          }, {
            value: '1CS',
            label: '1CS'
          }, {
            value: '2CS-ISI',
            label: '2CS-ISI'
          }, {
            value: '2CS-SIW',
            label: '2CS-SIW'
          }, {
            value: '3CS-ISI',
            label: '3CS-ISI'
          }, {
            value: '3CS-SIW',
            label: '3CS-SIW'
          }],
          optiongroup: [{
            value: 'G1',
            label: 'G1'
          }, {
            value: 'G2',
            label: 'G2'
          }, {
            value: 'G3',
            label: 'G3'
          }, {
            value: 'G4',
            label: 'G4'
          }, {
            value: 'G5',
            label: 'G5'
          }],
          rdvGroup: {
            annee: '',
            group: '',
            typeRDV: '',
            date: '',
            note: ''
          },
          rdvGroupForm: {
            idRDV: '',
            annee: '',
            group: '',
            typeRDV: '',
            date: '',
            note: ''
          },
          RDVGroupList: [],
          // ************ RDV INDIV **********************
          dialogRDVIndivFormVisible: false,
          dialogRDVIndivFormVisible2: false,
          Patients: [],
          rdvIndiv: {
            idPatient: '',
            typeRDV: '',
            date: '',
            note: ''
          },
          rdvIndivForm: {
            idRDV: '',
            Patient: '',
            Type: '',
            DateAndTime: '',
            Note: ''
          },
          RDVIndivList: []
      }
  },
  mounted: function () {
  },
  methods: {
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$store.dispatch('setRole', null)
      this.$router.push('/')
    },
    // ************************************************ RDV groupés ********************************************
    async recoverRDVG () {
      try {
        this.section = 1
        const response = await AssisServices.recoverRDVG()
        this.RDVGroupList = response.data.rdv
      } catch (error) {
        console.log(`something went wrong ${error}`);
      }
    },

    async recoverGroups () {
      try {
        this.dialogRDVGroupFormVisible = true
        console.log("recoverGroups clicked")
      } catch (error) {
        console.log(`something went wrong ${error}`);
      }
    },

    async progRDVGroup () {
      try {
        console.log(this.rdvGroup)
        const response = await AssisServices.progRDVGroup({
          rdv: this.rdvGroup
        })
        console.log(response.data)
        this.recoverRDVG()
        this.dialogRDVGroupFormVisible = false
        this.rdvGroup = {
          annee: '',
          group: '',
          typeRDV: '',
          date: '',
          note: ''
        }
      } catch (error) {
        console.log(`something went wrong ${error}`);
      }
    },

    async annulerProgRDVGroup () {
      try {
        this.dialogRDVGroupFormVisible = false
        this.rdvGroup = {
          annee: '',
          group: '',
          typeRDV: '',
          date: '',
          note: ''
        }
        this.recoverRDVG()
      } catch (error) {
        console.log(`something went wrong ${error}`);
      }
    },

    async modifRDVGroup (rdv) {
      try {
        this.rdvGroupForm = rdv
        this.dialogRDVGroupFormVisible2 = true
      } catch (error) {
        console.log(`something went wrong ${error}`);
      }
    },

    async confirmModifRDVGroup () {
      try {
        console.log(this.rdvGroupForm)
        const response = await AssisServices.confirmModifRDVGroup({
          rdv: this.rdvGroupForm
        })
        console.log(response.data)
        this.recoverRDVG()
        this.dialogRDVGroupFormVisible2 = false
      } catch (error) {
        console.log(`something went wrong ${error}`);
      }
    },

    async annulerModifRDVGroup () {
      try {
        this.recoverRDVG()
        this.dialogRDVGroupFormVisible2 = false
        this.rdvGroupForm = {
          annee: '',
          group: '',
          typeRDV: '',
          date: '',
          note: ''
        }
      } catch (error) {
        console.log(`something went wrong ${error}`);
      }
    },

    async annulerRDVGroup (rdv) {
      try {
        const id = rdv.id
        const response = await AssisServices.annulerRDVGroup({
          idRDV: id
        })
        console.log(response.data)
        this.recoverRDVG()
      } catch (error) {
        console.log(`something went wrong ${error}`);
      }
    },

    // ********************************************** RDV individuels ******************************************
    async recoverRDVI () {
      try {
        this.section = 2
        const response = await AssisServices.recoverRDVI()
        this.RDVIndivList = response.data.rdv
        console.log(this.RDVIndivList)
      } catch (error) {
        console.log(`something went wrong ${error}`);
      }
    },
    
    async recoverPatients () {
      try {
        this.recoverRDVI()
        this.Patients = []
        this.dialogRDVIndivFormVisible = true
        const response = await AssisServices.recoverPatients()
        console.log(response.data)
        const cPatients = response.data.patients
        cPatients.forEach(element => {
          console.log(element)
          this.Patients.push({value: element.id, label : element.lastName+" "+element.firstName})
        });
        console.log(this.Patients)
      } catch (error) {
        console.log(`something went wrong ${error}`);
      }
    },

    async progRDVIndividuel () {
      try {
        console.log(this.rdvIndiv)
        const response = await AssisServices.progRDVIndividuel({
          rdv: this.rdvIndiv
        })
        console.log(response.data)
        this.recoverRDVI()
        this.dialogRDVIndivFormVisible = false
        this.rdvIndiv = {
          idPatient: '',
          typeRDV: '',
          date: '',
          note: ''
        }
      } catch (error) {
        console.log(`something went wrong ${error}`);
      }
    },

    async annulerProgRDVIndividuel () {
      try {
        this.dialogRDVIndivFormVisible = false
        this.rdvIndiv = {
          idPatient: '',
          typeRDV: '',
          date: '',
          note: ''
        }
        this.recoverRDVI()
      } catch (error) {
        console.log(`something went wrong ${error}`)
      }
    },

    async modifRDVIndiv (rdv) {
      try {
        this.rdvIndivForm = rdv
        this.dialogRDVIndivFormVisible2 = true
      } catch (error) {
        console.log(`something went wrong ${error}`);
      }
    },

    async confirmModifRDVIndividuel () {
      try {
        const response = await AssisServices.confirmModifRDVIndividuel({
          rdv: this.rdvIndivForm
        })
        console.log(response.data)
        this.recoverRDVI()
        this.dialogRDVIndivFormVisible2 = false
      } catch (error) {
        console.log(`something went wrong ${error}`);
      }
    },

    async annulerModifRDVIndividuel () {
      try {
        this.recoverRDVI()
        this.dialogRDVIndivFormVisible2 = false
        this.rdvIndivForm = {
          idRDV: '',
          Patient: '',
          Type: '',
          DateAndTime: '',
          Note: ''
        }
      } catch (error) {
        console.log(`something went wrong ${error}`)
      }
    },

    async annulerRDVIndiv (rdv) {
      try {
        const id = rdv.idRDV
        const response = await AssisServices.annulerRDVIndiv({
          idRDV: id
        })
        console.log(response.data)
        this.recoverRDVI()
      } catch (error) {
        console.log(`something went wrong ${error}`);
      }
    }
  }
};
</script>

<style scoped>

</style>
