<template>
    <div>
        <scroller
            :on-refresh="refresh"
            class="positions"
            :on-infinite="infinite"
            ref="uploading"
        >
            <div class="detailContent"  v-if="details">
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
                    <p>{{details.durations[0]}} / {{details.genres[0]}} / {{details.casts[0].name}}(导演) / {{details.casts[0].name}} / {{details.casts[1].name}} / {{details.casts[2].name}} / {{details.casts[3].name}}  {{details.year}}({{details.countries[0]}}) 上映</p>
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
                <div class="Essay" v-for="item in reviews">
                    <div class="EssayLeft">
                        <img :src="item.author.avatar" alt="">
                    </div>
                    <div class="EssayRight">
                        <div class="EssayHeader">
                            <span>{{item.author.name}}</span>
                            <span>
                                     <i class="fa fa-star active" v-for="a in item.index"></i>
                                    <i class="fa fa-star" v-for="b in 5-item.index"></i>
                                </span>
                        </div>
                        <p class="time">{{item.updated_at}}</p>
                        <p class="content">
                            {{item.summary}}
                        </p>
                        <p class="icon">
                            <i class="fa fa-thumbs-o-up"></i><span>{{item.useful_count}}</span>
                        </p>
                    </div>
                </div>
            </div>
        </scroller>
    </div>
</template>
<script>
    //    import banner from '../assets/js/index.js'
    //    import Reflash from '../assets/js/refresh'
    var start =0;
    var count = start+2+6;
    var isLoading = false;//判断第一次是否加载完成
    let moreLoaded = true;
    import {mapGetters,mapActions} from 'vuex'
    export default{
        name:'Detail',
        data(){
            return {
                id:this.$route.params.id
            }
        },
        computed:mapGetters([
            'reviews',
            'details'
        ]),
        updated(){
        },
        created(){
            var id =  this.$route.params.id;
            //电影条目信息
            this.$http.get('/list/subject/'+id+'?apikey=0b2bdeda43b5688921839c8ecb20399b').then((data)=>{
                var result = data.data;
                this.$store.dispatch('setDetails',result).then(()=>{
                    isLoading = true;
                })
            })
            var name = this.$route.params.name;
            //短评条目列表
            this.$http.get('/list/subject/'+id+'/reviews?apikey=0b2bdeda43b5688921839c8ecb20399b&start=0&count=6').then((data)=>{
                var reviews = data.data.reviews;

                for(var i=0;i<reviews.length;i++){
                    var start = Math.round(reviews[i].rating.value);
                    if(start==0){
                        reviews[i].isOff = false
                    }else{
                        reviews[i].isOff = true
                    }
                    reviews[i].index = start;
                }
                this.$store.dispatch('setReviews',reviews).then( ()=>{
                    isLoading = true;
                })
            })

        },
        mounted(){

        },
        methods:{
            refresh(){
                console.log('refresh')
            },
            infinite(){
                if(!isLoading){
                    this.$refs.uploading.finishInfinite();
                    return;
                }
                if(!moreLoaded){
                    return;
                }
                console.log(1)
////                this.$refs.uploading.finishInfinite();
//                var _this = this;
//                this.$http.get(`/list/subject/${this.id}/reviews?apikey=0b2bdeda43b5688921839c8ecb20399b&start=${start}&count=${count}`).then(function (data) {
//                    if(count>=20){
//
//                        start++;
//                    }
//                    count +=2;
//
//                    var data = data.data.reviews;
//                    if(data.length==0){
//                        alert('没有数据了');
//                        return;
//                    }
//                    data = data.slice(6);
//                        for(var i=0;i<data.length;i++){
//                            var val = Math.round(data[i].rating.value);
//                            if(val==0){
//                                data[i].isOff = false
//                            }else{
//                                data[i].isOff = true
//                            }
//                            data[i].index = val;
//                        }
//                        console.log(data)
////                        var newArr = data.slice(_this.reviews.length+num,_this.reviews.length+num+2);
//                        _this.$store.dispatch('pushReviews',data)
//                })
            }
        }
    }
</script>
<style scoped>
    .picAll .pics a{
        color: #aaa;
    }
    /*#footer{*/
    /*position: absolute;*/
    /*left: 0;*/
    /*bottom: -2rem;*/
    /*width: 100%;*/
    /*font: .8rem/1.6rem "宋体";*/
    /*text-align: center;*/
    /*!*display: none;*!*/
    /*}*/
    .positions{
        top:3rem;
    }
</style>
