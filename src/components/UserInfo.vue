<template>
  <div>
    <b-card class="card_center"
      style="font-weight: inherit;
                font-size: small">

      <b-row>
        <b-col>
          <b-card-text class="small text-muted" v-bind="userInfo">信息详情 Data Information</b-card-text>
        </b-col>
        <b-col class="text-right">
          <b-button class="mb-2" variant="light" v-b-toggle.sidebar-right>
            <b-icon icon="gear" aria-hidden="true"></b-icon>
          </b-button>
          <b-sidebar id="sidebar-right" title="修改信息" right shadow>
            <div class="px-3 py-2">
              <p>
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
              </p>
              <b-avatar variant="info" src="https://placekitten.com/300/300" class="align-content-center"></b-avatar>
              <b-form-file v-model="userInfo.imgPath" class="mt-3" plain>上传头像</b-form-file>
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

            </div>
          </b-sidebar>
        </b-col>
      </b-row>
      <b-avatar variant="info" src="https://placekitten.com/300/300"></b-avatar>
      <p style="font-weight: bolder; font-size: x-large" >{{userInfo.userName}}</p>
      <p>
        性别：{{userInfo.userSex}}<br>
        手机号：{{userInfo.phoneNumber}}<br>
        剩余测试次数：{{userInfo.vipTimes}}<br>
      </p>
      <b-button variant="primary" class="mb-2" v-b-modal.modal-1>
        充值 <b-icon icon="credit-card" aria-hidden="true"></b-icon>
      </b-button>
      <b-modal id="modal-1" title="充值界面">
        <p class="my-4">对不起，暂未开启本服务</p>
      </b-modal>

    </b-card>
    <label>查询数据查询信息</label>
   <b-card class="card-body">
     <b-list-group>
       <b-list-group-item class="d-flex justify-content-between align-items-center" v-b-toggle.collapse-1>
         Cras justo odio
         <b-collapse id="collapse-1" class="mt-2">
           <b-card>
             <p class="card-text">Collapse contents Here</p>
             <b-button v-b-toggle.collapse-1-inner size="sm">Toggle Inner Collapse</b-button>
             <b-collapse id="collapse-1-inner" class="mt-2">
               <b-card>Hello!</b-card>
             </b-collapse>
           </b-card>
           <b-button to="/Result" variant="primary">查看详情</b-button>
         </b-collapse>
       </b-list-group-item>

       <b-list-group-item class="d-flex justify-content-between align-items-center" to="/Result">
         Dapibus ac facilisis in
         <b-badge variant="primary" pill>2</b-badge>
       </b-list-group-item>

       <b-list-group-item class="d-flex justify-content-between align-items-center" to="/Result">
         Morbi leo risus
         <b-badge variant="primary" pill>1</b-badge>
       </b-list-group-item>
     </b-list-group>
   </b-card>

    <b-table striped hover :items="items"></b-table>
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
      items: [
        { 数据名称: 40, 估计资产: 'Dickerson', 数据量: 'Macdonald',即时性: 'Macdonald' },
        { 数据名称: 21, 估计资产: 'Larsen', 数据量: 'Shaw' ,即时性: 'Macdonald'},
        { 数据名称: 89, 估计资产: 'Geneva', 数据量: 'Wilson' ,即时性: 'Macdonald'},
        { 数据名称: 38, 估计资产: 'Jami', 数据量: 'Carney' ,即时性: 'Macdonald'}
      ]
    }
  }
}
</script>

<style scoped>
.card_center{
  width: 400px;
  height: auto;
  align-content: center ;
  margin-left: 150px;
  margin-right: 150px;
}
</style>
