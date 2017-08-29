<template>
    <div>
        <scroller
            :on-refresh="refresh"
            class="positions"
            :on-infinite="infinite"
            ref="bookDetail"
            v-if="BookDetails"
        >
            <div class="detailContent">
                <h2>{{BookDetails.title}}</h2>
                <div class="left">
                        <span class="icons">
                            <i class="fa fa-star active"></i>
                            <i class="fa fa-star active"></i>
                            <i class="fa fa-star active"></i>
                            <i class="fa fa-star active"></i>
                            <i class="fa fa-star"></i>
                        </span>
                    <span>{{BookDetails.ratings_count}}人评价</span>
                    <p>{{BookDetails.author[0]}} / {{BookDetails.translator[0]}} / {{BookDetails.publisher}} / {{BookDetails.pages}} / {{BookDetails.binding}} / {{BookDetails.price}} / {{BookDetails.pubdate}} </p>
                </div>
                <div class="right">
                    <img :src="BookDetails.images.small" alt="">
                </div>
                <div class="clear"></div>
                <p class="title">{{BookDetails.title}}的内容简介</p>
                <p>{{BookDetails.summary}}</p>
                <BookComments :reviews="BookReviews"></BookComments>
                <BookComments :reviews="newBookReviews"></BookComments>
                <!--<p class="title">影人</p>-->
                <!--<div class="picAll">-->
                    <!--<div class="pics">-->
                        <!--<a href="javascript:;" v-for="item in BookDetails.casts">-->
                            <!--<img :src="item.avatars.small" alt="">-->
                            <!--<p class="title">{{item.name}}</p>-->
                        <!--</a>-->
                    <!--</div>-->
                <!--</div>-->
                <!--<p class="title">{{BookDetails.title}}的短评</p>-->
                <!--<div class="Essay" v-for="item in reviews">-->
                    <!--<div class="EssayLeft">-->
                        <!--<img :src="item.author.avatar" alt="">-->
                    <!--</div>-->
                    <!--<div class="EssayRight">-->
                        <!--<div class="EssayHeader">-->
                            <!--<span>{{item.author.name}}</span>-->
                            <!--<span>-->
                                     <!--<i class="fa fa-star active" v-for="a in item.index"></i>-->
                                    <!--<i class="fa fa-star" v-for="b in 5-item.index"></i>-->
                                <!--</span>-->
                        <!--</div>-->
                        <!--<p class="time">{{item.updated_at}}</p>-->
                        <!--<p class="content">-->
                            <!--{{item.summary}}-->
                        <!--</p>-->
                        <!--<p class="icon">-->
                            <!--<i class="fa fa-thumbs-o-up"></i><span>{{item.useful_count}}</span>-->
                        <!--</p>-->
                    <!--</div>-->
                <!--</div>-->
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
                name:this.$route.params.name
            }
        },
        computed:mapGetters([
            'BookReviews',
            'BookDetails',
            'newBookReviews'
        ]),
        mounted(){
            this.$store.dispatch('getInfoList',this.id).then(()=>{
                    firstLoaded = true;
            })
        },
        methods:{
            refresh(){
                console.log('refresh')
            },
            infinite(){
//                if(!this.newBookReviews.length){
//                    this.$refs.bookDetail.finishInfinite('没有数据了');
//                    return
//                }
                if(!firstLoaded){
                    this.$refs.bookDetail.finishInfinite('没有数据了');
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
                this.$store.dispatch('setBookReviewsList', {
                    page,
                    count,
                    id:this.id,
                }).then(() => {
                    console.log('info','加载成功');
                    this.$nextTick(()=>{
                        this.$refs.bookDetail.finishInfinite('没有数据了');
                    });
                    moreLoaded = true;
                })
            }
        },
        components:{
            BookComments
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
    .EssayHeader i{
        color: #aaa;
    }
</style>
