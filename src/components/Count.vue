<template>
  <div>
      <h1>当前的求和为：{{$store.state.count}}</h1>
      <h1>当前的求和的10倍为：{{$store.getters.bigSum}}</h1>
      <select v-model.number="n">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
      </select>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
      <button @click="incrementOdd">当前求和为奇数再加</button>
      <button @click="incrementWait">等等再加</button>
  </div>
</template>

<script>
export default {
    name:'Count',
    data() {
        return {
            n:1,
        }
    },
    methods:{
        increment(){
            this.$store.commit('INCREMENT',this.n)
        },
        decrement(){
            this.$store.commit('DECREMENT',this.n)
        },
        incrementOdd(){
            this.$store.dispatch('incrementOdd',this.n)
        },
        incrementWait(){
            this.$store.dispatch('incrementWait',this.n)
        }
    },
    mounted() {
        console.log('Count',this)
    }
}
</script>

<style scoped>
    button{
        margin-left: 5px;
    }
</style>>