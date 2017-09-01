<template>
  <div id="app">
    <loading v-show="loadingShow"></loading>
    <!--头部-->
    <header>
      <div class="header">
          <router-link to="/" class="active">豆瓣</router-link>
          <router-link to="/movie" class="blue">电影</router-link>
          <router-link to="/book" class="Earth">图书</router-link>
          <router-link to="/game" class="yellow">游戏</router-link>
          <router-link class="danblue" to="/music">音乐</router-link>
          <router-link to="/search"><i class="fa fa-search"></i></router-link>
      </div>
    </header>
    <router-view></router-view>
    <!--<router-view></router-view>-->
      <footer>
          <ul class="footList">
              <router-link to="/" tag="li" class="item_nav" :class="{active:isHome}">
                  <span class="fa fa-home all"></span>
                  <p>首页</p>
              </router-link>
              <router-link to="/book" tag="li" class="item_nav"  :class="{active:isBook}">
                  <span class="fa fa-book all"></span>
                  <p>图书</p>
              </router-link>
              <router-link to="/movie" tag="li" class="item_nav" :class="{active:isMovie}">
                  <span class="fa fa-video-camera all"></span>
                  <p>电影</p>
              </router-link>
              <router-link to="/music" tag="li" class="item_nav" :class="{active:isMusic}">
                  <span class="fa fa-music all"></span>
                  <p>音乐</p>
              </router-link>
              <router-link to="/admin" tag="li" class="item_nav" :class="{active:isAdmin}">
                  <span class="fa fa-user-o all"></span>
                  <p>我的</p>
              </router-link>
          </ul>
      </footer>
  </div>
</template>

<script>
  import {mapGetters,mapActions} from 'vuex'
export default {
    name: 'app',
    computed:mapGetters([
        'loadingShow',
        'headerShow',
        'isBook',
        'isMovie',
        'isMusic',
        'isAdmin',
        'isHome',
        'showFooter'
    ]),
    components:{
    },
    data(){
        return {
          name:'/'
        }
    },
    mounted(){
//        if(window.location.href.includes('/detail')){
//            this.$store.dispatch('setFooter')
//        }
    },
    methods:{
    },
    watch:{
        $route(to,from){
            this.name = to.path;
            this.$store.dispatch('setActive',to.path);
//            if(to.path.includes('/detail')){
//                this.$store.dispatch('setFooter')
//            }
        }
    }
}
</script>

<style lang="less">
    @r:20rem;
    /*footer{*/
        /*border-top: 1px solid #f1f1f1;*/
        /*position: absolute;*/
        /*bottom: 0;*/
        /*width: 100%;*/
        /*height: 60/@r;*/
        /*background: #fff;*/
    /*}*/
    footer{
        position: absolute;
        left: 0;
        bottom: 0;
        height: 66/@r;
        width: 100%;
        background:#fff;
    ul{
        margin: 0;
        padding: 0;
        list-style: none;
        height: 100%;
    }
        li{
            float: left;
            width: 80/@r;
            height: 100%;
            padding-top: 6/@r;
            text-align: center;
            p{
                color: #aaaaaa;
                font-size:15/@r;
            }
            .all{
                font-size:30/@r;
                color: #aaaaaa;
            }
        }
        li.active{
            p{
                font-size:15/@r;
                color: #00c01c;
            }
            .all{
                font-size:30/@r;
                color: #00c01c;
            }
        }
    }
</style>
