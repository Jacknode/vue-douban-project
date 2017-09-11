<template>
    <div>
        <div class="wrapContent">
            <div class="head">
                <span>{{title}}</span>
                <router-link :to="'list/'+itemStr">更多</router-link>
            </div>
            <div class="clear"></div>
            <div class="picAll">
                <div class="pics">
                   <a href="javascript:;"  v-for="item in banner">
                      <router-link :to="'detail/movie/'+itemStr+'/'+item.id">
                          <img alt="" v-lazy="item.images.small">
                          <p class="title">{{item.title}}</p>
                          <p v-show="item.isOff">
                              <i class="fa fa-star active" v-for="a in item.index"></i>
                              <i class="fa fa-star" v-for="b in 5-item.index"></i>
                          </p>
                          <span v-if="item.isOff">{{item.rating.average}}</span>
                          <span v-else style="padding-right: 0.7rem;">暂无评分</span>
                      </router-link>
                   </a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        props:['banner','title','itemStr']
    }
</script>
<style scoped>
    .wrapContent .picAll .pics a{
        color: #aaa;
    }
</style>
