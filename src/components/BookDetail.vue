<template>
    <div>
        <scroller
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
                <div class="top" :class="{show:isShow}">收藏成功</div>
                <div class="buy" :class="{addBuy:isBuy}">添加到购物车成功</div>
                <div class="login" :class="{addLogin:isLog}">请先登录！</div>
                <div class="add">
                    <div class="Collection" @touchstart="Collection" :class="{disable:isDisable}">收藏</div>
                    <div class="red" @touchstart="Buy" :class="{disableBuy:isDisableBuy}">购买</div>
                </div>
                <p class="title">{{BookDetails.title}}的内容简介</p>
                <p>{{BookDetails.summary}}</p>
                <BookComments :reviews="BookReviews"></BookComments>
                <BookComments :reviews="newBookReviews"></BookComments>
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
                name:this.$route.params.name,
                addCollection:true,
                isShow:false,
                isBuy:false,
                addBuyCollection:true,
                isLog:false,
                isDisable:false,
                isDisableBuy:false
            }
        },
        computed:mapGetters([
            'BookReviews',
            'BookDetails',
            'newBookReviews',
            'isLogin'
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
                if(!firstLoaded){
                    this.$refs.bookDetail.finishInfinite('没有数据了');
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
            },
            Collection(){
                if(this.addCollection){
                    if(this.isLogin){
                        this.$store.dispatch('setBookCollection',this.$store.getters.BookDetails);
                        this.addCollection = false;
                        this.isDisable = true;
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
            },
            Buy(){
                if(this.addBuyCollection){
                    if(this.isLogin){
                        this.$store.dispatch('setBuyBook',this.$store.getters.BookDetails)
                        this.isBuy = true;
                        this.isDisableBuy = true
                        this.addBuyCollection = false;
                        setTimeout(()=>{
                            this.isBuy = false;
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
        top:3rem !important;
        margin-bottom: -3rem;
    }
    .EssayHeader i{
        color: #aaa;
    }
    .Collection {
        width: 100/@r;
        height: 30px;
        border: 1px solid green;
        text-align: center;
        line-height: 30px;

        border-radius: 10px;
        background: #fff;
        color: green;
    }
    .red {
        width: 100/@r;
        height: 30px;
        border: 1px solid #f60;
        text-align: center;
        line-height: 30px;
        background: #fff;
        color: #f60;
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
    .buy{
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
    .addBuy{
        top:1rem;
        opacity: 1;
    }
    .addLogin{
        top:1rem;
        opacity: 1;
    }
    .LoginOp{
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
    .disable{
        background: green;
        color: #fff;
    }
    .disableBuy{
        background:#f60 ;
        color: #fff;
    }
</style>
