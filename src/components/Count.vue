<template>
  <div>
      <h1>当前的求和为：{{count}}</h1>
      <h1>当前的求和的10倍为：{{bigSum}}</h1>
      <h1>学校{{school}},专业{{subject}}</h1>
      <h3>Person组件的总人数：{{personList.length}}</h3>
      <select v-model.number="n">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
      </select>
      <button @click="INCREMENT(n)">+</button>
      <button @click="DECREMENT(n)">-</button>
      <button @click="incrementOdd(n)">当前求和为奇数再加</button>
      <button @click="incrementWait(n)">等等再加</button>
  </div>
</template>

<script>
import {mapState,mapGetters,mapMutations, mapActions} from 'vuex'
export default {
    name:'Count',
    data() {
        return {
            n:1,
        }
    },
    methods:{
        // increment(){
        //     this.$store.commit('INCREMENT',this.n)
        // },
        // decrement(){
        //     this.$store.commit('DECREMENT',this.n)
        // },
        ...mapMutations(['INCREMENT','DECREMENT']),
        /* ******************************** */
        // incrementOdd(){
        //     this.$store.dispatch('incrementOdd',this.n)
        // },
        // incrementWait(){
        //     this.$store.dispatch('incrementWait',this.n)
        // },
        ...mapActions(['incrementOdd','incrementWait'])
    },
    computed:{
        ...mapState(['count','school','subject','personList']),
        ...mapGetters(['bigSum'])
    },
    mounted() {
        //console.log('Count',this)
    }
}
</script>

<style scoped>
    button{
        margin-left: 5px;
    }
</style>>