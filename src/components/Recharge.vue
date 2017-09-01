<template>
    <div>
        <div class="contents">
            <mu-text-field hintText="输入要充值的金额" v-model="price"/><br/>
            <mu-raised-button label="确认" class="demo-raised-button" primary  @click="open('top')"/>
            <mu-popup position="top" :overlay="false" popupClass="demo-popup-top" :open="topPopup">
                {{textVal}}
            </mu-popup>
            <mu-sub-header>当前余额: <i class="money">{{RechargePrice}}</i> 元</mu-sub-header>
        </div>
    </div>
</template>
<script>
    import {mapGetters} from 'vuex'
    export default{
        name: '',
        data(){
            return {
                topPopup: false,
                price:'',
                textVal:''
            }
        },
        computed:mapGetters([
           'RechargePrice',
            'isLogin'
        ]),
        methods:{
            open (position) {
                if(this.isLogin){
                    if(isNaN(this.price)){
                        this.textVal = '请输入数字';
                        this[position + 'Popup'] = true
                        return;
                    }
                    if(Number(this.price)!=0){
                        this.textVal = '充值成功';
                        var price = Number(this.price);
                        this.$store.dispatch('setRechargePrice',price);
                        this[position + 'Popup'] = true
                    }else{
                        this.textVal = '不能输入0';
                        this[position + 'Popup'] = true
                        return;
                    }
                }else{
                    this.textVal = '请先登录!';
                    this[position + 'Popup'] = true
                    return;
                }
            }
        },
        watch:{
            topPopup (val) {
                if (val) {
                    setTimeout(() => {
                        this.topPopup = false
                    }, 2000)
                }
            }
        }
    }
</script>
<style lang="css">
    .demo-popup-top {
        background: green;
        width: 50%;
        opacity: .8;
        height: 30px;
        line-height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        max-width: 375px;
        color: #fff;
        border-radius: 5px;
    }
    .contents{
        padding-top: 1rem;
        padding-left: 1rem;
    }
    .money{
        color: #f60;
    }
</style>
