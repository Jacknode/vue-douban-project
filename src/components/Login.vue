<template>
    <div>
        <div class="content">
            <mu-auto-complete hintText="邮箱 / 手机号 / 用户名" labelFloat :label="str" fullWidth @input="username"/>
            <mu-text-field label="密码" hintText="密码" @input="password" type="password"/>
        </div>
        <div class="top" v-text="text" :class="{green:isShow,red:isRed}"></div>
        <mu-raised-button label="登录" class="demo-raised-button" primary :fullWidth="true" @click="loginItem"/>
        <router-link  to="/Registration">
            <mu-raised-button label="注册" class="demo-raised-button" primary :fullWidth="true"/>
        </router-link>

    </div>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        data () {
            return {
                usernameVal:'',
                passwordVal:'',
                topPopup:false,
                isShow:false,
                text:'',
                isRed:false,
                str:'邮箱 / 手机号 / 用户名'
            }
        },
        computed:mapGetters([
            'isLogin'
        ]),
        methods: {
            username (val) {
                if(val==''){
                    this.text = '不能输入空';
                    this.isRed = true;
                    setTimeout(()=>{
                        this.isRed = false;
                    },2000)
                    return;
                }
                this.usernameVal = val;
            },
            password(val){
                if(val==''){
                    this.text = '不能输入空';
                    this.isRed = true;
                    setTimeout(()=>{
                        this.isRed = false;
                    },2000)
                    return;
                }
                this.passwordVal = val
            },
            loginCeItem(){
                var storage = window.localStorage;
                for(var i=0;i<storage.length;i++){
                    if(this.usernameVal == storage.key(i)&&this.passwordVal == storage.getItem(this.usernameVal)){
                        return true;
                    }
                }
                return false;
            },
            loginItem(){
                if(this.loginCeItem()){
                    this.isShow = true;
                        this.text = '登录成功';
                        this.$store.dispatch('setIsLogin',{
                            username:this.usernameVal
                        })
                        setTimeout(()=>{
                            this.isShow = false
                        },1000);
//                    setTimeout(()=>{
//                        window.location.href = 'http://localhost:8080/'
//                    },2000)
                    this.$router.push({path:'/'})
                }else{
                    this.text = '登录失败';
                    this.isRed = true;
                    setTimeout(()=>{
                        this.isRed = false;
                    },2000)
                }
            }
        },
        watch:{
            topPopup(val){
                if (val) {
                    setTimeout(() => {
                        this.topPopup = false
                    }, 2000)
                }
            }
        }
    }
</script>
<style scoped>
    .content{
        padding-left:20px;
    }
    .demo-raised-button{
        border-radius: 10px;
        color: #fff;
        height: 40px;
        margin-bottom: 5px;
    }
    .top{
        position: absolute;
        top:-30px;
        left: 50%;
        width: 100px;
        margin-left: -50px;
        text-align: center;
        color: #fff;
        height: 30px;
        border-radius: 5px;
        line-height:30px;
        transition: .5s;
    }
    .green{
        background: green;
        top:0;
    }
    .red{
        background: #f60;
        top:0;
    }
</style>
