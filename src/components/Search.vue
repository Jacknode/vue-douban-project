<template>
    <div>
        <div id="wrap">
            <div class="scroll">
                <mu-text-field label="搜索" hintText="输入关键字" @change="changeVal"/><br/>
                <br>
                <div class="card" v-show="showCard">
                    <h3>影视</h3>
                    <ul class="list">
                        <li v-for="item in inputList">
                            <router-link :to="'detail/movie/'+item.id">
                                <div class="left">
                                    <img :src="item.images.small" alt="">
                                </div>
                                <div class="right">
                                    <span>{{item.title}}</span>
                                    <p>
                                        <i class="fa fa-star active" v-for="a in item.index"></i>
                                        <i class="fa fa-star" v-for="b in 5-item.index"></i>
                                        <span class="num" v-if="item.rating.average!=0.0">{{item.rating.average}}</span>
                                        <span class="num" v-else>评分人数不足</span>
                                    </p>
                                </div>
                            </router-link>
                        </li>

                    </ul>
                    <h2 @touchstart="loadAll" v-show="showLoadAll">加载更多{{num}}</h2>
                </div>
                <div class="card" v-show="showCard">
                    <h3>图书</h3>
                    <ul class="list">
                        <li v-for="item in BookList">
                            <div class="left">
                                <img :src="item.images.small" alt="">
                            </div>
                            <div class="right">
                                <span>{{item.title}}</span>
                                <p>
                                    <i class="fa fa-star active" v-for="a in item.index"></i>
                                    <i class="fa fa-star" v-for="b in 5-item.index"></i>
                                    <span class="num" v-if="item.rating.average!=0.0">{{item.rating.average}}</span>
                                    <span class="num" v-else>评分人数不足</span>
                                </p>

                            </div>
                        </li>
                    </ul>
                    <h2 @touchstart="loadBookAll" v-show="showBookLoadAll">加载更多{{bookNum}}</h2>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import {mapGetters} from 'vuex'
    import banner from '../assets/js/index'

    export default {
        computed:mapGetters([
           'inputList',
            'showLoadAll',
            'BookList',
            'showBookLoadAll'
        ]),
        data () {
            return {
                newVal:'',
                num:0,
                bookNum:0,
                showCard:false
            }
        },
        mounted(){
            this.getItem();
            banner('none');
        },
        updated(){
        },
        methods:{
            getItem(){

            },
            changeVal(e,val){
                this.newVal = val;
                this.showCard = true;
                this.$http.get('/list/search?q='+val+'').then((data)=>{
                    console.log(data)
                    var result = data.data.subjects;
                    for(var i=0;i<result.length;i++){
                        var start = Math.round(result[i].rating.average/2);
                        if(start==0){
                            result[i].isOff = false
                        }else{
                            result[i].isOff = true
                        }
                        result[i].index = start;
                    }
                    this.num = result.length-2;
                    var arr = result.slice(0,2);
                    console.log(arr)
                    this.$store.dispatch('setInputList',arr)
                })
                this.$http.get('/book/search?q='+val+'').then((data)=>{
                    console.log(data)
                    var result = data.data.books;
                    for(var i=0;i<result.length;i++){
                        var start = Math.round(result[i].rating.average/2);
                        if(start==0){
                            result[i].isOff = false
                        }else{
                            result[i].isOff = true
                        }
                        result[i].index = start;
                    }
                    this.bookNum = result.length-2;
                    var arr = result.slice(0,2);
                    console.log(arr)
                    this.$store.dispatch('setBookList',arr)
                })
            },
            loadAll(){
                this.$store.dispatch('hideLoadAll');
                this.$http.get('/list/search?q='+this.newVal+'').then((data)=>{
                    console.log(data)
                    var result = data.data.subjects;
                    for(var i=0;i<result.length;i++){
                        var start = Math.round(result[i].rating.average/2);
                        if(start==0){
                            result[i].isOff = false
                        }else{
                            result[i].isOff = true
                        }
                        result[i].index = start;
                    }

                    this.$store.dispatch('setInputList',result)
                })
            },
            loadBookAll(){
                this.$store.dispatch('hideBookLoadAll');
                this.$http.get('/book/search?q='+this.newVal+'').then((data)=>{
                    console.log(data)
                    var result = data.data.books;
                    for(var i=0;i<result.length;i++){
                        var start = Math.round(result[i].rating.average/2);
                        if(start==0){
                            result[i].isOff = false
                        }else{
                            result[i].isOff = true
                        }
                        result[i].index = start;
                    }

                    this.$store.dispatch('setBookList',result)
                })
            }
        }
    }
</script>
<style scoped>
    .card{
        margin-bottom: 1rem;
    }
    h3{
        margin: 0;
    }
    .card li{
        overflow: hidden;
        padding: .7rem 0;
        border-bottom: 1px solid #ccc;
    }
    .card li:last-child{
        border-bottom: none;
    }
    #wrap{
        position: absolute;
        top:3rem;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        overflow: hidden;
        padding-left: 1rem;
    }
    .left{
        float: left;
    }
    .right{
        padding-left: 1rem;
        float: left;
    }
    .right p{
        padding-top: .5rem;
        overflow: hidden;
    }
    .right i{
        float: left;
        color: #ccc;
    }
    .right i.active{
        color: #f60;
    }
    .right span{
        color: #aaa;
    }
    .active{
        color: #f60;
    }
    .num{
        padding-left: .5rem;
        vertical-align: top;
        float: left;
    }
    h2{
        text-align: center;
        padding: .6rem;
        border-top:1px solid #ccc;
        border-bottom: 1px solid #ccc;
        color:#42bd56;
        font-size:1rem;
    }
    h3{
        color: #aaa;
    }
    li img {
        width: 3rem;
        height: 3rem;
    }
</style>
