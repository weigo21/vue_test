<template>
    <div class="row">
      <div class="card" v-for="user in info.users" :key="user.id">
        <a :href="user.html_url" target="_blank">
          <img :src="user.avatar_url" style='width: 100px'/>
        </a>
        <p class="card-text">{{user.login}}</p>
      </div>
      <!-- 展示欢迎词 -->
      <h1 v-show="info.isFirst">欢迎使用！</h1>
      <!-- 展示加载中 -->
      <h1 v-show="info.isLoading"><img style="width:100px" src="../assets/mona-loading-default.gif"></h1>
      <!-- 展示错误信息 -->
      <h1 v-show="info.errMsg">{{info.errMsg}}</h1>
    </div>
</template>

<script>
    export default {
        name: 'List',
        data() {
            return {
                info:{
                    isFirst:true,
                    isLoading:false,
                    errMsg:"",
                    users : []
                }
            }
        },
        mounted() {
            this.$bus.$on('getListData',(dataObj)=>{
                this.info = dataObj
                // console.log('list收到用户数据',users)
            })
        }
    }
</script>

<style>

</style>