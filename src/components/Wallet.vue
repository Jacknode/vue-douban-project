<template>
    <div>
        <mu-sub-header>当前余额: <i class="money">{{RechargePrice}}</i> 元</mu-sub-header>
        <router-link to="/recharge">
            <mu-raised-button label="充值" class="demo-raised-button Wallet" primary/>
        </router-link>

    </div>
</template>
<script>
    import {mapGetters} from 'vuex'
    export default{
        name: '',
        computed:mapGetters([
            'RechargePrice'
        ])
    }
</script>
<style scoped>
.Wallet{
    float: right;
    margin-right: 2rem;
}
    .money{
        color: #f60;
        font-weight:bold;
    }
</style>
