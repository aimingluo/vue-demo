/**
 * Created by Administrator on 2017/7/25 0025.
 */
const TODOS_KEY = 'todos_key'
export default {
  saveTodos(todos){
    localStorage.setItem(TODOS_KEY,JSON.stringify(todos))
 },
  getTodos(){
   return JSON.parse(localStorage.getItem(TODOS_KEY) || '[]')
  }
}
