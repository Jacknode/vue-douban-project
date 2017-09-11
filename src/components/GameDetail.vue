<template>
    <div>
        <scroller
            class="positions"
            ref="movieDetail"
            v-if="GameReviews"
        >
            <div class="detailContent">
                <div class="Essay" v-for="item in GameReviews">
                    <div class="EssayLeft">
                        <img :src="item.user.avatar" alt="">
                    </div>
                    <div class="EssayRight">
                        <div class="EssayHeader">
                            <span>{{item.user.name}}</span>
                            <span v-if="item.index">
                                 <i class="fa fa-star active" v-for="a in item.index"></i>
                                <i class="fa fa-star" v-for="b in 5-item.index"></i>
                            </span>
                            <span v-else class="spans">暂无评分</span>
                        </div>
                        <p class="time">{{item.create_time}}</p>
                        <p class="content">
                            {{item.comment}}
                        </p>
                        <p class="icon">
                            <i class="fa fa-thumbs-o-up"></i><span>{{item.vote_count}}</span>
                        </p>
                    </div>
                </div>
            </div>
            <div class="con"></div>
        </scroller>
    </div>
</template>
<script>
    import JSONP from '../assets/js/JSONP'
    import {mapGetters} from 'vuex'
    export default{
        name: '',
        data(){
            return {
            }

        },
        computed:mapGetters([
            'GameReviews'
        ]),
        created(){
            this.$store.dispatch('getGameReviews')
        },
        mounted(){
            console.log(this.GameReviews)
        }
    }
</script>
<style scoped>
    .EssayHeader i{
        color: #aaa;
    }
    .spans{
        color: #aaa;
        font-size:.4rem;
    }
    .positions{
        top:3rem !important;
        margin-bottom: -3rem;
    }
    .con{
        height: 100px;
    }
</style>
