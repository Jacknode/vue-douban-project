<template>
    <div>
        <scroller
            class="positions"
            ref="bookDetail"
            v-if="BuyBooks.length"
        >
            <div class="bookCards">
                <h2>图书</h2>
                <router-link  v-for="book in BuyBooks" class="card" tag="div" :to="'/detail/book/'+book.id">
                    <div class="cardLeft">
                        <p>{{book.title}}</p>
                        <p>
                            {{book.summary}}
                        </p>
                    </div>
                    <div class="cardRight">
                        <img :src="book.images.small" alt="">
                    </div>
                    <div class="itemList">
                        <span>价格:{{book.price}}</span>
                        <span>{{book.publisher}}</span>
                    </div>
                    <br>
                </router-link>
                <a href="javascript:;" class="clear" @touchstart="cleaAll">清空</a>
            </div>
            <div class="ico"></div>
        </scroller>
        <span v-else class="changes">还没有购买？<router-link to="/book">点击我</router-link> 去选一点吧!</span>
    </div>
</template>
<script>
    export default{
        name: '',
        data(){
            return {
            }
        },
        created(){

        },
        computed:{
            BuyBooks(){
                return this.$store.getters.Purchased;
            }
        },
        methods:{
            cleaAll(){
                this.$store.commit('clearPurchased')
            }
        },
        updated(){
        }
    }
</script>
<style scoped lang="less">
    @r:20rem;
    h2 {
        margin: 0;
        background: green;
        height: 60/@r;
        line-height:60/@r;
        font-size:22/@r;
        padding-left: 20/@r;
        color: #fff;

    }
    .clear{
        clear: both;
    }
    .positions{
        top:3rem !important;
        margin-bottom: -3rem;
    }
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
        padding: 10/@r 0;
        font-size:14/@r;
        color: #aaa;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
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
    .bookCards{
        margin: 20/@r 0;
    }
    .ico{
        height: 240/@r;
    }
    .Clearing span{
        display: inline-block;
        width: 70/@r;
        height: 40/@r;
        background: green;
        color: #fff;
        line-height:40/@r;
        border-radius: 5/@r;
        text-align: center;
        cursor:pointer
    }
    .clear{
        display: inline-block;
        background: #f60;
        padding: 5/@r 20/@r;
        text-align: center;
        color: #fff;
        border-radius: 5px;
        float: right;
        margin-right: 20/@r;
    }
    .changes{
        font-size:20/@r;
        padding-left: 20/@r;
    }
</style>
