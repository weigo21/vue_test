<template>
    <div>
        <h1>人员列表</h1>
        <input type="text" placeholder="请输入名字" v-model="name">
        <button @click="addPerson">添加</button>
        <ul>
            <li v-for="p in personList" :key="p.id">{{p.name}}</li>
        </ul>
        <h3>count组件的总和：{{count}}</h3>
    </div>
</template>

<script>
import { nanoid } from 'nanoid'
import { mapState } from 'vuex'
export default {
    name:'Person',
    data(){
        return {
            name :''
        }
    },
    computed:{
        ...mapState(['personList','count'])
    },
    methods:{
        addPerson(){
            const personObj = {id:nanoid(),name:this.name}
            this.$store.commit('ADD_PERSON',personObj)
        }
    }
}
</script>

<style>

</style>