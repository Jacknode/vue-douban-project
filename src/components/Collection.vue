<template>
    <div>
        <scroller
            class="positions"
            ref="bookDetail"
        >
            <div v-if="BookCollection.length||MovieCollection.length||MusicCollection.length">
                <div class="bookCards" v-show="BookCollection.length">
                    <h2>图书</h2>
                    <router-link  v-for="book in BookCollection" class="card" tag="div" :to="'/detail/book/'+book.id">
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
                    </router-link>

                </div>
                <div class="bookCards" v-show="MovieCollection.length">
                    <h2>电影</h2>
                    <router-link  v-for="movie in MovieCollection" class="card" tag="div" :to="'/detail/movie/'+movie.id">
                        <div class="cardLeft">
                            <p>{{movie.title}}</p>
                            <p>
                                {{movie.summary}}
                            </p>
                        </div>
                        <div class="cardRight">
                            <img :src="movie.images.small" alt="">
                        </div>
                        <div class="itemList">
                            <span>分钟: <i style="color: green">{{movie.durations[0]}}</i></span>
                            <span>语言: <i style="color: green">{{movie.languages[0]}}</i></span>
                        </div>
                    </router-link>
                </div>
                <div class="bookCards" v-show="MusicCollection.length">
                    <h2>音乐</h2>
                    <router-link  v-for="movie in MusicCollection" class="card" tag="div" :to="'/detail/music/'+movie.id">
                        <div class="cardLeft">
                            <p>{{movie.title}}</p>
                            <p>
                                {{movie.summary}}
                            </p>
                        </div>
                        <div class="cardRight">
                            <img :src="movie.image" alt="">
                        </div>
                    </router-link>
                </div>
            </div>
            <div v-else="" class="noneLove">
                <h2>还没有喜欢的吗?</h2>
            </div>
            <div class="ico"></div>
        </scroller>
    </div>
</template>
<script>
export default{
    name: '',
    data(){
        return {

        }
    },
    computed:{
        BookCollection(){
            return this.$store.getters.BookCollection;
        },
        MovieCollection(){
            return this.$store.getters.MovieCollection;
        },
        MusicCollection(){
            return this.$store.getters.MusicCollection;
        }
    },
    mounted(){
        console.log(this.$store.getters.MusicCollection)
    }
}
</script>
<style scoped lang="less">
@r:20rem;
.bookCards h2 {
    margin: 0;
    background: #f60;
    height: 60/@r;
    line-height:60/@r;
    font-size:22/@r;
    padding-left: 20/@r;
    color: #fff;

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
        height: 140/@r;
    }
    .noneLove h2{
        padding-left: 20/@r;
        padding-top: 30/@r;
        color: #f60;
    }
</style>
