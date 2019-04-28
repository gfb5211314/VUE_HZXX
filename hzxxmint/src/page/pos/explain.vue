<template>
    <div>
    <mt-header title="想想pos机">
  <router-link to="/" slot="left">
    <mt-button icon="back">返回</mt-button>
  </router-link>
  </mt-header>
    <div class="postext">{{pos_mssage}}</div>
   </div>
</template>

<script>
export default {
    name : 'explain',
    data(){
      return {
          pos_mssage:'wo qunima' 
      }

    }
}
</script>



<style scoped>

</style>


