<template>
    <div>
   <mt-header title="想想相亲">
  <router-link to="/" slot="left">
    <mt-button icon="back">返回</mt-button>
  </router-link>
</mt-header>
  <mt-button @click.native="sheetVisible = true" size="large">点击上传个人头像</mt-button>
   <mt-actionsheet :actions="actions" v-model="sheetVisible"></mt-actionsheet>
  <hr/>
          <!--相亲信息填写-->
<mt-field label="姓名" placeholder="请输入真实用户名,平台保密" v-model="username"></mt-field>
<mt-field label="电话" placeholder="请输入电话" type="number" v-model="tel"></mt-field>
<mt-field label="性别" placeholder="请输入性别" type="text" v-model="xingbie"></mt-field>
<mt-field label="身份证" placeholder="请输入身份证" type="number" v-modal="shenfenzheng"></mt-field>
<mt-field label="出生日期" placeholder="请输入出生日期" type="date" v-modal="shenfenzheng"></mt-field>
 <div class="page-actionsheet-wrapper">
      <mt-button @click.native="sheetVisible = true" size="large">点击上传手持个人身份证正面照片</mt-button>

    </div>
      <mt-actionsheet :actions="actions" v-model="sheetVisible"></mt-actionsheet>
  <hr/>
      <table  height="100%" width="100%" align="center" >
  <tr>
     <td style="text-align:center">相亲平台公告</td>
  </tr>
   <tr>
    <td style="text-align:center">使用平台希望大家诚信，让真正想找对象，打造一个良好的相亲平台，免去线下相亲费用</td>
  </tr>
  </table>
  <hr/>
  <router-link to="/tuangoucarsucee">
<mt-button type="danger">确认提交</mt-button></router-link>

    </div>
</template>


<script type="text/babel">

 export default {
   name:'xqlogn',
    data() {
      return {
        sheetVisible: false,
        actions: [],
      }
    },
    methods: {
      takePhoto() {
         
      },
      openAlbum() {
       
      },
      goBack() {
        history.go(-1);
      }
    },
    mounted() {
      this.actions = [{
        name: '拍照',
        method: this.takePhoto
      }, {
        name: '从相册中选择',
        method: this.openAlbum
      }];
    
    }
  };


</script>



<style scoped>

.mint-swipe {
    height: 170px;
    color:#fff;
    font-size: 30px;
    text-align: center;
    margin-bottom: 10px;
    margin-top: -10px;
  }    
.mint-swipe-item {
    line-height: 1px;
  }  
  
</style>

