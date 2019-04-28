<template>
    <div>
   <mt-header title="想想购车">
  <router-link to="/" slot="left">
    <mt-button icon="back">返回</mt-button>
  </router-link>
</mt-header>
    <!--广告幻灯片-->
    <div class="hzspw">
      <mt-swipe :auto="2000">
      <mt-swipe-item><router-link to="/tuangoucar"> <img  src="\static\img\index\1.jpg"  height="200" width="400"></router-link></mt-swipe-item>
      <mt-swipe-item><router-link to="/tuangoucar"> <img src="\static\img\index\2.jpg" height="200" width="400"></router-link></mt-swipe-item>
      <mt-swipe-item> <router-link to="/tuangoucar"><img src="\static\img\index\3.jpg" height="200" width="400"></router-link></mt-swipe-item>
      <mt-swipe-item><router-link to="/tuangoucar"><img src="\static\img\index\4.jpg" height="200" width="400"></router-link></mt-swipe-item>
      </mt-swipe> 
    </div>
       <hr/>
       <!--购车信息填写-->
<mt-field label="姓名" placeholder="请输入用户名" v-model="username"></mt-field>
<mt-field label="电话" placeholder="请输入电话" type="number" v-model="tel"></mt-field>
<mt-field label="购车日期" placeholder="请输入购车日期" type="date" v-model="goucartime"></mt-field>
<mt-field label="车品牌" placeholder="请输入车品牌" type="text" v-modal="carpinpai"></mt-field>
<mt-field label="车型号" placeholder="请输入车型号" type="text" v-modal="carxinghao"></mt-field>
<mt-field label="车型号" placeholder="请输入车型号" type="text" v-modal="carxinghao"></mt-field>
  <hr/>
      <table  height="100%" width="100%" align="center" >
  <tr>
     <td style="text-align:center">购车公告</td>
  </tr>
   <tr>
    <td style="text-align:center">参与平团可以获得最低价格</td>
  </tr>
  </table>
  <hr/>
  <router-link to="/tuangoucar/tuangoucarsucee">
<mt-button type="danger">确认提交</mt-button></router-link>
    </div>
</template>


<script>
export default {
    name : 'tuangoucar',
    data()
    {
        return {
            tgc : '团购车'
        }

    }
    
}
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
  
.hzspw{
 margin-top: 20px;
}
</style>

