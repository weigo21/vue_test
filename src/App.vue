<template>
  <div id="app">
    <h1>{{msg}} {{schoolName}} {{studentName}}</h1>
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- 通过父组件给子组件传递函数类型的props实现：子给父传递数据 -->
    <school :getSchoolName='getSchoolName'/>

    <!-- 通过父组件给子组件绑定一个自定义事件来实现：子给父传递数据 （第一种：使用@或者v-on）-->
    <!-- <student name="李四" :age="18" @diyevent="getStudentName"/> -->

    <!-- 通过父组件给子组件绑定一个自定义事件来实现：子给父传递数据 （第二种：使用ref）-->
    <student name="李四" :age="18" ref="student"/>
    <Person/>
    <Count/>
    <div class="container">
      <Search/>
      <List/>
  </div>
  </div>
</template>

<script>
import School from './components/School.vue'
import Search from './components/Search.vue'
import List from './components/List.vue'
import Student from './components/Student.vue'
import Count from './components/Count.vue'
import Person from './components/Person.vue'

export default {
  name: 'App',
  data() {
    return {
      msg:'你好啊！',
      schoolName:'',
      studentName:'',
    }
  },
  components: {
    School,
    Student,
    Search,
    List,
    Count,
    Person,
  },
  methods: {
    getSchoolName(name){
      this.schoolName = name
      console.log('App收到学校名',name)
    },
    getStudentName(name,...params){
      this.studentName = name
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

.album {
  min-height: 50rem; /* Can be removed; just added for demo purposes */
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: #f7f7f7;
}

.card {
  float: left;
  width: 33.333%;
  padding: .75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: .75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>
