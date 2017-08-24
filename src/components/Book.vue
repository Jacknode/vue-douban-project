<template>
    <div id="Home">
        <!--中间部分-->
        <section id="wrap">
            <div class="scroll">
                <ContentView :banner="newArrList" title="最受关注图书｜虚构类" itemStr="in_theaters"></ContentView>
                <ContentView :banner="newArrList2" title="最受关注图书｜非虚构类" itemStr="coming_soon"></ContentView>
                <FooterList :footerList="footerList" itemStr="book"></FooterList>
            </div>
        </section>
    </div>
</template>
<script>
    //  console.log(css)
    import banner from '../assets/js/fn.js'
    import ContentView from './wrapContent.vue'
    import FooterList from './footerList.vue'
    export default{
        name:'Home',
        data(){
            return {
                bannerList:[],
                UpcomingList:[],
                newMoveList:[],
                TopList:[],
                arrList:[5431784,27028847,27042344,26969582,26981446,27045888,27044089,27069925],
                arrList2:[27056409,27026379,27052521,27044783,27026325,27037167,27029463,27009503],
                newArrList:[],
                newArrList2:[],
                footerList:[
                        {
                            name:[{val:'小说',link:'novel'},{val:'爱情',link:'love'}]
                        },
                        {
                            name:[{val:'历史',link:'history'},{val:'外国文学',link:'foreign'}]
                        },
                        {
                            name:[{val:'青春',link:'youth'},{val:'励志',link:'motivation'}]
                        },
                        {
                            name:[{val:'随笔',link:'essay'},{val:'传记',link:'bio'}]
                        },
                        {
                            name:[{val:'推理',link:'detective'},{val:'旅行',link:'travel'}]
                        },
                        {
                            name:[{val:'奇幻',link:'fantasy'},{val:'经营',link:'business'}]
                        }
                     ]
            }
        },
        mounted(){
            this.getItem();
        },
        updated(){
            banner();
        },
        methods:{
            getItem(){
                var _this = this;
                this.arrList.forEach(function (item) {
                    _this.$http.get('/book/'+item).then(function (data) {
                        var result = data.data;
                        _this.newArrList.push(result)
                    })
                })
                this.arrList2.forEach(function (item) {
                    _this.$http.get('/book/'+item).then(function (data) {
                        var result = data.data;
                        _this.newArrList2.push(result)
                    })
                })

            }
        },
        components:{
            ContentView,
            FooterList
        }
    }
</script>
