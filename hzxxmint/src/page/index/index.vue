<template>
  <div class="hello">
    <mt-header fixed title="想想"></mt-header>
    <div class="hzspw">
      <mt-swipe :auto="2000">
      <mt-swipe-item><router-link to="/tuangoucar"> <img  src="\static\img\index\1.jpg"  height="120" width="400"></router-link></mt-swipe-item>
      <mt-swipe-item><router-link to="/tuangoucar"> <img src="\static\img\index\2.jpg" height="120" width="400"></router-link></mt-swipe-item>
      <mt-swipe-item> <router-link to="/tuangoucar"><img src="\static\img\index\3.jpg" height="120" width="400"></router-link></mt-swipe-item>
      <mt-swipe-item><router-link to="/tuangoucar"><img src="\static\img\index\4.jpg" height="120" width="400"></router-link></mt-swipe-item>
      </mt-swipe> 
       <hr/>
    </div>

    <table  height="100%" width="100%" align="center" >
       <tr>
          <td style="color: red ;float:left; text-align: left">在线人数:{{zxpeople}}</td>
           <td style="color: green ; float:right;text-align: right">总访问量:{{zfwl}}</td>
       </tr>
    </table>
    <hr/>
   <div style="color:red">
    <table  height="100%" width="100%" align="center" style="color:red">
      <tr>
        <td> <router-link to="/tuangoucar" ><img src="\static\img\index\4.jpg" width="30" height="30" ></router-link></td>
        <td ><a href="https://www.baidu.com" style="text-decoration:none  "><img src="\static\img\index\4.jpg" width="30" height="30" ></a></td>
        <td ><router-link to="/explain" style="text-decoration:none  "><img src="\static\img\index\4.jpg" width="30" height="30" ></router-link></td>
<td > <a href="https://www.baidu.com" style="text-decoration:none  "><img src="\static\img\index\4.jpg" width="30" height="30" ></a></td>
<td > <a href="https://www.baidu.com" style="text-decoration:none  "><img src="\static\img\index\4.jpg" width="30" height="30" ></a></td>
  </tr>
     <tr>
        <td><router-link to="/tuangoucar" style="text-decoration:none "><span style="color:red"> 团购车</span></router-link></td>
        <td><a href="https://www.baidu.com" style="text-decoration:none  " ><span style="color:red">视频播放</span> </a></td>
        <td><router-link to="/explain" style="text-decoration:none  "><span style="color:red">POS机</span></router-link></td>
        <td><a href="https://www.baidu.com" style="text-decoration:none  "><span style="color:red">婚庆车队</span></a></td>
        <td><a href="https://www.baidu.com" style="text-decoration:none  "><span style="color:red">二手车</span></a></td>
     </tr>
          <tr>
        <td> <a href="https://www.baidu.com" style="text-decoration:none  "><img src="\static\img\index\4.jpg" width="30" height="30" ></a></td>
        <td > <a href="https://www.baidu.com" style="text-decoration:none  "><img src="\static\img\index\4.jpg" width="30" height="30" ></a></td>
        <td > <a href="https://www.baidu.com" style="text-decoration:none  "><img src="\static\img\index\4.jpg" width="30" height="30" ></a></td>
<td > <a href="https://www.baidu.com" style="text-decoration:none  "><img src="\static\img\index\4.jpg" width="30" height="30" ></a></td>
<td > <a href="https://www.baidu.com" style="text-decoration:none  "><img src="\static\img\index\4.jpg" width="30" height="30" ></a></td>
  </tr>
     <tr>
        <td> <a href="https://www.baidu.com" style="text-decoration:none  "><span style="color:red">团游</span></a></td>
        <td><a href="https://www.baidu.com" style="text-decoration:none  "><span style="color:red">智能家居</span></a> </td>
        <td><a href="https://www.baidu.com" style="text-decoration:none  "><span style="color:red">赚钱</span></a></td>
        <td><a href="https://www.baidu.com" style="text-decoration:none  "><span style="color:red">大巴订票</span></a></td>
        <td><a href="https://www.baidu.com" style="text-decoration:none  "><span style="color:red">租车</span></a></td>
     </tr>
    </table>
  </div>
  <hr/>
