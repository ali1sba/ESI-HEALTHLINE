<template>
  <div class="Resetpw">
  {{data}} <br/>
  {{str}}
 
  <el-button @click=" funct(data )">Défaut</el-button>
     
  </div>
</template>

<script>
 
  export default {
    data () {
      return{
        data : ['','laiu','jsfhb'],
        str : ''
      }
    },
    // the response of the click
    methods : {
     funct(data ){
        this.str = data.toString();

     },
    }
  }

</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
