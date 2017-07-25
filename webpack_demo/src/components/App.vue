<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
         <headerDemo :add-todo="addTodo" />
         <list :todos="todos" :remove-todo="removeTodo"/>
         <footerDemo :todos="todos" :remove-content="removeContent" :select-all-todos="selectAllTodos"/>
      </div>
    </div>
  </div>
</template>

<script>
  import headerDemo from './header.vue'
  import footerDemo from './footer.vue'
  import list from './list.vue'
  import localStorageUtil from '../util/localStorageUtil'
export default {
    data(){
      return {
        todos:[]
      }
    },
  created(){
    this.todos = localStorageUtil.getTodos()
  },
  components:{
    headerDemo,
    footerDemo,
    list
  },
  methods:{
      addTodo(todo){
        this.todos.unshift(todo)
      },
     removeTodo(index){
        this.todos.splice(index,1)
    },
    removeContent(){
       this.todos = this.todos.filter(todo=>{return !todo.checked})
    },
    selectAllTodos(isSelect){
      this.todos.forEach(todo=>{
          todo.checked = isSelect
       })
    }

  },

  watch:{
    todos:{
      deep:true,
      handler:localStorageUtil.saveTodos
    }
  }
}
</script>

<style>
  /*app*/
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>
