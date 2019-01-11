<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">极客旅游网</a>
      <button class="navbar-toggler" type="button" @click="navbarCollapsed = !navbarCollapsed" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="navbar-collapse" id="navbarSupportedContent" :class="navbarCollapsed ? 'collapsed':'collapse'">
        <ul class="nav navbar-nav">
          <li>
            <router-link class="nav-link"   :to="{path:'/',exact:true}">乘客信息</router-link>
          </li>
          <li>
            <router-link class="nav-link"  :to ="'/services'">增值业务</router-link>
          </li>
          <li>
            <router-link class="nav-link"  :to="'/confirm'">核对支付</router-link>
          </li>
        </ul>

      </div>
    </nav>
    <div class="container-fluid">
      <div class="row">
        <router-view></router-view>
        <div class="col-md-7"></div>
        <div class="col-md-5">
          已输入乘客人数：{{passengerCounts}},已校验乘客数:{{passengerValidateds}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from './vuex/store'
export default {
  data(){
    return{
      navbarCollapsed:false
    }
  },
  computed:{
    passengerCounts: () => store.state.passengers.length,
    passengerValidateds: () => store.state.passengerValidated
  },
  ready () {
    alert("aaaa")
    console.log('直接在store中读取the store state is: ', store.state)
    console.log('全局注册store后获取 state is: ', this.$store.state)
  },
  vuex: {
    getters: {
      passengers: state => state.passengers,
      passengerValidated: state => state.passengerValidated,
      passengerCount: state =>  state.passengers.length
    }
  },
  store,
  name: 'App'
}
</script>

<style lang="scss">
  @import "../node_modules/bootstrap/scss/bootstrap.scss";
</style>
