<template>
    <div class="Patient">    
        <h2>Dashboard</h2>    
        <p>Hi patient: {{ user.name }}</p>
        <el-button @click="logout">Logout</el-button> 
    </div>
</template>
<script>
    import axios from "axios"    
    import router from "../router"    
    export default {    
        name: "Login",    
        data() {    
            return {    
                user: {    
                    name:""    
                }    
            }    
        },    
        methods: {    
            getUserData: function() {    
                let self = this    
                axios.get("/api/user")    
                    .then((response) => {    
                        console.log(response)    
                        self.$set(this, "user", response.data.user)    
                    })    
                    .catch((errors) => {    
                        console.log(errors)    
                        router.push("/")    
                    })    
            }    
        },    
        mounted() {    
            this.getUserData()    
        }    
    }
</script>