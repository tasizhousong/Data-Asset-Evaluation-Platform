<template>
  <div>
    <br>
    <b-card class="card-center" style="box-shadow: 0 10px 10px gray">
      <b-row>
        <b-col>
          <img src="../assets/login.png" width="400px" height="auto" alt="can't find">
        </b-col>
        <hr class="my-4" >
        <b-col>
          <h1>登陆</h1>
          <b-form inline class="align-top" >
            <label style="margin-right: 20px">账号: </label>
            <b-form-input class="inputBox" type="phone" placeholder=" 请输入手机号" maxlength="13" v-model="account" :state="aState">
              <b-form-valid-feedback :state="aState">合法</b-form-valid-feedback>
              <b-form-invalid-feedback :state="aState">仅接受手机号</b-form-invalid-feedback>
            </b-form-input>
          </b-form>
          <br>
          <b-form inline>
            <label style="margin-right: 20px">密码: </label>
            <b-form-input type="password" v-model="password" :state="pState" required>
              <b-form-valid-feedback :state="pState">合法</b-form-valid-feedback>
              <b-form-invalid-feedback :state="pState">非法字符</b-form-invalid-feedback>
            </b-form-input>
          </b-form>
          <b-row>
            <b-button variant="link" @click="makeToast(true)">忘记密码</b-button>
          </b-row>
          <b-row>
            <b-button variant="link" to="/Register">没有账号？点击注册</b-button>
          </b-row>
          <br>
          <b-button variant="outline-primary" v-on:click="onLogin">登陆</b-button>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "Login",
  data(){
    return{
      account:'',
      password:''
    }
  },
  computed:{
    aState() {
      if(this.account === '')
        return false
      else
        return true
    },
    pState() {
      if(this.password === '')
        return false
      else
        return true
    }
  },
  methods:{
    onLogin:function(){
      if(this.pState && this.aState){
        this.LoginSuccessful()
        this.axios.post('/api/test',this.qs.stringify({'account':this.account,'password':this.password}),{
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        })
          .then(function(res){
            console.log(res.data)
            //控制台打印请求成功时返回的数据
            //bind(this)可以不用
          }.bind(this))
          .catch(function(err){
            if(err.response) {
              console.log(err.response)
              //控制台打印错误返回的内容
            }
            //bind(this)可以不用
          }.bind(this))
      }else{
        this.$bvModal.msgBoxConfirm('请确保你完成所有的信息.', {
          title: '登陆失败',
          size: 'sm',
          buttonSize: 'sm',
          okVariant: 'danger',
          okTitle: 'YES',
          footerClass: 'p-2',
          hideHeaderClose: false,
          centered: true
        })
          .then(value => {
          })
          .catch(err => {
            // An error occurred
          })
      }

    },
    LoginSuccessful:function (){
      this.$router.push('/Home');
      this.$store.dispatch('turnIsLogin',true)
    },
    makeToast(append = false) {
      this.toastCount++
      this.$bvToast.toast(`很抱歉，当前平台并未提供该服务。待项目完善后开发当前功能。`, {
        title: '系统提示',
        autoHideDelay: 2000,
        appendToast: append
      })
    }
  },
  watch: {
    account(newValue, oldValue) { // 监听电话号码
      this.account = newValue.length > oldValue.length ? newValue.replace(/\s/g, '').replace(/(\d{3})(\d{0,4})(\d{0,4})/, '$1 $2 $3') : this.phoneNum.trim()
      if (this.account.length === 13) {
        // 验证/保存的手机号码，去除空格
        this.state.checkPhoneNum = this.account.replace(/\s/g, '')
        console.log('输入的电话号码是：', this.state.checkPhoneNum)
      }
    }
  }
}

</script>

<style scoped>
.align-top{
  margin-top: 100px;
}
.card-center{
  margin-left: 200px;
  margin-right: 200px;
}
</style>
