import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		tasks: [],
		currentTaskId: null,
	},	
	getters: {
		getTasks(state){ return state.tasks },
		getCurrentTaskId(state){ return state.currentTaskId },
		getCurrentTask(state){ return state.tasks[state.currentTaskId] },
	},
	mutations: {
		setCurrentId(state, id){
			state.currentTaskId = id
		},
		saveData(state){
			localStorage.tasks = JSON.stringify(state.tasks) 
		},
		insert(state, data){
			data.status = "work"
			state.tasks.push(data)
			this.commit("saveData")
		},
		deleteString(state,id){
			state.tasks.splice(id, 1); 
			this.commit("saveData")
		},
		changeTask(state, data){
			Vue.set(state.tasks,state.currentTaskId, data)
			this.commit("saveData")
		},
		readTasks(state,data){
			state.tasks = data
		}
	},
	actions: {
		readTasks(state,data){
			if (localStorage.tasks){
				let tasks = JSON.parse(localStorage.tasks);
				this.commit("readTasks", tasks )
			}
		},
		saveTasks(state,data){},
	}
})
