<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="isCheckAll"/>
    </label>
    <span>
          <span>已完成{{completeSize}}</span> / 全部{{todos.length}}
        </span>
    <button class="btn btn-danger" @click="removeContent" v-show="completeSize">清除已完成任务</button>
  </div>
</template>

<script>
  export default {
    props:['todos','removeContent','selectAllTodos'],
    computed:{
    completeSize(){
      return this.todos.reduce((preTotal, todo)=>{
        return preTotal+=todo.checked ? 1:0
      },0)
    },
      isCheckAll:{
        get(){
          return this.completeSize === this.todos.length && this.todos.length>0
        },
        set(value){
          this.selectAllTodos(value)
        }
      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  /*footer*/
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }

</style>
