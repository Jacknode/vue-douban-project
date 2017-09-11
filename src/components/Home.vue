<template>
  <div id="Home">
    <!--中间部分-->
      <scroller
          class="positions"
      >
          <ContentView :banner="bannerList" title="影院热映" itemStr="in_theaters">
          </ContentView>
          <ContentView :banner="UpcomingList" title="即将上映" itemStr="coming_soon"></ContentView>
          <ContentView :banner="newMoveList" title="新片榜" itemStr="new_movies"></ContentView>
          <ContentView :banner="TopList" title="Top250" itemStr="top250"></ContentView>
          <FooterList :footerList="footerList" itemStr="moive"></FooterList>
          <div class="con"></div>
      </scroller>
  </div>
</template>
<script>
import banner from '../assets/js/fn.js'
import ContentView from './wrapContent.vue'
import FooterList from './footerList.vue'
import obj from '../assets/js/api'
import {mapGetters} from 'vuex'
export default{
    name:'Home',
    data(){
        return {
            footerList:[
                {
                    name:[{val:'经典',link:'movieVclassic'},{val:'冷门佳片',link:'movieVunderrated'}]
                },
                {
                    name:[{val:'豆瓣高分',link:'movieVdoubantop'},{val:'动作',link:'movieVaction'}]
                },
                {
                    name:[{val:'喜剧',link:'movieVcomedy'},{val:'爱情',link:'movieVlove'}]
                },
                {
                    name:[{val:'悬疑',link:'movieVmystery'},{val:'恐怖',link:'movieVhorror'}]
                },
                {
                    name:[{val:'科幻',link:'movieVscifi'},{val:'治愈',link:'movieVsweet'}]
                },
                {
                    name:[{val:'文艺',link:'movieVartfilm'},{val:'成长',link:'movieVyouth'}]
                },
                {
                    name:[{val:'动画',link:'movieVanimation'},{val:'华语',link:'movieVchinese'}]
                },
                {
                    name:[{val:'欧美',link:'movieVwestern'},{val:'韩国',link:'movieVkorean'}]
                },
                {
                    name:[{val:'日本',link:'movieVjapanese'}]
                }]
        }
    },
    computed:mapGetters([
        'bannerList',
        'UpcomingList',
        'newMoveList',
        'TopList'
    ]),
    mounted(){
        this.$store.dispatch('getMovieLists')
    },
    updated(){
        banner();
    },
    methods:{
    },
    components:{
        ContentView,
        FooterList
    }
}
</script>
<style scoped>
    .con{
        height: 120px;
        width: 100%;
    }
    .positions{
        top:3rem !important;
        margin-bottom: -3rem;
    }
</style>
