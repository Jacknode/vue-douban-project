<template>
    <div>
        <scroller
            :on-refresh="refresh"
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
                name:this.$route.params.name
            }
        },
        components:{
            Comments
        },
        computed:mapGetters([
            'reviews',
            'details',
            'newDetails'
        ]),
        updated(){
        },
        created(){

        },
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
//                if(!this.newDetails.length){
//                    this.$refs.uploading.finishInfinite('没有数据了');
//                    return;
//                }
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
            }
        }
    }
</script>
<style scoped>
    .picAll .pics a{
        color: #aaa;
    }
    .positions{
        top:3rem;
    }

</style>
