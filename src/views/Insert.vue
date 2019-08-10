<template>
  <section>
    <h2>Add new task</h2>
    <div class="item"><span class="title">Task title:</span> <br><input v-model.lazy="name" placeholder="Task title"></div>
    <div class="item"><span class="title">Tags:</span> <br><input v-model.lazy="tags" placeholder="Tags"></div>
    <div class="item"><span class="title">Desc:</span> <br><textarea v-model.lazy="desc" placeholder="Task description (2048char)"></textarea></div>
    <div class="item"><span class="title">Data:</span> <Datepicker v-model.lazy="dat"></Datepicker> </div>

    <div class="item"> <button @click="sendData()" :disabled="checkDisabled()">Save task</button></div>
      <div v-for="er, i of errors">{{er}}</div>
  </section>
</template>


<script>
  import {mapGetters} from 'vuex'; 
  import Datepicker from 'vuejs-datepicker';

  export default {
    name: 'insert',
    components:{ Datepicker },
    data(){
      return{
        name: null,
        tags: null,
        desc: null,
        dat: null,
        errors: [null, null, "", ""],
      }
    },
    computed:{ 
    },    
    watch: {
      name(data){
        if (this.name.length >5) {
          this.errors[0] = ""
        }else {
          this.errors[0] = 'the TITLE need to be more then 5 chars '
        }
      },
      tags(data){
        if (this.tags.length >5) {
          this.errors[1] = ""
        }else {
          this.errors[1] = 'the TAGS need to be more then 5 chars '
        }
      },
      desc(data){
        if (this.desc.length <2048) {
          this.errors[2] = ""
        }else {
          this.errors[2] = 'the DESC need to be less then 2048 chars '
        }
      },
    },

    methods:{
      checkDisabled(){
          for (var i = 0; i < this.errors.length; i++){
            if (this.errors[i] != "") return true
          }
        return false
      },

      sendData(){
        this.$store.commit("insert",{name:this.name, tags:this.tags, desc:this.desc, data:this.dat})
        this.$router.push({name:"list"})
      }
    },
    mounted(){
      this.dat = new Date();
    }
}
</script>

<style scoped>
.item{
  margin:10px;
}
.title{
  font-weight:bold;
}
</style>