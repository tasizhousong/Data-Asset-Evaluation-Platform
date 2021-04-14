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
          <h1>注册</h1>
          <br>
          <b-form inline>
            <label description="我们不会泄露您的手机号" style="margin-right: 20px">账号: </label>
            <b-form-input class="inputBox" type="phone" placeholder=" 请输入手机号" maxlength="13" v-model="account">
              <b-form-valid-feedback :state="aState">合法</b-form-valid-feedback>
              <b-form-invalid-feedback :state="aState">仅接受手机号</b-form-invalid-feedback>
            </b-form-input>
            <b-button pill variant="primary" style="margin-left: 20px" v-b-tooltip.hover title="点击获取手机验证码">获取</b-button>
          </b-form>
          <br>

          <b-form inline>
            <label style="margin-right: 20px">密码: </label>
            <b-form-input type="password" v-model="password" :state="pState" description="请输入您的密码">
              <b-form-valid-feedback :state="pState">合法</b-form-valid-feedback>
              <b-form-invalid-feedback :state="pState">空</b-form-invalid-feedback>
            </b-form-input>
          </b-form>
          <br>
          <b-form inline>
            <label style="margin-right: 20px">验证密码: </label>
            <b-form-input type="password" v-model="verifyPassword" :state="vpState" description="请再次输入您的密码">
              <b-form-valid-feedback :state="vpState">合法</b-form-valid-feedback>
              <b-form-invalid-feedback :state="vpState">两次密码不相符</b-form-invalid-feedback>
            </b-form-input>
          </b-form>
          <br>
          <b-form inline>
            <label style="margin-right: 20px">手机验证码: </label>
            <b-form-input type="text" v-model="verificationCode" :state="vcState">
              <b-form-valid-feedback :state="vcState">合法</b-form-valid-feedback>
              <b-form-invalid-feedback :state="vcState">输入为空</b-form-invalid-feedback>
            </b-form-input>
          </b-form>
          <br>
          <b-row>
<!--            <b-nav-item to="/Login">已有账号？点击登陆</b-nav-item>-->
            <b-button variant="link" to="/Login">已有账号？点击登录</b-button>
          </b-row>
          <br>
          <b-button variant="outline-primary" v-on:click="onRegister">注册</b-button>

        </b-col>
      </b-row>

    </b-card>
  </div>
</template>

<script>
export default {
  name: "Register",
  data(){
    return{
      account:'',
      password:'',
      verifyPassword:'',
      verificationCode:''
    }
  },
  computed:{
    aState(){
      if(this.account === ''){
        return false
      }else{
        return true
      }
    },
    pState(){
      if(this.password === ''){
        return false
      }else{
        return true
      }
    },
    vpState(){
      if(this.verifyPassword === '' || this.verifyPassword !== this.password){
        return false
      }else{
        return true
      }
    },
    vcState(){
      if(this.verificationCode === ''){
        return false
      }else{
        return true
      }
    }
  },
  methods:{
    onRegister:function (){
      if(this.aState && this.pState && this.vpState && this.vcState){
        this.RegisterSuccessful()
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
        this.$bvModal.msgBoxConfirm('请确保你补充完所有的信息.', {
          title: '注册失败',
          size: 'sm',
          buttonSize: 'sm',
          okVariant: 'danger',
          okTitle: 'YES',
          cancelTitle: 'NO',
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
    RegisterSuccessful:function (){
      this.$router.push('/Home');
      this.$store.dispatch('turnIsLogin',true)
    },
  },
  watch: {
    account (newValue, oldValue) { // 监听电话号码
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
  margin-top: 40px;
}
.card-center{
  margin-left: 200px;
  margin-right: 200px;
}
</style>
