import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
     val:'',
     list:[],
  },
  getters:{
     filterName(state){
      return this.list.filter(v=>v.name.indexOf(state.val)>-1)
     }
  },
      
  mutations: {
   setList(state,payload){
     state.list=payload.data
   },
   setVal(state,payload){
     state.val=payload
   }
   
  },
  actions: {
   getList({commit}){
   axios.get('/api/list').then(res=>{
     commit({type:'setList',data:res.data.data})
   })
   }
  }
})
