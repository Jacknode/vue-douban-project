<template>
    <div>
        <!--中间部分-->
        <scroller
            class="positions"
        >
            <MusicBanner :MusicBanner="newAlbum" title="华语新碟榜"></MusicBanner>
            <MusicBanner :MusicBanner="Europe" title="欧美新碟榜"></MusicBanner>
            <MusicBanner :MusicBanner="japan" title="日韩新碟榜"></MusicBanner>
            <FooterList :footerList="footerList" itemStr="music"></FooterList>
        </scroller>
    </div>
</template>
<script>
    import MusicBanner from './MusicBanner.vue'
    import JSONP from '../assets/js/JSONP'
    import banner from '../assets/js/fn.js'
    import FooterList from './footerList.vue'
    export default{
        name: '',
        data(){
            return {
                newAlbum:[],
                Europe:[],
                japan:[],
                footerList:[
                    {
                        name:[{val:'流行',link:'musicMpop'},{val:'摇滚',link:'musicMrock'}]
                    },
                    {
                        name:[{val:'民谣',link:'musicMfolk'},{val:'独立',link:'musicMindie'}]
                    },
                    {
                        name:[{val:'华语',link:'musicMchinese'},{val:'欧美',link:'musicMwestern'}]
                    },
                    {
                        name:[{val:'日本',link:'musicMjapan'},{val:'韩国',link:'musicMkorean'}]
                    }]
            }
        },
        mounted(){
            this.getItem();
        },
        updated(){
            banner();
        },
        components:{
            MusicBanner,
            FooterList
        },
        methods:{
            getItem(){
                var _this = this;
                this.$store.dispatch('showLoading')
                JSONP.getJSON('https://m.douban.com/rexxar/api/v2/subject_collection/music_chinese/items?callback=jsonp1&start=0&count=8',null,function (data) {
                    var result = data.subject_collection_items;
                    _this.newAlbum = result
                })
                JSONP.getJSON('https://m.douban.com/rexxar/api/v2/subject_collection/music_occident/items?os=ios&callback=jsonp2&start=0&count=8&loc_id=0&_=1503969760613',null,function (data) {
                    var result = data.subject_collection_items;
                    _this.Europe = result
                });
                JSONP.getJSON('https://m.douban.com/rexxar/api/v2/subject_collection/music_japan_korea/items?os=ios&callback=jsonp3&start=0&count=8&loc_id=0&_=1503969760614',null,function (data) {
                    _this.$store.dispatch('hideLoading')
                    var result = data.subject_collection_items;
                    _this.japan = result
                })

            }
        }
    }
</script>
<style scoped>
    .positions{
        top:3rem !important;
        margin-bottom: -3rem;
    }
</style>
