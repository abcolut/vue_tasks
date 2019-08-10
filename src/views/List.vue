<template>
  <section>
    <h3>List of tasks</h3>
    <button @click="filterDo('')">No Filter</button> 
    <button @click="filterDo('work')">Filter (tasks in work)</button> 
    <button @click="filterDo('close')">Filter (close tasks)</button> 
    <button @click="filterDo('outdate')">Outdate tasks</button> 
    <br><br>Current filter: {{filter}}
    <br><br>
<hr>

    <div v-for="e,i of tasks" class="task" v-if="filterCheck(e)">
      
      <button @click="changeData(i)"> Change </button>
      <button @click="deleteString(i)"> Delete </button> 
       <font color=grey>{{e.dat}} </font>
       <b> {{e.name}} </b> 
       <i> {{e.tags}} </i>
       <span v-if="e.status=='work'">
         <font color=brown> {{e.status}} </font>
       </span> 
       <span v-else>
         <font color=blue> {{e.status}} </font>
       </span> 
       <font color=green>{{e.desc}} </font>
    </div>
  </section>
</template>


<script>
  import {mapGetters} from 'vuex'; 

  export default {
    name: 'list',
    components:{ },
    data(){
      return{
        filter:"",
      }
    },
    computed:{ 
      ...mapGetters({ tasks: 'getTasks' }),
    },
    methods:{
      filterCheck(e){
        let status = e.status;   
        if (this.filter == "") return true
        else{
          if ((this.filter == "work") && (status =="work")) return true
          if ((this.filter == "close") && (status =="close")) return true
          if (this.filter == "outdate"){
            let currentData = new Date()
            let taskData = new Date(e.dat)
            if (currentData > taskData) return true 
          }
             return false
        }
      },
      changeData(id){
        this.$store.commit("setCurrentId", id)     
        this.$router.push({name:"change"})
      },
      deleteString(id){
        this.$store.commit("deleteString", id)  
      },
      filterDo(v){
        console.log("filter",v)
        this.filter = v
      }
    }
}
</script>

<style scoped>
.task{
  margin:10px;
  padding-bottom:5px;
  border-bottom: 1px solid grey;
  white-space: nowrap;
}
button{
  margin:3px;
  padding:5px;
}
</style>