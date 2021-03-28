<template>
  <div class="app">
      <b-navbar toggleable="lg">
        <img src="./assets/Logo.gif" width="60" height="60">
        <b-navbar-brand >Data Asset Evaluation Platform</b-navbar-brand>
        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
<!--            <router-link to="/Home">云估计</router-link>-->
<!--            <router-link to="/Table">数值估计</router-link>-->
<!--            <router-link to="/Result">估值结果</router-link>-->
<!--            <router-link to="/History">历史记录</router-link>-->
            <b-nav-item to="/Home">云估计</b-nav-item>
            <b-nav-item to="/Table">数据估值</b-nav-item>
            <b-nav-item to="/Result">估值结果</b-nav-item>
            <b-nav-item to="/UserInfo">我的个人</b-nav-item>
            <b-button type="link" variant="outline-primary" v-bind="LoginState" to="/Login">{{LoginState}}</b-button>
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
      LoginState:'登陆'
    }
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
