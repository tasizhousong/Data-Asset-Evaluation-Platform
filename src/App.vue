<template>
  <div class="app">
      <b-navbar toggleable="lg" variant="light">
        <img src="./assets/logo.png" width="60" height="60">
        <b-navbar-brand >Data Asset Evaluation Platform</b-navbar-brand>
        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item to="/Home">云估计</b-nav-item>
            <b-nav-item to="/Table">数据估值</b-nav-item>
            <b-nav-item to="/Result">估值结果</b-nav-item>
            <b-nav-item @click="judge">我的个人</b-nav-item>
            <b-button type="link" variant="outline-primary" v-model="$store.state.loginState" @click="onButton">{{$store.state.loginState}}</b-button>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    <!-- 路由显示位置 -->
    <router-view/>
  </div>
</template>

<script>
import Home from "./components/Home";
export default {
  name: 'App',
  components: {Home},
  data() {
    return {
      LoginState:'登陆',
      isFixed:''
    }
  },
  methods:{
    onButton:function (){
      if(this.$store.state.isLogin){
        alert('你确定要退出吗？')
        this.$store.dispatch('turnIsLogin',false)
        this.$router.push('/Login');
      }
      else{
        this.$router.push('/Login');
      }
    },
    judge:function (){
      if(this.$store.state.isLogin){
        this.$router.push('/UserInfo');
      }else{
        alert('请登录您的账号')
      }
    },
  }
}
</script>

<style>
app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
