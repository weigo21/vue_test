import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//准备actions--用于响应组件中的动作
const actions = {
  /* 如果没有业务逻辑，可以直接调用mutations
  increment : function(context,value){
    console.log("increment bei diaoyong le",context,value)
    context.commit('INCREMENT',value)
  },
  decrement : function(context,value){
    console.log("decrement bei diaoyong le",context,value)
    context.commit('DECREMENT',value)
  },
  */
  incrementOdd : function(context,value){
    if(context.state.count % 2){
      context.commit('INCREMENT',value)
    }
  },
  incrementWait : function(context,value){
    setTimeout(()=>{
      context.commit('INCREMENT',value)
    },1000)
  }
}

//准备state--用于存储数据
const state = {
  count:0,
  school:'bestv',
  subject:'qianduan',
  personList:[
    {id:'001',name:'张三'}
  ],
}

//准备getter--用于将state中的数据进行加工
const getters = {
  bigSum(state){
    return state.count*10
  }
}

//创建store
const store = new Vuex.Store({
  state: state,
  //执行层，不要写业务逻辑，业务逻辑actions里写
  mutations: {
    INCREMENT (state,value) {
      state.count+=value
    },
    DECREMENT (state,value) {
      state.count-=value
    },
    ADD_PERSON (state,value) {
      state.personList.unshift(value)
    }
  },
  actions:actions,
  getters:getters
})

//暴露store
export default store