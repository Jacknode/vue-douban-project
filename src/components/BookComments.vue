<template>
    <div>
        <div class="Essay" v-for="item in reviews">
            <div class="EssayLeft">
                <img :src="item.user.avatar" alt="">
            </div>
            <div class="EssayRight">
                <div class="EssayHeader">
                    <span>{{item.user.name}}</span>
                    <span>
                         <i class="fa fa-star active" v-for="a in item.index"></i>
                        <i class="fa fa-star" v-for="b in 5-item.index"></i>
                    </span>
                </div>
                <p class="time">{{item.create_time}}</p>
                <p class="content">
                    {{item.comment}}
                </p>
                <p class="icon">
                    <i class="fa fa-thumbs-o-up"></i><span>{{item.vote_count}}</span>
                </p>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        props:['reviews'],
        name: ''
    }
</script>
<style scoped>
    .EssayHeader i{
        color: #aaa;
    }
</style>
