<template>
    <section class="jumbotron">
      <h3 class="jumbotron-heading">Search Github Users</h3>
      <div>
        <input type="text" placeholder="enter the name you search" v-model="keyWord"/>&nbsp;
        <button @click="searchUsers">Search</button>
      </div>
    </section>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Search',
    data() {
        return {
            keyWord:""
        }
    },
    methods: {
        searchUsers(){
            //请求前更新ListS数据
            this.$bus.$emit('getListData',{isFirst:false,isLoading:true,errMsg:'',users:[]})
            //请求中
            axios.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
                response => {
                    // console.log('qingqiu chenggong',response.data.items)
                    this.$bus.$emit('getListData',{isLoading:false,errMsg:'',users:response.data.items})
                },
                error => {
                    this.$bus.$emit('getListData',{isLoading:false,errMsg:error.message,users:[]})
                }
            )
        }
    },
}
</script>
