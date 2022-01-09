<template>
    <div class="school">
        <h2>学校名称:{{name | mySlice}}</h2>
        <h2>学校地址:{{address}}</h2>
        <button @click="test">点我测试插件</button>
        <button @click="sendSchoolName">把学校名给app</button>
    </div>
</template>

<script>
    import pubsub from 'pubsub-js'
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
        //console.log('School',this.$bus)
        //全局事件获取
        this.$bus.$on('getMessage',(...data)=>{
            console.log('我是School组件，收到了数据',data)
        })
        //订阅消息
        this.pubId = pubsub.subscribe('message',(msgName,data)=>{
            //console.log(this)
            console.log('有人发布消息，消息的回调执行了',data)
        })
    },
    beforeDestroy() {
        this.$bus.$off('getMessage') //解绑自定义事件
        pubsub.unsubscribe(this.pubId)
    }
}
</script>

<style scoped>
    .school {
        background-color: deepskyblue;
        padding: 10px;
    }
</style>