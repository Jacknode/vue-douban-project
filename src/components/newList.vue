<template>
    <div>
        <!--中间部分-->
        <section id="wrap">
            <div class="scroll">
                <div class="MwrapContent">
                    <div class="head">
                        <span>{{title}}</span>
                        <!--<a href="javascript:;" @touchstart="showAll(str)">更多</a>-->
                    </div>
                    <div class="clear"></div>
                    <div class="MorePics">
                        <a href="javascript:;"  v-for="item in newLists">
                            <router-link :to="'detail/'+element+'/'+item.id">
                                <img :src="item.cover.url" alt="">
                                <p class="title">{{item.title}}</p>
                                <p v-show="item.isOff">
                                    <i class="fa fa-star active" v-for="a in item.index"></i>
                                    <i class="fa fa-star" v-for="b in 5-item.index"></i>
                                </p>
                                <span v-if="item.isOff">{{item.rating.value.toFixed(1)}}</span>
                                <span v-else style="padding-right: 0.7rem;">暂无评分</span>
                            </router-link>
                        </a>
                    </div>
                    <div class="con"></div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
    import ListBan from '../assets/js/index.js'
    import {mapGetters,mapActions} from 'vuex'
    import JSONP from '@/assets/js/JSONP'

    export default{
        name:'list',
        data(){
            return {
                title:'',
                htmlVal:'暂无评分',
                str:'',
                count:9,
                element:'',
                isAction:false
            }
        },
        computed:mapGetters([
            'newLists'
        ]),
        updated(){
            ListBan();
        },
        mounted(){
            var arr = window.location.href.split('/');
            var str = arr[arr.length-1];
            if(str.includes('V')){
                this.isAction = true;
               //电影
                var movieArr = str.split('V');
                this.element = movieArr[0]
                switch (movieArr[1]){
                    case 'classic':
                        this.title = '经典电影';
                        this.str ='movie_classic';
                        break;
                    case 'underrated':
                        this.title = '冷门佳片';
                        this.str = 'movie_unpopular'
                        break;
                    case 'doubantop':
                        this.title = '豆瓣高分电影';
                        this.str = 'movie_score'
                        break;
                    case 'action':
                        this.title = '动作电影';
                        this.str = 'movie_action'
                        break;
                    case 'comedy':
                        this.title = '喜剧电影';
                        this.str = 'movie_comedy'
                        break;
                    case 'love':
                        this.title = '爱情电影';
                        this.str = 'movie_love'
                        break;
                    case 'mystery':
                        this.title = '悬疑电影';
                        this.str = 'movie_mystery'
                        break;
                    case 'horror':
                        this.title = '恐怖电影';
                        this.str = 'movie_horror'
                        break;
                    case 'scifi':
                        this.title = '科幻电影';
                        this.str = 'movie_sci-fi'
                        break;
                    case 'sweet':
                        this.title = '治愈系电影';
                        this.str = 'movie_cure'
                        break;
                    case 'artfilm':
                        this.title = '文艺片';
                        this.str = 'movie_literature'
                        break;
                    case 'youth':
                        this.title = '成长';
                        this.str = 'movie_growth'
                        break;
                    case 'animation':
                        this.title = '动画电影';
                        this.str = 'movie_cartoon'
                        break;
                    case 'chinese':
                        this.title = '华语电影';
                        this.str = 'movie_chinese'
                        break;
                    case 'western':
                        this.title = '欧美电影';
                        this.str = 'movie_occident'
                        break;
                    case 'korean':
                        this.title = '韩国电影';
                        this.str = 'movie_korean'
                        break;
                    case 'japanese':
                        this.title = '日本电影';
                        this.str = 'movie_japan'
                        break;
                }
            }
            if(str.includes('B')){
                this.isAction = true;
                //图书
                var BookArr = str.split('B');
                this.element = BookArr[0]
                switch (BookArr[1]){
                    case 'novel':
                        this.title = '小说';
                        this.str = 'book_fiction';
                        break;
                    case 'love':
                        this.title = '爱情';
                        this.str = 'book_love';
                        break;
                    case 'history':
                        this.title = '历史';
                        this.str = 'book_history';
                        break;
                    case 'foreign':
                        this.title = '外国文学';
                        this.str = 'book_foreign';
                        break;
                    case 'youth':
                        this.title = '青春';
                        this.str = 'book_youth';
                        break;
                    case 'motivation':
                        this.title = '励志';
                        this.str = 'book_inspiration';
                        break;
                    case 'essay':
                        this.title = '随笔';
                        this.str = 'book_essay';
                        break;
                    case 'bio':
                        this.title = '传记';
                        this.str = 'book_biography';
                        break;
                    case 'detective':
                        this.title = '推理';
                        this.str = 'book_detective';
                        break;
                    case 'travel':
                        this.title = '旅行';
                        this.str = 'book_travel';
                        break;
                    case 'fantasy':
                        this.title = '奇幻';
                        this.str = 'book_fantasy';
                        break;
                    case 'business':
                        this.title = '经营';
                        this.str = 'book_economic';
                        break;
                }
            }
            if(str.includes('M')){
                this.isAction = true;
                //音乐
                var MusicArr = str.split('M');
                this.element = MusicArr[0];

                switch (MusicArr[1]){
                    case 'pop':
                        this.title = '流行';
                        this.str = 'music_popular';
                        break;
                    case 'rock':
                        this.title = '摇滚';
                        this.str = 'music_rock';
                        break;
                    case 'folk':
                        this.title = '民谣';
                        this.str = 'music_folk';
                        break;
                    case 'indie':
                        this.title = '独立';
                        this.str = 'music_indie';
                        break;
                    case 'chinese':
                        this.title = '华语';
                        this.str = 'music_chinese';
                        break;
                    case 'western':
                        this.title = '欧美';
                        this.str = 'music_occident';
                        break;
                    case 'japan':
                        this.title = '日本';
                        this.str = 'music_japan';
                        break;
                    case 'korean':
                        this.title = '韩国';
                        this.str = 'music_korea';
                        break;
                }
            }

            if(str.includes('G')){
                this.isAction = false;
                //游戏
                var GameArr = str.split('G');
                this.element = GameArr[0];
                switch (GameArr[1]){
                    case 'action':
                        this.title = '动作类';
                        this.str = 'game_action_hot';
                        break;
                    case 'rpg':
                        this.title = '角色扮演类';
                        this.str = 'game_role_hot';
                        break;
                    case 'arcade':
                        this.title = 'Arcade/街机';
                        this.str = 'game_platform_arcade';
                        break;
                    case 'adventure':
                        this.title = '冒险类';
                        this.str = 'game_adventure_hot';
                        break;
                    case 'shooting':
                        this.title = '射击类';
                        this.str = 'game_shoot_hot';
                        break;
                    case 'simulation':
                        this.title = '模拟类';
                        this.str = 'game_simulation_app';
                        break;
                    case 'sports':
                        this.title = '体育类';
                        this.str = 'game_sports_hot';
                        break;
                    case 'racing':
                        this.title = '竞速类';
                        this.str = 'game_racing_hot';
                        break;
                    case 'fighting':
                        this.title = '格斗类';
                        this.str = 'game_fighting_hot';
                        break;
                    case 'battle':
                        this.title ='清版／乱斗类';
                        this.str = 'game_battle';
                        break;
                    case 'rts':
                        this.title = '即时战略类';
                        this.str ='game_rts_hot';
                        break;
                    case 'mug':
                        this.title = '音乐／旋律类';
                        this.str = 'game_mug_hot';
                        break;
                }
            }
            if(str.includes('P')){
                this.isAction = false;
                //游戏第二行
                var GameArr2 = str.split('P');
                this.element = GameArr2[0];

                switch (GameArr2[1]){
                    case 'mac':
                        this.title = 'Mac';
                        this.str = 'game_platform_mac'
                        break;
                    case 'pc':
                        this.title = 'PC';
                        this.str = 'game_platform_pc'
                        break;
                    case 'iphone':
                        this.title = 'iPhone';
                        this.str = 'game_platform_iphone'
                        break;
                    case 'ipad':
                        this.title = 'iPad';
                        this.str = 'game_platform_ipad'
                        break;
                    case 'android':
                        this.title = 'Android';
                        this.str = 'game_platform_android'
                        break;
                    case 'ps4':
                        this.title = 'PS4';
                        this.str = 'game_platform_ps4'
                        break;
                    case 'xboxone':
                        this.title = 'XboxOne';
                        this.str = 'game_platform_xboxone'
                        break;
                    case 'wiiu':
                        this.title = 'Wii U';
                        this.str = 'game_platform_wiiu'
                        break;
                    case 'ps3':
                        this.title = 'PS3';
                        this.str = 'game_platform_ps3'
                        break;
                    case 'xbox360':
                        this.title = 'Xbox 360';
                        this.str = 'game_platform_xbox360'
                        break;
                    case 'wii':
                        this.title = 'Wii';
                        this.str = 'game_platform_wii'
                        break;
                    case 'ps2':
                        this.title = 'PS2';
                        this.str = 'game_platform_ps2'
                        break;
                    case 'xbox':
                        this.title = 'Xbox';
                        this.str = 'game_platform_xbox'
                        break;
                    case 'ngc':
                        this.title = 'NGC/GameCube';
                        this.str = 'game_platform_ngc'
                        break;
                    case 'arcade':
                        this.title = 'Arcade/街机';
                        this.str = 'game_platform_arcade'
                        break;
                    case 'fc':
                        this.title = 'FC/NES/红白机';
                        this.str = 'game_platform_fc'
                        break;

                }
            }
            this.getList()
        },
        methods:{
            getList(){
                var _this = this;
                this.$store.dispatch('showLoading')
                if(this.isAction){
                    JSONP.getJSON('https://m.douban.com/rexxar/api/v2/subject_collection/filter_'+this.str+'_hot/items?os=ios&for_mobile=1&callback=jsonp1&start=0&count=18&loc_id=108288&_=1503804608094',null,function (data) {
                        _this.$store.dispatch('hideLoading')
                        var result = data.subject_collection_items;
                        for(var i=0;i<result.length;i++){
                            if(!result[i].rating){
                                result[i].rating = {
                                    value:0
                                };
                            }
                            var start = Math.round(result[i].rating.value/2);
                            if(start==0){
                                result[i].isOff = false
                            }else{
                                result[i].isOff = true
                            }
                            result[i].index = start;
                        }
                        _this.$store.dispatch('setNewLists',result)

                    })
                }else{
                    JSONP.getJSON('https://m.douban.com/rexxar/api/v2/subject_collection/'+this.str+'/items?os=ios&for_mobile=1&callback=jsonp1&start=0&count=18&loc_id=108288&_=1503804608094',null,function (data) {
                        _this.$store.dispatch('hideLoading')
                        var result = data.subject_collection_items;
                        for(var i=0;i<result.length;i++){
                            if(!result[i].rating){
                                result[i].rating = {
                                    value:0
                                };
                            }
                            var start = Math.round(result[i].rating.value/2);
                            if(start==0){
                                result[i].isOff = false
                            }else{
                                result[i].isOff = true
                            }
                            result[i].index = start;
                        }
                        _this.$store.dispatch('setNewLists',result)

                    })
                }
            },
            showAll(str){
//                var _this = this;
//                this.$http.get('/bookProject/'+str+'').then(function (data) {
//                    var result = data.data.subjects;
//                    for(var i=0;i<result.length;i++){
//                        var start = Math.round(result[i].rating.average/2);
//                        if(start==0){
//                            result[i].isOff = false
//                        }else{
//                            result[i].isOff = true
//                        }
//                        result[i].index = start;
//                    }
//                    _this.$store.dispatch('setLists',result)
//                })
            }
        }
    }
</script>
<style scoped lang="less">
    @r:20rem;
    .MwrapContent  a{
        color: #aaa;
    }
    .head span{
        font-size:1.5rem;
    }
    .con{
        height: 160/@r;
    }
</style>
