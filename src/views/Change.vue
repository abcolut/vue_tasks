<template>
  <section>
    <h3>Change task</h3>
    <div class="item">
      <span class="title">
        Task title:
      </span> 
      <br>{{name}}
    </div>
    <div class="item">
      <span class="title">
        Tags:
      </span> 
      <br>{{tags}}
    </div>
    <div class="item">
      <span class="title">
        Data:
      </span> 
      <Datepicker v-model="dat" /> 
    </div>
    <div class="item">
      <span class="title">
        Status:
      </span> 
      <button @click="changeStatus"> {{status}} </button>
    </div>
    <div class="item">
      <span class="title">
        Desc:
      </span> 
      <br><textarea v-model="desc" placeholder="Task description (2048char)"></textarea>
    </div>

    <button @click="changeData()">Change</button>

    <br>currentTask: {{currentTask}} 
    <br>currentTaskId: {{currentTaskId}} 

</section>
</template>


<script>
  import {mapGetters} from 'vuex'; 
  import Datepicker from 'vuejs-datepicker';

  export default {
    name: 'change',
    components:{ Datepicker },
    data(){
      return{
        name: null,
        tags: null,
        dat: null,
        desc: null,
        status: null,
      }
    },
    computed:{   
      //...mapGetters({ tasks: 'getTasks' }),  
      ...mapGetters({ currentTaskId: 'getCurrentTaskId' }),     
      currentTask:{
       get(){
         var q =this.$store.getters["getCurrentTask"]
         this.name = q.name
         this.tags = q.tags
         this.dat = q.dat
         this.desc = q.desc
         this.status = q.status
         return q;
       }
      },

    },
    methods:{
      changeStatus(){
        if (this.status == "close") {
          this.status = "work"
        } else{
          this.status = "close"
        }
      },
      changeData(){
        this.$store.commit("changeTask", {name:this.name, tags:this.tags, dat:this.dat, desc:this.desc, status:this.status})  
        this.$router.push({name:"list"})      
      }
    }
}
</script>

<style scoped>
.item{
  margin-bottom:20px;
}
.title{
  font-weight:bold;
}
</style>