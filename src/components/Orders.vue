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
                    <mu-checkbox label="选中" class="demo-checkbox" v-model="checkList" :nativeValue="book.price" @change="change(book.id)"/> <br/>
                </router-link>
            </div>

            <div class="allCheckboxs">
                <mu-checkbox label="全选" class="demo-checkbox" v-model="allChecks"/>
                <span class="allPrice">总价: {{allPrice}}元</span>
            </div>
            <div class="clear"></div>
                <mu-raised-button label="结算" @click="open" style="float: right;margin-right: 1rem;margin-top: 1rem" primary/>
                <mu-dialog :open="dialog" title="Dialog" @close="close">
                    确认付款吗？
                    <mu-flat-button slot="actions" @click="close" primary label="取消"/>
                    <mu-flat-button slot="actions" primary @click="close" label="确定"/>
                </mu-dialog>
            <div class="ico"></div>
        </scroller>
            <h2 v-else>购物车空空如也！</h2>
        <div class="top" :class="{show:isShow}">{{textVal}}</div>
    </div>
</template>
<script>
    export default{
        name: '',
        data(){
            return {
               checkList:[],
                allCheck:false,
                dialog: false,
                addCollection:true,
                isShow:false,
                textVal :'',
                allId:[]
            }
        },
        created(){

        },
        computed:{
            BuyBooks(){
                return this.$store.getters.BuyBooks;
            },
            allPrice(){
                var num = 0;
                for(var i=0;i<this.checkList.length;i++){
                    num+=parseFloat(this.checkList[i])
                }
                return num
            },
            allChecks: {
                get() {
                    return this.BuyBooks.length==this.checkList.length;
                },
                set(newValue) {
                    if (newValue) {
                        this.checkList = this.BuyBooks.map(book => {
                            return book.price;
                        });
                    } else {
                        this.checkList = [];
                    }
                }
            }
        },
        methods:{
            open () {
                if(this.addCollection){
                    this.dialog = true;
                    this.addCollection = false
                }
            },
            close () {
                this.dialog = false;
                this.$store.dispatch('updatePrice',this.allPrice).then(()=>{
                    console.log('支付成功')
                    this.textVal = '支付成功'
                    this.isShow = true;
                    this.$store.dispatch('updateRechargePrice',this.allId)
                    setTimeout(()=>{
                        this.isShow = false;
                    },2000)
                },()=>{
                    console.log('余额不足')
                    this.textVal = '余额不足'
                    this.isShow = true;
                    setTimeout(()=>{
                        this.isShow = false;
                    },2000)
                })
            },
            change(id){
                if(!this.allId.includes(id)){
                    this.allId.push(id);
                }
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
        top:3rem;
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
    .allCheckboxs{
        padding-left: 20/@r;
    }
    .allPrice{
        font-size:15px;
        font-weight:bold;
        float: right;
        padding-right: 80/@r;
    }
    .Clearing{
        padding-top: 10/@r;
        float: right;
        padding-right: 20/@r;
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
    .top{
        position: absolute;
        left: 160/@r;
        top:0rem;
        transition: .5s;
        background: green;
        color: #fff;
        border-radius: 5px;
        padding: 5px 10px;
        font-size:12px;
        opacity: 0;
    }
    .show{
        top:3rem;
        opacity: 1;
    }

</style>
