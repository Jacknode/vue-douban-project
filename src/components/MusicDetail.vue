<template>
    <div>
        <scroller
            :on-refresh="refresh"
            class="positions"
            :on-infinite="infinite"
            ref="musicDetail"
            v-if="MusicDetails"
        >
            <div class="detailContent">
                <h2>{{MusicDetails.title}}</h2>
                <div class="left">
                        <span class="icons">
                            <i class="fa fa-star active" v-for="a in MusicDetails.index"></i>
                            <i class="fa fa-star" v-for="b in 5-MusicDetails.index"></i>
                        </span>
                    <span>{{MusicDetails.rating.numRaters}}人评价</span>
                    <p><span v-for="item in MusicDetails.tags" class="mar">{{item.name}}</span></p>
                </div>
                <div class="right">
                    <img :src="MusicDetails.image" alt="">
                </div>
                <div class="clear"></div>
                <div class="top" :class="{show:isShow}">添加成功</div>
                <div class="Collection" @touchstart="Collection">喜欢</div>
                <p class="title">{{MusicDetails.title}}的唱片简介</p>
                <p>{{MusicDetails.summary}}</p>
                <BookComments :reviews="musicComments"></BookComments>
                <BookComments :reviews="newMusicReviews"></BookComments>
            </div>
        </scroller>
    </div>
</template>
<script>
    let page =0;//页数
    let count = 2;//每页加载多少条
    let firstLoaded = false;//判断第一次是否加载完成
    let moreLoaded = true;
    import {mapGetters,mapActions} from 'vuex'
    import JSONP from '@/assets/js/JSONP'
    import BookComments from './BookComments.vue'

    export default{
        name:'BookDetails',
        data(){
            return {
                id:this.$route.params.id,
                addCollection:true,
                isShow:false
            }
        },
        computed:mapGetters([
            'MusicDetails',
            'musicComments',
            'newMusicReviews'
        ]),
        mounted(){
            this.$store.dispatch('musicInfoList',this.id).then(()=>{
                firstLoaded = true;
            })
        },
        methods:{
            refresh(){
                console.log('refresh')
            },
            infinite(){
                if(!firstLoaded){
                    this.$refs.musicDetail.finishInfinite('没有数据了');
                    return;
                }
                if(!moreLoaded){
                    return;
                }
                moreLoaded = false;
                if(count==16){
                    page++;
                    count = 0;
                }
                count+=2;
                this.$store.dispatch('setMusicReviewsList', {
                    page,
                    count,
                    id:this.id,
                }).then(() => {
                    console.log('info','加载成功');
                    this.$nextTick(()=>{
                        this.$refs.musicDetail.finishInfinite('没有数据了');
                    });
                    moreLoaded = true;
                })
            },
            Collection(){
                if(this.addCollection){
                    this.$store.dispatch('setMusicCollection',this.$store.getters.MusicDetails);
                    this.addCollection = false;
                    this.isShow = true;
                    setTimeout(()=>{
                        this.isShow = false;
                    },2000)
                }
            }
        },
        components:{
            BookComments
        }
    }
</script>
<style scoped lang="less">
    @r:20rem;
    .picAll .pics a{
        color: #aaa;
    }
    .positions{
        top:3rem;
        margin-bottom: -3rem;
    }
    .EssayHeader i{
        color: #aaa;
    }
    .mar{
        margin-right: 5px;
    }
    .Collection {
        width: 100px;
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
        top:1rem;
        transition: .5s;
        background: green;
        color: #fff;
        border-radius: 5px;
        padding: 5px 10px;
        font-size:12px;
    }
    .show{
        top:4rem;
    }
</style>
