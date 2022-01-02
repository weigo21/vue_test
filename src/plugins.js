export default {
    install(Vue){
        //全局过滤器
        Vue.filter('mySlice',function(value){
            return value.slice(0,4)
        })

        //给Vue原型上添加一个方法，所有的vue实例对象就都可以使用
        Vue.prototype.hello = ()=>{alert('nihao')}
    }
}