<template>
  <div id="app">
    <h1>{{msg}}</h1>
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- 通过父组件给子组件传递函数类型的props实现：子给父传递数据 -->
    <school :getSchoolName='getSchoolName'/>

    <!-- 通过父组件给子组件绑定一个自定义事件来实现：子给父传递数据 （第一种：使用@或者v-on）-->
    <!-- <student name="李四" :age="18" @diyevent="getStudentName"/> -->

    <!-- 通过父组件给子组件绑定一个自定义事件来实现：子给父传递数据 （第二种：使用ref）-->
    <student name="李四" :age="18" ref="student"/>
  </div>
</template>

<script>
import School from './components/School.vue'
import Student from './components/Student.vue'

export default {
  name: 'App',
  data() {
    return {
      msg:'你好啊！'
    }
  },
  components: {
    School,
    Student
  },
  methods: {
    getSchoolName(name){
      console.log('App收到学校名',name)
    },
    getStudentName(name,...params){
      console.log('App收到学生名',name,params)
    }
  },
  mounted() {
    // this.$refs.student.$on('diyevent',this.getStudentName)
    this.$refs.student.$on('diyevent',this.getStudentName)
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
  background-color: cornflowerblue;
}
</style>
