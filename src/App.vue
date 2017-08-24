<template>
  <div id="app">
    <loading v-show="loadingShow"></loading>
    <!--头部-->
    <header>
      <div class="header">
            <a href="javascript:;" class="active">豆瓣</a>
          <router-link to="/" class="blue">电影</router-link>
          <router-link to="/book" class="Earth">图书</router-link>
            <a href="javascript:;" class="yellow">广播</a>
            <a href="javascript:;" class="danblue">小组</a>
            <router-link to="/search"><i class="fa fa-search"></i></router-link>
      </div>
    </header>
    <router-view></router-view>
    <!--<router-view></router-view>-->
  </div>
</template>

<script>
  import {mapGetters,mapActions} from 'vuex'
export default {
    name: 'app',
    computed:mapGetters([
        'loadingShow',
        'headerShow'
    ]),
    components:{
    },
    methods:{
        start(){
            alert(1)
        }
    }
}
</script>

<style>

</style>
