<template>
    <div>
        <div class="wrapNav">
            <nav class="nav">
                <div class="card" v-for="item in footerList">
                    <router-link :to="{ name: 'newList', params: { name: item.name[0]?item.name[0].link:'' }}">
                        <span>{{item.name[0].val}}</span>
                        <span><i class="fa fa-angle-right"></i></span>
                    </router-link>

                    <router-link :to="{ name: 'newList', params: { name: item.name[1]?item.name[1].link:'' }}"  v-show="item.name[1]">
                        <span>{{item.name[1]?item.name[1].val:''}}</span>
                        <span><i class="fa fa-angle-right"></i></span>
                    </router-link>
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
        },
        computed:{
            nextList(item){
                console.log(item)
            }
        }
    }
</script>
<style scoped>
i{
    color: #ccc;
}
</style>
