<template>
    <div>
        <scroller
            class="positions"
        >
            <router-link to="/home/detail" tag="div">
                <div class="card" v-for="item in movieCards">
                    <div :class="{cardLeft:item.target.cover_url,addWidth:!item.target.cover_url}" >
                        <p>{{item.title}}</p>
                        <p>
                            {{item.target.desc}}
                        </p>
                    </div>
                    <div class="cardRight" v-show="item.target.cover_url">
                        <img :src="item.target.cover_url" alt="" referrerpolicy="no-referrer">
                    </div>
                    <div class="itemList">
                        <span>by {{item.target.author.name}}</span>
                        <span>{{item.source_cn}}</span>
                    </div>
                </div>
            </router-link>
            <div class="ico"></div>
        </scroller>
    </div>
</template>
<script>
    import JSONP from '../assets/js/JSONP'
    import {mapGetters} from 'vuex'
    export default{
        name: '',
        computed:mapGetters([
            'cards',
            'movieCards'
        ]),
        mounted(){
            this.$store.dispatch('getCards')
        },
        updated(){
        },
    }
</script>
<style scoped lang="less">
    @r:20rem;
    img{
        float: right;
        width: 100/@r;
        height: 100/@r;
    }
    .card{
        padding: 20/@r 20/@r 20/@r 0;
        margin-bottom: 20/@r;
        margin-left: 20/@r;
        overflow: hidden;
        border-bottom:1px solid #f2f2f2;
        .cardLeft{
            width: 230/@r;
            float: left;
            p:nth-of-type(1){
                font-size:20/@r;
                font-weight:bold;
            }
            p:nth-of-type(2){
                padding: 5/@r 0;
                font-size:14/@r;
                color: #aaa;
            }
        }
        .cardRight{
            float: right;
        }
        .itemList{
            padding-top: 10/@r;
            clear: both;
            span{
                color: #ccd0d4;
                font-size:12/@r;
            }
            span:nth-of-type(1){
                float: left;
            }
            span:nth-of-type(2){
                float: right;
            }
        }
    }
    .addWidth{
        width: 100%;
        float: left;
        p:nth-of-type(1){
            font-size:20/@r;
            font-weight:bold;
        }
        p:nth-of-type(2){
            padding: 5/@r 0;
            font-size:14/@r;
            color: #aaa;
        }
    }
    .ico{
        width: 100%;
        height: 100/@r;
    }
    .positions{
        top:3rem !important;
        margin-bottom: -3rem;
    }
</style>
