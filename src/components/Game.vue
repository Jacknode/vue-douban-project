<template>
    <div>
        <scroller
            class="positions"
            ref="movieDetail"
        >
            游戏
            <!--<div class="MwrapContent">-->
                <!--<div class="head">-->
                    <!--<span>{{title}}</span>-->
                <!--</div>-->
                <!--<div class="clear"></div>-->
                <!--<div class="MorePics">-->
                    <!--<a href="javascript:;"  v-for="item in lists">-->
                        <!--<router-link :to="'detail/game/'+item.id">-->
                            <!--<img :src="item.cover.url" alt="">-->
                            <!--<p class="title">{{item.title}}</p>-->
                            <!--<p v-show="item.isOff">-->
                                <!--<i class="fa fa-star active" v-for="a in item.index"></i>-->
                                <!--<i class="fa fa-star" v-for="b in 5-item.index"></i>-->
                            <!--</p>-->
                            <!--<span v-if="item.isOff">{{item.rating.value}}</span>-->
                            <!--<span v-else style="padding-right: 0.7rem;">暂无评分</span>-->
                        <!--</router-link>-->
                    <!--</a>-->
                <!--</div>-->
            <!--</div>-->
        </scroller>
    </div>
</template>
<script>
    export default{
        name: '',
        data(){
            return {

            }
        }
    }
</script>
<style scoped>
.positions{
    top:3rem
}
</style>
