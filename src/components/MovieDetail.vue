<template>
    <div>
        <scroller
            class="positions"
            ref="movieDetail"
            v-if="NewMovieCards"
        >
            <div class="detailContent">
                <h2>{{NewMovieCards.title}}</h2>
                <div class="left">
                    <span>评价:{{NewMovieCards.target.read_count?NewMovieCards.target.read_count:''}} <br><br> 姓名:{{NewMovieCards.target.author.name}}</span>
                    <p>{{NewMovieCards.target.desc}}</p>
                </div>
                <div class="right">
                    <img alt="" v-lazy="NewMovieCards.target.cover_url">
                </div>
            </div>
        </scroller>
    </div>
</template>
<script>
    import {mapGetters} from 'vuex'
    export default{
        name: '',
        computed:mapGetters([
            'movieCards',
            'NewMovieCards'
        ]),
        mounted(){
            this.$store.commit('getNewMovieCards',this.$route.params.id)
        }
    }
</script>
<style scoped>
.positions{
    top:3rem !important
}
    h1{
        padding-left: 20px;
    }
    .right img{
        height: 8rem;
    }
</style>
