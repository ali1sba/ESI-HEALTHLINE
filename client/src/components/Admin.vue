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
    <div class="section1Admin">
    
      <section v-if="section === 1" id="section1">
        <section class="panel important">
            <h2>Les comptes a validée</h2>
            <ul>
              <li>Ici se retrouve tout les comptes qui attend toujours la validation de l'admin</li>
            </ul>
          </section>
        <el-table
          :data="users"
          style="width: 100%">
          <el-table-column
            label="name"
            width="180">
            <template #default="scope">
              <span style="margin-left: 10px">{{ scope.row.firstName }} {{ scope.row.lastName }}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="email"
            width="180">
            <template #default="scope">
                 <span style="margin-left: 10px">{{ scope.row.email }}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="numuro telephone"
            width="180">
            <template #default="scope">
                 <span style="margin-left: 10px">{{ scope.row.phoneNum }}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="Operations">
            <template #default="scope">
              <el-button
                size="mini"
                @click="validateUser(scope.$index, scope.row)">Valider</el-button>
              <el-button
                size="mini"
                type="danger"
                @click="deleteUser(scope.$index, scope.row)">Supp</el-button>
            </template>
            
          </el-table-column>
          
        </el-table>
        
      </section>
      </div>
            <section v-if="section === 2" id="section2">
             <section class="panel important">
            <h2>Tout les comptes dans le site</h2>
            <ul>
              <li>Ici se retrouve tout les comptes qui sont deja validée</li>
            </ul>
          </section>
            
          <el-table
          :data="usersvalidcomplet"
          >
          <el-table-column
            label="name"
            width="180">
            <template #default="scope" >
              <span style="margin-left: 10px">{{ scope.row.firstName }} {{ scope.row.lastName }}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="email"
            width="180">
            <template #default="scope">
                 <span style="margin-left: 10px">{{ scope.row.email }}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="numuro telephone"
            width="180">
            <template #default="scope">
                 <span style="margin-left: 10px">{{ scope.row.phoneNum }}</span>
            </template>
          </el-table-column>
           <el-table-column
            label="sexe"
            width="100">
            <template #default="scope">
                 <span style="margin-left: 10px">{{ scope.row.sexe}}</span>
            </template>
          </el-table-column>
           <el-table-column
            label="Annee Scolaire"
            width="80">
            <template #default="scope">
                 <span style="margin-left: 10px">{{ scope.row.scolarYear }}</span>
            </template>
          </el-table-column>
           <el-table-column
            label="State"
            width="120">
            <template #default="scope">
                 <span style="margin-left: 10px">{{ scope.row.state }}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="Operations">
            <template #default="scope">
              <el-button
                size="mini"
                type="success"
                v-if="scope.row.compteState === 'DESACTIVATED'"
                @click="activateUser(scope.row)">Activate</el-button>
                <el-button
                size="mini"
                type="danger"
                v-if="scope.row.compteState === 'ACTIVATED'"
                @click="desactivateUser(scope.row)">Desactivate</el-button>
            </template>
            
            
          </el-table-column>
        </el-table>
       



          <!--  <thead>
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
                  <td id="Email">/</td>
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
              </thead> -->
      </section>
      <section v-if="section === 3" id="section3">
        <div >
        <el-row class="formrow">
  <el-col class="firsthalf" :span="20">
    <div class=" coldiv grid-content bg-purple">
      <!-- first row logo part -->
   <el-row>
     <el-col class="formlogo" :span="6"><img src="logo.png" ></el-col>
   </el-row> 
   <div class="formelems">
   <!-- second row name  -->
   <el-row> 
   <el-col class="m1" :span="10"><el-input v-model="lastName" placeholder="nom" required></el-input><div class="invalid-feedback">  Valid last name is required. </div></el-col> 
   <el-col :span="10"><el-input v-model="firstName" placeholder="prenom" required></el-input><div class="invalid-feedback">  Valid first name is required. </div></el-col>  
   </el-row> 
   <!-- third row input --> 
   <el-row>
     <el-col :span="20"><el-input v-model="email" placeholder="email"></el-input></el-col> 
   </el-row>
   <!-- forth row input  -->
   <el-row>
     <el-col class="m1" :span="10"><el-input id="password" placeholder="mot de passe" v-model="password" show-password></el-input></el-col>
     <el-col :span="10"><el-input id="password2" placeholder="confirmer votre mot de passe" v-model="password2" show-password></el-input></el-col>
   </el-row>
   <!-- fifth row password  -->
   <el-row>
    <el-col :span="20"><el-input id="number" v-model="phoneNum" placeholder="numero de telephone"></el-input></el-col> 
   </el-row>
   <el-row>
      <!-- sixth row input  -->
   <el-col :span="7"><el-date-picker id="datenaiss" v-model="birthday" type="date" placeholder="date de naiss"> </el-date-picker></el-col>
   <!-- <el-col  style="margin-right:1%" :span="7"><el-input v-model="birthplace" placeholder="lieu de naissance" ></el-input> </el-col> -->
   <el-col  :span="7"><el-select id="exampleFormControlSelect1" v-model="sexe" placeholder="sexe">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" ></el-option>
   </el-select></el-col>
      <el-col style="margin-right:1%" :span="6"><el-select v-model="state">
        <el-option v-for="item in optionstate" :key="item.value" :label="item.label" :value="item.value" ></el-option>
      </el-select></el-col> 
    </el-row>
  <!-- seventh row year  -->
  <el-row>
    <el-col :span="6"><el-select v-model="scolarYear" v-if="state === 'Etudiant'" >
       <el-option v-for="item in optionyear" :key="item.value" :label="item.label" :value="item.value" ></el-option>
      </el-select></el-col>
       <el-col :span="6"><el-select v-model="role" v-if="state === 'ATS'" >
       <el-option v-for="item in optionroleATS" :key="item.value" :label="item.label" :value="item.value" ></el-option>
      </el-select></el-col>
    <div class="error" v-html="error" ></div>
  </el-row>
 <!-- sign up button  -->
  <el-row>
    <el-col :span="24"><el-button @click="register" type="primary" plain>s'inscrire</el-button></el-col>
    
  </el-row>
   </div>
  </div>
  </el-col>
 <!-- second half image  -->
  </el-row>
  <!-- styling goes here -->
  
  </div> 
  
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
      comptes: [],
      usersvalidcomplet: [{
        firstName: '',
        lastName: '',
        birthday: '',
        sexe: '',
        phoneNum: '',
        state: '',
        scolarYear: '',
        idCompte: '',
        email: '',
        role: '',
        compteState: '',
      }],

      
      student : "ATS",
      firstName: "",
      lastName: "",
      birthday: "",
      // birthplace: "",
      sexe: "Sexe",
      email: "",
      password: "",
      password2: "",
      phoneNum: "",
      state: "etat",
      scolarYear: "/",
      role: "Role",
      error: null,
       options: [{
          value: 'FEMME',
          label: 'FEMME'
        }, {
          value: 'HOMME',
          label: 'HOMME'
        }],
        value: '',
        optionstate: [{
          value: 'ATS',
          label: 'ATS'
        }, {
          value: 'Etudiant',
          label: 'Etudiant'
        }],
        valuestate: '',
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
          value: '2CS',
          label: '2CS'
          }, {
          value: '3CS',
          label: '3CS'
        }],
        optionroleATS: [{
          value: 'MED',
          label: 'MED'
        }, {
          value: 'ASSIS',
          label: 'ASSIS'
         }, {
          value: 'ADMINISTRATION',
          label: 'ADMINISTRATION'
          }, {
          value: 'PATIENT',
          label: 'PATIENT'
        }],
          valueyear: ''
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
        this.convertVTVC(this.usersvalid,this.usersvalidcomplet);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  
  axios
      .get("http://localhost:8083/admin/compte/")
      .then((response) => {
        this.comptes = response.data;
        this.convertCTVC(this.comptes,this.usersvalidcomplet);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    convertVTVC(V , VC){
      
      V.forEach(user => {
        VC.push({
        firstName: user.firstName,       
        lastName: user.lastName,
        birthday: user.birthday,
        sexe: user.sexe,
        phoneNum: user.phoneNum,
        state: user.state,
        scolarYear: user.scolarYear,
        idCompte: user.idCompte,
      });
        
      });
    },
    convertCTVC(C , VC){
      let i = 1;
      
      C.forEach(cmpte => {
        VC[i].email = cmpte.email;
        VC[i].role = cmpte.role;
        VC[i].compteState = cmpte.state;
        i = i+1;
      });
    },

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
           idcmpt: user.idCompte,
        });
        alert("desactivation sussecfull");
        console.log(response.data);
      } catch (error) {
        this.error = error.response.data.error;
        console.log(this.error);
      }

    },
    async activateUser(user) {
      console.log(user.email);

      try {
        const response = await adminservice.activateUser({
          idcmpt: user.idCompte,
        });
        alert("desactivation sussecfull");
        console.log(response.data);
      } catch (error) {
        this.error = error.response.data.error;
        console.log(this.error);
      }

    },
    async register() {
      try {
        if (this.password === this.password2){
          
          if (this.state === "Etudiant"){this.role= "PATIENT" }
          if (this.state === "ATS"){this.scolarYear= "/"}
          this.error = ''
          const response = await adminservice.register({
          firstName: this.firstName,
          lastName: this.lastName,
          birthday: this.birthday,
          // birthplace: this.birthplace,
          sexe: this.sexe,
          email: this.email,
          password: this.password,
          password2: this.password2,
          phoneNum: this.phoneNum,
          state: this.state,
          role:this.role,
          scolarYear: this.scolarYear          
        })
        alert("regiter successfull")
        console.log(response.data)
        } else {
          this.error = 'problem in confirmation of the password'
        }
       
        
        
       } catch (error) {
         this.error = error.response.data.error
         console.log(this.error)
       }

     
    },
    async switcher (state){
        this.student = state 
        if (!(this.student === 'Etudiant') ){
          this.scolarYear = '/'
        }
    },
  },
};
</script>



<style scoped>
</style>
<style>
.error {
  color: red;
}


.el-col{
 margin-top: 2%;
 width: 100%;
}

.firsthalf{
  margin:0;
  background-color: white;
  bottom: 0;
}
.formlogo{
 margin-left: 35%;
 
}

.formline{
  margin-left: 40%;
}

.coldiv{
  padding: 2% 0 2% 12% ;
}
.formrow{
  margin: 0;
  height: 100vh;
  background-size: cover;
}
.register{
  height: 100vh;
}
.m1{
margin-right: 0.3%;
padding: 0;
}
</style>

