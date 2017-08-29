<template>
    <div id="Home">
        <!--中间部分-->
        <section id="wrap">
            <div class="scroll">
                <BookContentView :banner="newArrList" title="最受关注图书｜虚构类" itemStr="fiction">
                </BookContentView>
                <BookContentView :banner="newArrList2" title="最受关注图书｜非虚构类" itemStr="nonfiction"></BookContentView>
                <FooterList :footerList="footerList" itemStr="book"></FooterList>
            </div>
        </section>
    </div>
</template>
<script>
    //  console.log(css)
    import banner from '../assets/js/fn.js'
    import BookContentView from './BookContent.vue'
    import FooterList from './footerList.vue'
    import JSONP from '../assets/js/JSONP'
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
                            name:[{val:'小说',link:'bookBnovel'},{val:'爱情',link:'bookBlove'}]
                        },
                        {
                            name:[{val:'历史',link:'bookBhistory'},{val:'外国文学',link:'bookBforeign'}]
                        },
                        {
                            name:[{val:'青春',link:'bookByouth'},{val:'励志',link:'bookBmotivation'}]
                        },
                        {
                            name:[{val:'随笔',link:'bookBessay'},{val:'传记',link:'bookBbio'}]
                        },
                        {
                            name:[{val:'推理',link:'bookBdetective'},{val:'旅行',link:'bookBtravel'}]
                        },
                        {
                            name:[{val:'奇幻',link:'bookBfantasy'},{val:'经营',link:'bookBbusiness'}]
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
            BookContentView,
            FooterList
        }
    }
</script>
