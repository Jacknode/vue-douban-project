<template>
    <div>
        <div class="wrapNav">
            <nav class="nav">
                <div class="card" v-for="item in footerList">
                    <a href="javascript:;">
                        <span>{{item.name[0].val}}</span>
                        <span><i class="fa fa-angle-right"></i></span>
                    </a>
                    <a href="javascript:;" v-show="item.name[1]">
                        <span>{{item.name[1]?item.name[1].val:''}}</span>
                        <span><i class="fa fa-angle-right"></i></span>
                    </a>
                </div>
            </nav>
        </div>
    </div>
</template>
<script>
    export default{
        props:['footerList','itemStr'],
        name: '',
        mounted(){
//            console.log(this.footerList)
        }
    }
</script>
<style scoped>
i{
    color: #ccc;
}
</style>
