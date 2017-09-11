<template>
    <div>
        <div class="wrapContent">
            <div class="head">
                <span>{{title}}</span>
                <router-link :to="'music/'+itemStr">更多</router-link>
            </div>
            <div class="clear"></div>
            <div class="picAll">
                <div class="pics">
                    <a href="javascript:;"  v-for="item in bannerList">
                        <router-link :to="'detail/music/'+item.id">
                            <img alt="" v-lazy="item.cover.url">
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
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        name:"MusicBanner",
        props:['MusicBanner','title','itemStr'],
        computed:{
            bannerList(){
                var arr = [];
                arr = this.MusicBanner;
                for(var i=0;i<arr.length;i++){
                    var start = Math.floor(arr[i].rating.value/2);
                    if(start==0){
                        arr[i].isOff = false
                    }else{
                        arr[i].isOff = true
                    }
                    arr[i].index = start;
                }
                return arr;
            }
        },
        components:{
        },
        mounted(){

        }
    }
</script>
<style scoped>
    .wrapContent .picAll .pics a{
        color: #aaa;
    }
</style>
