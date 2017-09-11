<template>
    <div>
        <!--中间部分-->
        <scroller
            class="positions"
        >
        <!--<section id="wrap">-->
            <!--<div class="scroll">-->
                <div class="MwrapContent">
                    <div class="head">
                        <span>{{title}}</span>
                    </div>
                    <div class="clear"></div>
                    <div class="MorePics">
                        <a href="javascript:;"  v-for="item in lists">
                            <router-link :to="'detail/book/'+item.id">
                                <img alt="" v-lazy="item.cover.url">
                                <p class="title">{{item.title}}</p>
                                <p v-show="item.isOff">
                                    <i class="fa fa-star active" v-for="a in item.index"></i>
                                    <i class="fa fa-star" v-for="b in 5-item.index"></i>
                                </p>
                                <span v-if="item.isOff">{{item.rating.value}}</span>
                                <span v-else style="padding-right: 0.7rem;">暂无评分</span>
                            </router-link>
                        </a>
                    </div>
                </div>
            <!--</div>-->
        <!--</section>-->
        </scroller>
    </div>
</template>
<script>
    import ListBan from '../assets/js/index.js'
    import {mapGetters,mapActions} from 'vuex'
    import JSONP from '../assets/js/JSONP'
    export default{
        name:'list',
        data(){
            return {
                title:'影院',
                htmlVal:'暂无评分',
                str:'',
                count:9
            }
        },
        computed:mapGetters([
            'lists'
        ]),
        updated(){
            ListBan();
        },
        mounted(){
            this.getList()
            this.str = this.$route.params.name;

        },
        methods:{
            getList(){
                var _this = this;
                JSONP.getJSON('https://m.douban.com/rexxar/api/v2/subject_collection/book_'+this.$route.params.name+'/items?callback=jsonp1&start=0&count=18',null,function (data) {
                    var result = data.subject_collection_items;
                    console.log(result)
                    for(var i=0;i<result.length;i++){
                        var start = Math.round(result[i].rating.value/2);
                        if(start==0){
                            result[i].isOff = false
                        }else{
                            result[i].isOff = true
                        }
                        result[i].index = start;
                    }
                    _this.$store.dispatch('setLists',result)
                })
            }
        }
    }
</script>
<style scoped>
    .MwrapContent  a{
        color: #aaa;
    }
    .positions{
        top:3rem !important;
        margin-bottom: -3rem;
    }
</style>
