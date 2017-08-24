<template>
    <div>
        <!--中间部分-->
        <section id="wrap">
            <div class="scroll">
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
                <div id="footer"><i class="fa fa-spinner fa-spin search"></i><span>加载更多</span></div>
            </div>
        </section>
    </div>
</template>
<script>
    import banner from '../assets/js/fn.js'
    import Reflash from '../assets/js/refresh'
    import {mapGetters,mapActions} from 'vuex'
    export default{
        name:'Detail',
        data(){
            return {
            }
        },
        computed:mapGetters([
            'reviews',
            'details'
        ]),
        updated(){
            banner();
            Reflash(this,this.$route.params.id)
        },
        mounted(){
            var name = this.$route.params.name;
            var id =  this.$route.params.id;

            //电影条目信息
            this.$http.get('/list/subject/'+id+'?apikey=0b2bdeda43b5688921839c8ecb20399b').then((data)=>{
                var result = data.data;
//                console.log(result)
                this.$store.dispatch('setDetails',result)
            })
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
                this.$store.dispatch('setReviews',reviews)
            })

        }
    }
</script>
<style scoped>
    .picAll .pics a{
        color: #aaa;
    }
    #footer{
        position: absolute;
        left: 0;
        bottom: -2rem;
        width: 100%;
        font: .8rem/1.6rem "宋体";
        text-align: center;
        /*display: none;*/
    }
</style>
