<template>
  <li @mouseenter="toggle(true)" @mouseleave="toggle(false)" :style="{background: showcolor}">
    <label>
      <input type="checkbox" v-model="todo.checked"/>
      <span>{{todo.content}}</span>
    </label>
    <button class="btn btn-danger" v-show="isshow" @click="remove">删除</button>
  </li>
</template>

<script>
  export default {
    data(){
      return{
        isshow:false,
        showcolor:'white',
      }
    },
  props:{
    todo:Object,
    removeTodo:Function,
    index:Number
   },
    methods:{
      toggle(value){
        if(value){
          this.isshow=true
          this.showcolor='#c9c1c7'
        }else{
          this.isshow=false
          this.showcolor='white'
        }
      },
      remove(){
        const {todo,removeTodo,index}=this
        if(confirm(`确定删除${todo.content}吗？`)){
          removeTodo(index)
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
