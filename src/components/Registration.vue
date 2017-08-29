<template>
    <div>
        <div class="content">
            <h1>欢迎加入豆瓣</h1>
            <mu-auto-complete hintText="邮箱 / 手机号 / 用户名" labelFloat label="邮箱 / 手机号 / 用户名" fullWidth @input="username"/>
            <mu-auto-complete hintText="密码最少6位" labelFloat label="密码最少6位" fullWidth @input="password"/>
        </div>
        <div class="top" v-text="text" :class="{green:isShow}"></div>
        <mu-raised-button label="注册" class="demo-raised-button" primary :fullWidth="true" @click="loginItem"/>
        <router-link  to="/Registration">
        </router-link>

    </div>
</template>

<script>
    export default {
        data () {
            return {
                usernameVal:'',
                passwordVal:'',
                topPopup:false,
                isShow:false,
                text:'',
            }
        },
        methods: {
            username (val) {
                this.usernameVal = val;
            },
            password(val){
                this.passwordVal = val
            },
            loginItem(){
                var storage = window.localStorage;
                storage.setItem(this.usernameVal,this.passwordVal);
                this.isShow = true;
                this.text = '注册成功'
                setTimeout(()=>{
                    this.isShow = false
                },2000)
//                if(this.loginCeItem()){
//                    this.isShow = true;
//                    this.text = '注册成功'
//                    setTimeout(()=>{
//                        this.isShow = false
//                    },2000)
//                }else{
//                    this.text = '注册失败';
//                    this.isRed = true;
//                    setTimeout(()=>{
//                        this.isRed = false;
//                    },2000)
//                }
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
    h1{
        text-align: center;
        color: green;
    }
</style>
