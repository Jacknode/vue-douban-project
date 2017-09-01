<template>
  <div id="Home">
    <!--中间部分-->
    <section id="wrap">
      <div class="scroll">
          <ContentView :banner="bannerList" title="影院热映" itemStr="in_theaters">
          </ContentView>
          <ContentView :banner="UpcomingList" title="即将上映" itemStr="coming_soon"></ContentView>
          <ContentView :banner="UpcomingList" title="新片榜" itemStr="new_movies"></ContentView>
          <ContentView :banner="TopList" title="Top250" itemStr="top250"></ContentView>
          <FooterList :footerList="footerList" itemStr="moive"></FooterList>
          <div class="con"></div>
      </div>
    </section>
  </div>
</template>
<script>
//  console.log(css)
import banner from '../assets/js/fn.js'
import ContentView from './wrapContent.vue'
import FooterList from './footerList.vue'
export default{
    name:'Home',
    data(){
        return {
            bannerList:[],
            UpcomingList:[],
            newMoveList:[],
            TopList:[],
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
    mounted(){
      this.getItem();
    },
    updated(){
        banner();
    },
    methods:{
        getItem(){
            var _this = this;
            this.$http.get('/list/in_theaters?start=0&count=8').then(function (data) {
                var result = data.data.subjects;
                _this.bannerList = result

                for(var i=0;i<result.length;i++){
                    var start = Math.round(result[i].rating.average/2);
                    _this.bannerList[i].index = start;
                }
            })
            this.$http.get('/list/coming_soon?start=0&count=8').then(function (data) {
                var result = data.data.subjects;
                _this.UpcomingList = result

                for(var i=0;i<result.length;i++){
                    var start = Math.round(result[i].rating.average/2);
                    _this.UpcomingList[i].index = start;
                }
            })
            this.$http.get('/list/new_movies?start=0&count=8').then(function (data) {
                var result = data.data.subjects;
                _this.newMoveList = result

                for(var i=0;i<result.length;i++){
                    var start = Math.round(result[i].rating.average/2);
                    _this.newMoveList[i].index = start;
                }
            })
            this.$http.get('/list/top250?start=0&count=8').then(function (data) {
                var result = data.data.subjects;
                _this.TopList = result

                for(var i=0;i<result.length;i++){
                    var start = Math.round(result[i].rating.average/2);
                    _this.TopList[i].index = start;
                }
            })
        }
    },
    components:{
        ContentView,
        FooterList
    }
}
</script>
<style scoped>
    .con{
        height: 50px;
        width: 100%;
    }
</style>
