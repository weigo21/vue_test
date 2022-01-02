<template>
    <div class="student">
        <h1>{{msg}}</h1>
        <h2>学生姓名:{{name}}</h2>
        <h2>学校年龄:{{myAge}}</h2>
        <button @click="updateAge">修改年龄</button>
        <button @click="sendStudentName">把学生名给app</button>
    </div>
</template>

<script>
export default {
    name:'Student',
    data() {
        return {
            msg:'我是一个学生',
            myAge:this.age
        }
    },
    methods: {
        updateAge() {
            this.myAge++
        },
        sendStudentName() {
            this.$emit('diyevent',this.name,this.myAge)
        }
    },
    //简单声明接收
    // props:['name','age']
    
    //接收的同时对数据类型进行限制
    /* props:{
        name:String,
        age:Number
    }*/

    props:{
        name:{
            type:String,
            required:true
        },
        age:{
            type:Number,
            default:99
        }
    }
}
</script>

<style scoped>
    .student {
        background-color: bisque;
        padding: 5px;
    }
</style>