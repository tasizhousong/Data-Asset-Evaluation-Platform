<template>
  <div>
    <b-card bg-variant="light">
      <label id="title">数据资产相关信息</label>

      <b-container>
        <b-row class="margin_bottom">
          <b-col col lg="3" class="text-right">
            <label>数据名称:</label>
          </b-col>
          <b-col col lg="4">
            <b-form-input
              id="data_name"
              placeholder="输入名称"
              v-model="dataName"
            ></b-form-input>
          </b-col>

        </b-row>

        <b-row class="margin_bottom">
          <b-col col lg="3" class="text-right">
            <label>采集时间:</label>
          </b-col>
          <b-col col lg="4" >
            <b-form-datepicker v-model="dateStart"></b-form-datepicker>
          </b-col>
          <b-col col lg="1" class="text-right">
            <label>截至:</label>
          </b-col>
          <b-col col lg="4" >
            <b-form-datepicker v-model="dateEnd"></b-form-datepicker>
          </b-col>
        </b-row>

        <b-row class="margin_bottom">
          <b-col class="text-right">
            <label>数据标签:</label>
          </b-col>
          <b-col>
            <b-form-select
              v-model="dataLabel.l1"
              :options="options"
              :state="true"
            >
              <b-form-valid-feedback :state="true"></b-form-valid-feedback>
            </b-form-select>
          </b-col>
          <b-col>
            <b-form-select
              v-model="dataLabel.l2"
              :options="options"
              :disabled="disabled2"
              :state="legal_l1"

            >
              <b-form-valid-feedback :state="legal_l1">合法</b-form-valid-feedback>
              <b-form-invalid-feedback :state="legal_l1">重复标签</b-form-invalid-feedback>
            </b-form-select>
          </b-col>
          <b-col>
            <b-form-select
              v-model="dataLabel.l3"
              :options="options"
              :disabled="disabled3"
              :state="legal_l2"
              name="checkbox-validation3"
            >
              <b-form-valid-feedback :state="legal_l2">合法</b-form-valid-feedback>
              <b-form-invalid-feedback :state="legal_l2">重复标签</b-form-invalid-feedback>
            </b-form-select>
          </b-col>
        </b-row>

        <b-row class="margin_bottom">
          <b-col col lg="3" class="text-right">
            <label class="text-right">数据评分:</label>
          </b-col>
          <b-col col lg="8">
            <b-form-rating v-model="score" show-value precision="1"></b-form-rating>
          </b-col>
        </b-row>

        <b-row class="margin_bottom">
          <b-col col lg="3" class="text-right">
            <label>浏览量:</label>
          </b-col>
          <b-col col lg="8">
            <div>
              <b-form-input v-model="views" type="range" min="0" max="1000000"></b-form-input>
              <div class="mt-2">{{ views }}</div>
            </div>
          </b-col>
        </b-row>

        <b-row class="margin_bottom">
          <b-col col lg="3" class="text-right">
            <label>收藏量:</label>
          </b-col>
          <b-col col lg="2">
            <b-form-spinbutton  v-model="collection" min="0" max="50"></b-form-spinbutton >
          </b-col>
        </b-row>

        <b-row class="margin_bottom">
          <b-col col lg="3" class="text-right">数据大小:</b-col>
          <b-col col lg="2">
            <b-form-input type="text" v-model="dataSize" placeholder="数据量" :state="legal_l3">
              <b-form-valid-feedback :state="legal_l3">合法</b-form-valid-feedback>
              <b-form-invalid-feedback :state="legal_l3">仅接受数字</b-form-invalid-feedback>
            </b-form-input>
          </b-col>
          <b-col col lg="2">
            <b-form-select v-model="kind" :options="kinds"></b-form-select>
          </b-col>
        </b-row>

        <b-row class="justify-content-center">
          <b-col col lg="2">
            <b-button type="submit" variant="primary" @click="onSubmit">提交</b-button>
          </b-col>
          <b-col col lg="2">
            <b-button type="reset" variant="danger" @click="onReset">重置</b-button>
          </b-col>
        </b-row>

      </b-container>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "Table",
  data() {
    return {
      dateStart:"",
      dateEnd:"",
      score:0.0,
      views:0,
      collection:0,
      kind:null,
      dataSize:null,
      dataName:null,
      kinds:[
        {text:'KB',value:'KB'},
        {text:'MB',value:'MB'},
        {text:'GB',value:'GB'}
      ],
      dataLabel:{
        l1:'',
        l2:'',
        l3:''
      },
      options: [
        { text: '短信API', value: '1' },
        { text: '基站', value: '2' },
        { text: 'IP地址', value: '3' },
        { text: '银行卡核验', value: '4' },
        { text: '身份核验', value: '5' },
        { text: '反欺诈', value: '6' },
        { text: '黑名单', value: '7' },
        { text: '风控', value: '8' },
        { text: '借贷', value: '9' },
        { text: '信用评估', value: '10' },
        { text: '手机号验证', value: '11' },
        { text: '手机在网时长', value: '12' },
        { text: '手机号码状态', value: '13' },
        { text: '手机号码归属', value: '14' },
        { text: '银行卡信息', value: '15' },
        { text: '1分钱', value: '16' },
        { text: '尾号限行', value: '17' },
        { text: ' 位置地图', value: '18' },
        { text: '油价查询', value: '19' },
        { text: '航空航班', value: '20' },
        { text: '交通违章', value: '21' },
        { text: '车辆信息', value: '22' },
        { text: '公路铁路', value: '23' },
        { text: '行驶驾驶', value: '24' },
        { text: '新闻资讯', value: '25' },
        { text: '电子商务', value: '26' },
        { text: '商品信息', value: '27' },
        { text: '海关新出口', value: '28' },
        { text: '京东指数', value: '29' },
        { text: '产业经济', value: '30' },
        { text: '市场调研', value: '31' },
        { text: '舆情监控', value: '32' },
        { text: '精准销售', value: '33' },
        { text: '用户画像', value: '34' },
        { text: '股票汇率', value: '35' },
        { text: '视频会员', value: '36' },
        { text: '快递查询', value: '37' },
        { text: '天气查询', value: '38' },
        { text: '环境质量', value: '39' },
        { text: '自然灾害', value: '40' },
        { text: '万年历', value: '41' },
        { text: '彩票信息', value: '42' },
        { text: '区号查询', value: '43' },
        { text: '资质备案', value: '44' },
        { text: '行政监管', value: '45' },
        { text: '投融资', value: '46' },
        { text: '企业综合', value: '47' },
        { text: '经营管理', value: '48' },
        { text: '税务信息', value: '49' },
        { text: '星座运势', value: '50' },
        { text: 'app应用', value: '51' },
        { text: '京东E卡', value: '52' },
        { text: '企业工商', value: '53' },
        { text: '知识产权', value: '54' },
        { text: '招投标', value: '55' },
        { text: '司法', value: '56' },
        { text: '公告文书', value: '57' },
        { text: '企业图谱', value: '58' },
        { text: '智能支付', value: '59' },
        { text: '智能客服', value: '60' },
        { text: '智能营销', value: '61' },
        { text: '智能风控', value: '62' },
        { text: '智能投资', value: '63' },
        { text: '智能识别', value: '64' }
      ],
    }
  },
  computed: {
    legal_l1(){
      if(this.dataLabel.l1 == ''){
        return true
      }else{
        if(this.dataLabel.l1 === this.dataLabel.l2){
          return false
        }else{
          return true
        }
      }

    },
    legal_l2(){
      if(this.dataLabel.l1 =='' || this.dataLabel.l2 ==''){
        return true
      }else{
        if(this.dataLabel.l1 === this.dataLabel.l3 || this.dataLabel.l3 === this.dataLabel.l1){
          return false
        }else{
          return true
        }
      }
    },
    legal_l3(){
      var numReg = /^[0-9]+$/
      var numRe = new RegExp(numReg)
      if (!numRe.test(this.dataSize)){
        return true
      }else{
        return false
      }
    },
    disabled2(){
      if (this.dataLabel.l1 == ''){
        return true
      }else{
        return false
      }
    },
    disabled3(){
      if (this.dataLabel.l2 == '' || this.dataLabel.l1 == ''){
        return true
      }else{
        return false
      }
    }
  },
  methods:{
    onSubmit(event) {
      event.preventDefault()
      alert(JSON.stringify(this.form))
    },
    onReset(event){
      this.date=null;
      this.score=0.0;
      this.dateStart="";
      this.dateEnd="";
      this.score=0.0;
      this.views=0;
      this.collection=0;
      this.kind=null;
      this.dataName=null;
      this.dataSize=null;
      this.dataLabel.l1='';
      this.dataLabel.l2='';
      this.dataLabel.l3='';
    },
    inputChange() { //输入框值改变
      this.pageIndex = this.pageIndex.replace(/[^\d]/g, '')
    }
  }
}
</script>

<style scoped>
#title{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: bold;
  font-size: x-large;
  width: 100%;
  text-align: center;
  margin-bottom: 50px;
}
.margin_bottom{
  margin-bottom: 10px;
}
</style>
