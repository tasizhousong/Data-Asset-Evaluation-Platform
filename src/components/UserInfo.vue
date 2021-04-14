<template>
  <div>
    <div class="uInfo"
    >
      <b-col class="text-right">
        <b-button class="mb-2" variant="light" v-b-toggle.sidebar-right>
          <b-icon icon="gear" aria-hidden="true"></b-icon>
        </b-button>
        <b-sidebar id="sidebar-right" title="修改信息" right shadow>
          <div class="px-3 py-2">
            <p>
              Please enter your corresponding information, we will save your latest information to the database. Please remember your updated mobile phone number for login.
            </p>
            <b-avatar variant="info" src="https://placekitten.com/500/500" style="margin-right: 150px"></b-avatar>
            <b-form-file v-model="userInfo.imgPath" class="mt-3" plain style="margin-left: 20px;margin-right: 20px" placeholder="上传头像"></b-form-file>
            <br>
            <b-form-group
              id="fieldset-horizontal"
              label-cols-sm="4"
              label-cols-lg="3"
              content-cols-sm
              content-cols-lg="7"
              description="Change your name."
              label="姓名"
              label-for="input-horizontal"
            >
              <b-form-input id="input-horizontal" v-model="userInfo.userName"></b-form-input>
            </b-form-group>

            <b-form-group
              id="fieldset-horizontal"
              label-cols-sm="4"
              label-cols-lg="3"
              content-cols-sm
              content-cols-lg="7"
              description="Change your phoneNumber"
              label="手机号"
              label-for="input-horizontal"
            >
              <b-form-input id="input-horizontal" v-model="userInfo.phoneNumber"></b-form-input>
            </b-form-group>

            <b-form-group label="性别"
                          v-slot="{ gender }"
                          label-cols-sm="4"
                          label-cols-lg="3"
                          content-cols-sm
                          content-cols-lg="7"
            >
              <b-form-radio v-model="userInfo.userSex" :aria-describedby="gender" name="gender" value="男">男</b-form-radio>
              <b-form-radio v-model="userInfo.userSex" :aria-describedby="gender" name="gender" value="女">女</b-form-radio>
            </b-form-group>
            <b-button variant="outline-primary" class="text-center">保存</b-button>

          </div>
        </b-sidebar>
      </b-col>
      <div class="son">
        <br>
        <b-avatar variant="info" src="https://placekitten.com/500/500" size="6rem"></b-avatar>
        <br>
        <p style="font-weight: bolder; font-size: x-large;color:white" >{{userInfo.userName}}</p>
        <p style="color:white">
          性别：{{userInfo.userSex}}<br>
          手机号：{{userInfo.phoneNumber}}<br>
          剩余测试次数：{{userInfo.vipTimes}}<br>
        </p>

        <b-button variant="primary" v-b-modal.modal-1>
          充值 <b-icon icon="credit-card" aria-hidden="true"></b-icon>
        </b-button>
        <b-modal id="modal-1" title="充值界面" class="align-content-md-center">
          <b-row>
            <b-col>
              <b-form-group label="请使用支付宝扫码支付" v-slot="{ ariaDescribedby }">
                <b-form-radio v-model="selected" :aria-describedby="ariaDescribedby" name="some-radios" value="1">￥1/1次</b-form-radio>
                <b-form-radio v-model="selected" :aria-describedby="ariaDescribedby" name="some-radios" value="10">￥9/10次</b-form-radio>
                <b-form-radio v-model="selected" :aria-describedby="ariaDescribedby" name="some-radios" value="100">￥28/35次</b-form-radio>
                <b-form-radio v-model="selected" :aria-describedby="ariaDescribedby" name="some-radios" value="365">￥75/100次</b-form-radio>
              </b-form-group>
            </b-col>
            <b-col>
              <img src="../assets/QRcode.png" width="180px">
            </b-col>
          </b-row>
        </b-modal>
      </div>
    </div>

    <br>

    <b-tabs content-class="mt-3" align="center">
      <b-tab title="历史预测">
        <b-card class="table-layout">
            <h2>我的预测历史</h2>
            <br>
            <b-table small :fields="fields" :items="items" responsive="sm">
              <!-- A virtual column -->
              <template #cell(序号)="data">
                {{ data.index + 1 }}
              </template>
              <!-- A custom formatted column -->
              <template #cell(数据名称)="data">
                {{ data.item.数据名称 }}
              </template>
              <template #cell(预测价格)="data">
                {{ data.item.预测价格 }}
              </template>
              <template #cell(采集范围)="data">
                {{ data.item.采集范围 }}
              </template>
              <template #cell(数据评分)="data">
                {{ data.item.数据评分 }}
              </template>
              <template #cell(浏览量)="data">
                {{ data.item.浏览量 }}
              </template>
              <template #cell(数据大小)="data">
                {{ data.item.数据大小 }}
              </template>
              <template #cell(其他)="data">
                <b-button variant="primary" to="/Result">查看详情</b-button>
              </template>
            </b-table>
        </b-card>
      </b-tab>
    </b-tabs>



  </div>
</template>

<script>
export default {
  name: "UserInfo",
  data() {
    return {
      userInfo:{
        userName:'史密斯',
        userSex:'男',
        vipTimes:9,
        imgPath:'',
        phoneNumber:13688888888
      },

      fields: [
        '序号','数据名称',
        {
          key:'预测价格',
          variant: 'Info',
          sortable: true
        },'采集范围',
        {
          key: '数据评分',
          sortable: true
        },
        {
          key: '浏览量',
          sortable: true,
        },
        {
          key:'数据大小',
          sortable: true,
        },
        {
          key:'其他'
        }
      ],
      items: [
        { 数据名称: 40, 采集范围:21,预测价格:31,数据评分: 2, 浏览量: 'Macdonald',收藏量: 'Macdonald',数据大小:123},
        { 数据名称: 40, 采集范围:23,预测价格:35,数据评分: 23, 浏览量: 'Macdonald',收藏量: 'Macdonald',数据大小:123},
        { 数据名称: 40, 采集范围:23,预测价格:35,数据评分: 3, 浏览量: 'Macdonald',收藏量: 'Macdonald',数据大小:123},
        { 数据名称: 40, 采集范围:23,预测价格:35,数据评分: 12, 浏览量: 'Macdonald',收藏量: 'Macdonald',数据大小:123}
      ]
    }
  }
}
</script>

<style scoped>
.table-layout{
  margin-left: 150px;
  margin-right: 150px;
}
.uInfo{
  background:url("../assets/userInfo.jpg");
  background-size: cover;
  height: 400px;
}
.son{
  width: -moz-fit-content;
  width:fit-content;
  margin:0 auto;
}
</style>
