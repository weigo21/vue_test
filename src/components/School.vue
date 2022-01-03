<template>
    <div class="school">
        <h2>学校名称:{{name | mySlice}}</h2>
        <h2>学校地址:{{address}}</h2>
        <button @click="test">点我测试插件</button>
        <button @click="sendSchoolName">把学校名给app</button>
    </div>
</template>

<script>
export default {
    name:'School',
    props:['getSchoolName'],
    data(){
        return {
            name:'百视通大学',
            address:'宜山路757'
        }
    },
    methods: {
        test(){
            this.hello()
        },
        sendSchoolName(){
            this.getSchoolName(this.name)
        }
    },
    mounted(){
        console.log('School',this.$bus)
        this.$bus.$on('getMessage',(...data)=>{
            console.log('我是School组件，收到了数据',data)
        })
    }
}
</script>

<style scoped>
    .school {
        background-color: deepskyblue;
        padding: 10px;
    }
</style>