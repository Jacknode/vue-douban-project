<template>
    <div>
        <scroller
            class="positions"
            :on-infinite="infinite"
            ref="uploading"
            v-if="details"
        >
            <div class="detailContent">
                <h2>{{details.title}}</h2>
                <div class="left">
                        <span class="icons">
                            <i class="fa fa-star active"></i>
                            <i class="fa fa-star active"></i>
                            <i class="fa fa-star active"></i>
                            <i class="fa fa-star active"></i>
                            <i class="fa fa-star"></i>
                        </span>
                    <span>{{details.ratings_count}}人评价</span>
                    <p>{{details.durations[0]}} / {{details.genres[0]}} / {{details.casts[0].name}}(导演) / <span v-for="item in details.casts">{{item.name}}/</span> /   {{details.year}}({{details.countries[0]}}) 上映</p>
                </div>
                <div class="right">
                    <img :src="details.images.small" alt="">
                </div>
                <div class="clear"></div>
                <div class="top" :class="{show:isShow}">添加成功</div>
                <div class="login" :class="{addLogin:isLog}">请先登录！</div>
                <div class="add">
                    <div class="Collection" @touchstart="Collection">收藏</div>
                </div>
                <p class="title">{{details.title}}的剧情简介</p>
                <p>{{details.summary}}</p>
                <p class="title">影人</p>
                <div class="picAll">
                    <div class="pics">
                        <a href="javascript:;" v-for="item in details.casts">
                            <img :src="item.avatars.small" alt="">
                            <p class="title">{{item.name}}</p>
                        </a>
                    </div>
                </div>
                <p class="title">{{details.title}}的短评</p>
                <Comments :reviews="reviews"></Comments>
                <Comments :reviews="newDetails"></Comments>
            </div>
        </scroller>
    </div>
</template>
<script>
let page =0;//页数
let count = 2;//每页加载多少条
let firstLoaded = false;//判断第一次是否加载完成
let moreLoaded = true;
    import {mapGetters} from 'vuex'
    import Comments from './Comments.vue'
    export default{
        name:'Detail',
        data(){
            return {
                id:this.$route.params.id,
                name:this.$route.params.name,
                addCollection:true,
                isShow:false,
                isLog:false,
            }
        },
        components:{
            Comments
        },
        computed:mapGetters([
            'reviews',
            'details',
            'newDetails',
            'isLogin'
        ]),
        mounted(){
            this.$store.dispatch('getTopList',this.id).then(() => {
                setTimeout(() => {
                    firstLoaded = true;
                }, 300);
            });
        },
        methods:{
            refresh(){
                console.log('refresh')
            },
            infinite(){
                if(!firstLoaded){
                    this.$refs.uploading.finishInfinite('没有数据了');
                    return;
                }
                if(!moreLoaded){
                    return;
                }
                moreLoaded = false;
                if(count==20){
                    page++;
                    count = 0;
                }
                count+=2;
                this.$store.dispatch('loadMoreList', {
                    page,
                    count,
                    id:this.id
                }).then(() => {
                    this.$nextTick(()=>{
                        this.$refs.uploading.finishInfinite();
                    });
                    moreLoaded = true;
                })
            },
            Collection(){
                if(this.addCollection){
                    if(this.isLogin){
                        this.$store.dispatch('setMovieCollection',this.$store.getters.details)
                        this.addCollection = false;
                        this.isShow = true;
                        setTimeout(()=>{
                            this.isShow = false;
                        },2000)
                    }else{
                        this.isLog = true;
                        setTimeout(()=>{
                            this.isLog = false;
                            this.$router.push({path:'/login'})
                        },2000)
                    }

                }

            }
        }
    }
</script>
<style scoped lang="less">
    @r:20rem;
    .picAll .pics a{
        color: #aaa;
    }
    .positions{
        top:3rem !important;
        margin-bottom: -3rem;
    }
    .Collection {
        width: 100/@r;
        height: 30px;
        border: 1px solid green;
        text-align: center;
        line-height: 30px;
        background: green;
        color: #fff;
        border-radius: 10px;
    }
    .top{
        position: absolute;
        left: 160/@r;
        top:-2rem;
        transition: .5s;
        background: green;
        color: #fff;
        opacity: 0;
        border-radius: 5px;
        padding: 5px 10px;
        font-size:12px;
    }
    .show{
        top:1rem;
        opacity: 1;
    }
    .add{
        margin-bottom:20/@r;
        div{
            float: left;
            margin-right: 4px;
        }
    }
    .login{
        position: absolute;
        left: 130/@r;
        top:-2rem;
        opacity: 0;
        transition: .5s;
        background: #f60;
        color: #fff;
        border-radius: 5px;
        padding: 5px 10px;
        font-size:12px;
    }
    .addLogin{
        top:1rem;
        opacity: 1;
    }
</style>
