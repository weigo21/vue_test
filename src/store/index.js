import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

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

const store = new Vuex.Store({
  state: {
    count: 0
  },
  //执行层，不要写业务逻辑，业务逻辑actions里写
  mutations: {
    INCREMENT (state,value) {
      state.count+=value
    },
    DECREMENT (state,value) {
      state.count-=value
    }
  },
  actions:actions,
})

export default store