<table  height="100%" width="100%" align="center" style="color:red">
  <tr>
    <td>{{hzgx}}</td>
    <td>{{hzgxsj}} </td>
  </tr>
   <tr>
    <td>{{hzgxc}}</td>
    <td>{{hzgxcsj}} </td>
  </tr>
  </table>
  <table  height="100%" width="100%" align="center" style="color:red">
  <tr>
    <td>{{hzgx}}</td>
    <td>{{hzgxsj}} </td>
  </tr>
   <tr>
    <td>{{hzgxc}}</td>
    <td>{{hzgxcsj}} </td>
  </tr>
  </table>
  <hr/>
  
  <table  height="100%" width="100%" align="center" >
  <tr>
     <td style="text-align:center">公司介绍</td>
  </tr>
   <tr>
    <td style="text-align:center">想想科技(化州)有限公司是粤西第一间高科技公司，公司CEO来自深圳知名互联企业，从事互联网技术总监多年，研发团队来自于百度、谷歌！</td>
  </tr>
  </table>
  <hr/>
 <mt-tabbar v-model="selected">

  <mt-tab-item id="dwzq">

    <img slot="icon" src="\static\img\index\shop.png" >
   点我赚钱
  </mt-tab-item>
  <mt-tab-item id="xq">
    <img slot="icon" src="\static\img\index\xq.png">
    相亲
  </mt-tab-item>
  <mt-tab-item id="jc">
    <img slot="icon" src="\static\img\index\car.png">
    叫车
  </mt-tab-item>
   <mt-tab-item id="cyq">
    <img slot="icon" src="\static\img\index\friend.png">
    城友圈
  </mt-tab-item>
  <mt-tab-item id="wd">
    <img slot="icon" src="\static\img\index\people.png" >
    我的
  </mt-tab-item>
</mt-tabbar>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      msg: 'huazhou' ,
      zxpeople:'100万',
      zfwl:'1500万',
      hzgx:"郭总第一批互联网",
      hzgxsj:"1分钟前",
      hzgxc: "林总发布奥迪一台",
      hzgxcsj:"1分钟前",
      selected:this.xixi
    }
  },
   props:{

    xixi: String

  },
   watch: {

    selected: function (val, oldVal) {

      // 这里就可以通过 val 的值变更来确定去向

      switch(val){

        case 'dwzq':

          this.$router.push('/HelloWorld');

        break;

        case 'xq':

          this.$router.push('/xqlogn');

        break;

        case 'GroupList':

          this.$router.push('/grouplist');

        break;

        case 'UserCenter':

          this.$router.push('/usercenter');

        break;

      }

    }
   }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style   scoped>
/*#main {
    width: 400px;
    height: 150px;
    border: 1px solid #c3c3c3;
    display: -webkit-flex; /* Safari */
   /* -webkit-justify-content: space-around;*/ /* Safari 6.1+ */
   /* display: flex;
    justify-content: space-around;
}*/
#dwzq{
  


}

.mint-swipe {
        height: 110px;
        color:#fff;
        font-size: 30px;
        text-align: center;
        margin-bottom: 10px;
        margin-top: -10px;
      }    
.mint-swipe-item {
        line-height: 200px;
      }  
.hzspw{
 margin-top: 55px;
}
/*figure, figcaption {
    padding: 0;
    margin: 0;
    list-style: none;
    font-style: normal;
    text-decoration: none;
    border: none;
    color: #333;
    font-weight: normal;
    font-family: "Microsoft Yahei";
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    -webkit-font-smoothing: antialiased;
}*/
/*figure {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 40px;
    margin-inline-end: 40px;
}*/
.hzicon{
  justify-content: space-around;
  justify-content: space-around;
}
</style>
