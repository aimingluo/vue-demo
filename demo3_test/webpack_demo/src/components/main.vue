<template>
  <div>
      <h3 v-show="loading">Loading...</h3>
      <h2 v-show="firstView">请输入要搜索的名字</h2>

    <div v-if="users" class="row">
      <div class="card" v-for="user in users">
        <a :href="user.userUrl" target="_blank">
          <img :src="user.avatar" style='width: 100px'/>
        </a>
        <p class="card-text">{{user.username}}</p>
      </div>
    </div>
    <h2 v-else="errorMsg">{{errorMsg}}</h2>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
  props:['searchName'],
  data(){
    return {
      loading:false,
      firstView:true,
      errorMsg:null,
      users:[]
    }
  },
    watch:{
      searchName:function (value) {
          this.loading=true
          this.firstView=false
          this.errorMsg=null
          this.users=[]

        const  url =`https://api.github.com/search/users?q=${value}`
        axios.get(url)
          .then((response)=>{
            //console.log(response.data)
            this.loading=false
            this.users= response.data.items.map((item,index)=>{
              return {
                userUrl: item.html_url,
                avatar: item.avatar_url,
                username: item.login
              }
            })
            
          }).catch(error=>{
            this.loading=false
           this.errorMsg = '请求失败了'
        })
      }
    }
  }
</script>


<style>
  .card {
    float: left;
    width: 33.333%;
    padding: .75rem;
    margin-bottom: 2rem;
    border: 1px solid #efefef;
    text-align: center;
  }

  .card > img {
    margin-bottom: .75rem;
    border-radius: 100px;
  }

  .card-text {
    font-size: 85%;
  }
</style>
