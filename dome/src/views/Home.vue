<template>
  <div>
   <input type="text" v-model="val" @keyup="setVal(val)" placeholder="请输入">
     <ul>
       <li v-for="v in filterName" :key="v.id">
         {{v.name}}
         <img :src="v.img" />
       </li>
     </ul>
  </div>


</template>

<script>
import {mapMutations,mapGetters} from 'vuex'
export default {
    data(){
      return{
        val:''
      }
    },
     computed:{
        ...mapGetters(['filterName'])
     },
    methods:{
      ...mapMutations(['setVal'])
    }
}
</script>

<style>

</style>