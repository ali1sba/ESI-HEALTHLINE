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
  <el-menu-item index="1" @click="section = 1">HealtheLine</el-menu-item>
  <el-menu-item index="4" @click="section = 2">Profile</el-menu-item>
</el-menu>
    <nav role="navigationAdmin">
      <ul class="mainAssistant">
        <div id="dashboard_btn" @click="section = 1">
          <li class="dashboardAdmin"><a href="#/Assistant">RDV groupés</a></li>
        </div>
        <div id="dashboard_btn" @click="recoverRDVI()">
          <li class="dashboardAdmin"><a href="#/Assistant">RDV individuels</a></li>
        </div>
      </ul>
    </nav>
    <main role="mainAdmin">
      <div class="section1Assistant">
        <section v-if="section === 1" id="section1">
          <section class="panel important">
              <el-card class="box-card">
                  <h2>RDV groupés</h2>
                   <el-card   class="cardGris">
                        <el-row>
                          <el-col :span="7">Type de RDV</el-col>
                          <el-col :span="10">Date And Time</el-col>
                          <el-col :span="7">Note</el-col>
                        </el-row>
                        <!-- <el-button type="" style="align-items: right;" @click="ConsulterRapportMedical(Rapp)">consulter</el-button> -->
                    
                      </el-card>
                  <el-timeline style="margin:1% 0% 0% 0%;">
                    <el-timeline-item  placement="top" v-for="Rdv in RDVList" :key="Rdv.id" >
                      <el-card   class="cardGris">
                        <el-row>
                          <el-col :span="7">{{Rdv.Type}}</el-col>
                          <el-col :span="10">{{Rdv.DateAndTime}}</el-col>
                          <el-col :span="7">{{Rdv.Note}}</el-col>
                        </el-row>
                        <!-- <el-button type="" style="align-items: right;" @click="ConsulterRDV(Rdv)">Consulter</el-button> -->
                        <el-button type="" style="align-items: right;">Modifier</el-button>
                        <el-button type="" style="align-items: right;">Annuler</el-button>
                    
                      </el-card>
                    </el-timeline-item>
                  </el-timeline>
                  <el-button
                  type="primary"
                    @click="dialogRDVGroupFormVisible = true"
                    style="background-color: #24b4ab; width: 50%">
                    programmer un RDV
                    </el-button>
                  </el-card>

                  <el-dialog title=" Modifier un RDV " v-model="dialogRDVGroupFormVisible">
                    <el-form :model="form">
                      <el-form-item label="Groupe" :label-width="formLabelWidth">
                        <el-select placeholder="Sélectionnez le groupe">
                          <el-option label="consultation médical" value="consultation médical"></el-option>
                          <el-option label="suivi médical" value="suivi médical"></el-option>
                        </el-select>
                      </el-form-item>
                      <el-form-item label="type de RDV" :label-width="formLabelWidth">
                        <el-select placeholder="Sélectionnez un type">
                          <el-option label="consultation médical" value="consultation médical"></el-option>
                          <el-option label="suivi médical" value="suivi médical"></el-option>
                        </el-select>
                      </el-form-item>
                      <el-form-item label="Date" :label-width="formLabelWidth">
                        <el-date-picker
                          type="datetime"
                          placeholder="Selectionnez date et horaire"
                          :shortcuts="shortcuts">
                        </el-date-picker>
                      </el-form-item>
                      <el-form-item label="Note" :label-width="formLabelWidth">
                        <el-input placeholder="Note"></el-input>
                      </el-form-item>
                    </el-form>
                    <template #footer>
                      <span class="dialog-footer">
                        <el-button @click="dialogRDVGroupFormVisible = false">Annuler</el-button>
                        <el-button type="primary">Confirmer</el-button>
                      </span>
                    </template>
                  </el-dialog>
          </section>
        </section>
      </div>
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

                  <el-dialog title=" Programmer un RDV " v-model="dialogRDVIndivFormVisible">
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
                          :shortcuts="shortcuts">
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

                  <el-dialog title=" Modifier un RDV " v-model="dialogRDVIndivFormVisible2">
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
                          :shortcuts="shortcuts">
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
          radio2: 'Historique',
          radio3: 'Groupé',
          dialogRDVGroupFormVisible: false,
          dialogRDVIndivFormVisible: false,
          dialogRDVIndivFormVisible2: false,
          formLabelWidth:'120px',
          Patients: [],
          value: '',
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
