<template>
  <div id="app">
   <header></header>
   <main>
       <router-view/>
   </main>
   <footer>
      <router-link to="/home">首页</router-link> 
       <router-link to="/cor">购物</router-link> 
        <router-link to="/het">我的</router-link> 
   </footer>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  methods:{
    ...mapActions(['getList'])
  },
  created(){
    this.getList();
  }
}
</script>
<style>
  *{
    padding: 0;
    margin: 0;
    list-style: none;
  }
  html,body,#app{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  header{
    height: 50px;
  }
  main{
    flex: 1;
    overflow: auto;
  }
  footer{
    height: 50px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
</style>
