<template>
    <div>
        <!--中间部分-->
        <section id="wrap">
            <div class="scroll">
                <div class="MwrapContent">
                    <div class="head">
                        <span>{{title}}</span>
                        <a href="javascript:;" @touchstart="showAll(str)">更多</a>
                    </div>
                    <div class="clear"></div>
                    <div class="MorePics">
                        <a href="javascript:;"  v-for="item in lists">
                            <router-link :to="'detail/'+item.id">
                                <img :src="item.images.small" alt="">
                                <p class="title">{{item.title}}</p>
                                <p v-show="item.isOff">
                                    <i class="fa fa-star active" v-for="a in item.index"></i>
                                    <i class="fa fa-star" v-for="b in 5-item.index"></i>
                                </p>
                                <span v-if="item.isOff">{{item.rating.average}}</span>
                                <span v-else style="padding-right: 0.7rem;">暂无评分</span>
                            </router-link>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
    import ListBan from '../assets/js/index.js'
    import {mapGetters,mapActions} from 'vuex'
     export default{
         name:'list',
         data(){
             return {
                 title:'影院',
                 htmlVal:'暂无评分',
                 str:'',
                 count:9
             }
         },
         computed:mapGetters([
             'lists'
         ]),
         updated(){
             ListBan();
         },
         mounted(){
             var arr = window.location.href.split('/');
             var str = arr[arr.length-1];
             this.getList(str)
             this.str = str;

         },
         methods:{
             getList(str){
                 var _this = this;
                 this.$http.get('/api.php/list/'+str+'?start=0&count='+_this.count+'').then(function (data) {
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
                     _this.$store.dispatch('setLists',result)
                 })
             },
             showAll(str){
                 var _this = this;
                 this.$http.get('/api.php/list/'+str+'').then(function (data) {
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
                     _this.$store.dispatch('setLists',result)
                 })
             }
         }
     }
</script>
<style scoped>
    .MwrapContent  a{
        color: #aaa;
    }
</style>
