<template>
    <div>
        <section id="wrap">
            <div class="scroll">
                <header>
                    <span><i class="fa fa-user-circle-o"></i></span>
                    <router-link to="/login">
                        <p v-if="isLogin">欢迎您:{{username}}</p>
                        <p v-else="">登录 / 注册</p>
                    </router-link>
                </header>
                <section class="content">
                    <ul id="list">
                        <router-link tag="li" to="/collection">
                                <span class="fa fa-heart"></span>
                                <p>收藏</p>
                        </router-link>
                        <router-link tag="li" to="/book">
                            <span class="fa fa-book" style="color: blue"></span>
                            <p>日记</p>
                        </router-link>
                        <router-link tag="li" to="/book">
                            <span class="fa fa-leanpub" style="color: green"></span>
                            <p>读书</p>
                        </router-link>
                        <router-link tag="li" to="/music">
                            <span class="fa fa-music"></span>
                            <p>音乐</p>
                        </router-link>
                        <router-link tag="li" to="/movie">
                            <span class="fa fa-youtube-play" style="color: #f4b32e"></span>
                            <p>电影</p>
                        </router-link>
                        <router-link tag="li" to="/orders">
                            <span class="fa fa-cart-plus"></span>
                            <p>订单</p>
                        </router-link>
                        <router-link to="/wallet" tag="li">
                            <span class="fa fa-credit-card-alt" style="color: #3a50ad"></span>
                            <p>钱包</p>
                        </router-link>
                        <router-link to="/purchased" tag="li">
                            <span class="fa fa-cart-arrow-down" style="color: #583aad"></span>
                            <p>已购买</p>
                        </router-link>
                        <router-link to="/recharge" tag="li">
                            <span class="fa fa-dollar " style="color: #583aad"></span>
                            <p>充值</p>
                        </router-link>
                    </ul>
                </section>
            </div>
        </section>
    </div>
</template>
<script>
    import banner from '../assets/js/fn.js'
    export default{
        name: '',
        data(){
            return {
                isLogin:this.$store.getters.isLogin,
            }
        },
        updated(){
            banner();
        },
        computed:{
            username(){
                return this.$store.getters.username.username
            }
        }
    }
</script>
<style scoped lang="less">
    @r:20rem;
    header{
        background: #00c01c;
        height: 100/@r;
         span i{
            font-size:60/@r;
        }
         span{
             float: left;
             color: #f1f1f1;
             padding-top: 20/@r;
             padding-left: 30/@r;
         }
         p{
             margin-top: 30/@r;
             margin-right: 30/@r;
             float: right;
             width: 180/@r;
             border:1px solid #fff;
             text-align: center;
             height: 40/@r;
             line-height:40/@r;
             color: #fff;
             font-weight:bold;
         }
    }
    .positions{
        top:3rem !important;
        height: auto;
        position: absolute;
    }
    .content{
        position: absolute;
        bottom:270/@r;
        height: 100/@r;
        width: 100%;
        ul{
            margin: 0;
            padding: 0;
            list-style: none;
            height: 100%;
            span{
                font-size:26/@r;
            }
            span:nth-of-type(1){
                color: red;
            }
        }
        li{
            border-bottom: 1px solid #f1f1f1;
            float: left;
            width: 5rem;
            height: 100%;
            padding-top: 16/@r;
            text-align: center;
            p{
                font-size:15/@r;
                color: #aaa;
                padding-top: 5/@r;
            }
        }
        li:nth-of-type(1),li:nth-of-type(2),li:nth-of-type(3),li:nth-of-type(4){
            border-top:1px solid #f1f1f1;
        }
    }

</style>
