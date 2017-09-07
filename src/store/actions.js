/**
 * Created by leibo on 17/8/21.
 */
import axios from 'axios'
import JSONP from '../assets/js/JSONP'
import obj from '../assets/js/api'

export default {
    showLoading({commit}){
        commit('showLoading');
    },
    hideLoading({commit}){
        commit('hideLoading')
    },
    setReviews({commit},reviews){
        commit('setReviews',reviews);
    },
    setDetails({commit},details){
        commit('setDetails',details)
    },
    hideHeader({commit}){
        commit('hideHeader')
    },
    setLists({commit},lists){
        commit('setLists', lists)
    },
    setInputList({commit},inputList){
        commit('setInputList',inputList)
    },
    hideLoadAll({commit}){
        commit('hideLoadAll')
    },
    hideBookLoadAll({commit}){
        commit('hideBookLoadAll');
    },
    setBookList({commit},bookList){
        commit('setBookList',bookList)
    },
    pushReviews({commit},pushViews){
        commit('pushReviews',pushViews)
    },

    getTopList({commit},id){
        return new Promise(function (resolve,reject) {
            //电影条目信息
            axios.get(obj.api('/list/subject/'+id+'?apikey=0b2bdeda43b5688921839c8ecb20399b')).then((data)=>{
                var result = data.data;
                commit('setDetails',result)
            })
            //短评条目列表
            axios.get(obj.api('/list/subject/'+id+'/reviews?apikey=0b2bdeda43b5688921839c8ecb20399b&start=0&count=2')).then((data)=>{
                var reviews = data.data.reviews;
                if(reviews.length){
                    for(var i=0;i<reviews.length;i++){
                        if(!reviews[i].rating){
                            reviews[i].rating = {
                                value:0
                            }
                        }
                        var start = Math.round(reviews[i].rating.value);
                        if(start==0){
                            reviews[i].isOff = false
                        }else{
                            reviews[i].isOff = true
                        }
                        reviews[i].index = start;
                    }
                    // this.$store.dispatch('setReviews',reviews)
                    commit('setReviews',reviews)
                }
            })
            resolve();
        })
    },
    loadMoreList(store,{ page, count,id}){
        // console.log(page,count,id)
        return new Promise(function (resolve,reject) {
           axios.get(obj.api('/list/subject/'+id+'/reviews?apikey=0b2bdeda43b5688921839c8ecb20399b&start='+page+'&count='+count+'')).then((data)=>{
                var reviews = data.data.reviews;
                if(reviews.length){
                    for(var i=0;i<reviews.length;i++){
                        var start = Math.round(reviews[i].rating.value);
                        if(start==0){
                            reviews[i].isOff = false
                        }else{
                            reviews[i].isOff = true
                        }
                        reviews[i].index = start;
                    }
                    // console.log(reviews)
                    reviews = reviews.slice(count-2)
                    store.commit('pushReviews',reviews)
                    resolve()
                }else{
                    reject()
                }


            })
        })
    },
    getBookList({commit},id){
        console.log(id)
    },
    setNewLists({commit},newLists){
        commit('setNewLists',newLists)
    },
    setBookDetails({commit},bookDetails){
        commit('setBookDetails',bookDetails)
    },
    setBookReviews({commit},bookReviews){
        commit('setBookReviews',bookReviews)
    },
    setBookReviewsList(store,{page,count,id}){
        return new Promise(function(resolve,reject) {
            store.dispatch('showLoading')
            JSONP.getJSON('https://m.douban.com/rexxar/api/v2/book/'+id+'/interests?start='+page+'&callback=json1&count='+count+'',null,function (data) {
                store.dispatch('hideLoading')
                var result = data.interests;
                for(var i=0;i<result.length;i++){
                    if(!result[i].rating){
                        result[i].rating = {
                            value:0
                        }
                    }
                    var start = Math.round(result[i].rating.value);
                    if(start==0){
                        result[i].isOff = false
                    }else{
                        result[i].isOff = true
                    }
                    result[i].index = start;
                }
                result = result.slice(count-2);
                console.log(result)
                store.commit('setBookReviewsLists',result);
                if(store.getters.newBookReviews.length){
                    resolve();
                }

            })
        });
    },
    getInfoList(store,id){
        return new Promise(function (resolve,reject) {
            store.dispatch('showLoading')
            JSONP.getJSON('https://api.douban.com/v2/book/'+id+'?callback=json',null,function (data) {
                store.commit('setBookDetails',data);
            })
            JSONP.getJSON('https://m.douban.com/rexxar/api/v2/book/'+id+'/interests?count=4&callback=json3&start=0',null,function (data) {
                store.dispatch('hideLoading')
                var result = data.interests;
                for(var i=0;i<result.length;i++){
                    if(!result[i].rating){
                        result[i].rating = {
                            value:0
                        }
                    }
                    var start = Math.round(result[i].rating.value);
                    if(start==0){
                        result[i].isOff = false
                    }else{
                        result[i].isOff = true
                    }
                    result[i].index = start;
                }
                store.commit('setBookReviews',result)
            })
            resolve();
        })
    },
    musicInfoList(store,id){
        return new Promise(function (resolve,reject) {
            store.dispatch('showLoading')
            JSONP.getJSON('https://api.douban.com/v2/music/'+id+'?apikey=0b2bdeda43b5688921839c8ecb20399b&callback=json1',null,function (data) {
                    var start = Math.round(data.rating.average/2);
                    if(start==0){
                        data.isOff = false
                    }else{
                        data.isOff = true
                    }
                data.index = start;
                store.commit('setMusicDetails',data);
            })
            JSONP.getJSON('https://m.douban.com/rexxar/api/v2/music/'+id+'/interests?count=4&start=0&callback=json2',null,function (data) {
                store.dispatch('hideLoading')
                var result = data.interests;
                if(result.length){
                    for(var i=0;i<result.length;i++){
                        if(!result[i].rating){
                            result[i].rating = {
                                value:0
                            }
                        }
                        var start = Math.round(result[i].rating.value);
                        if(start==0){
                            result[i].isOff = false
                        }else{
                            result[i].isOff = true
                        }
                        result[i].index = start;
                    }
                }
                store.commit('setMusicComments',result)
            })
            resolve();
        })
    },
    setMusicReviewsList(store,{page,count,id}){
        return new Promise(function (resolve,reject) {
            store.dispatch('showLoading')
            JSONP.getJSON('https://m.douban.com/rexxar/api/v2/music/'+id+'/interests?count='+count+'&start='+page+'&callback=json2',null,function (data) {
                store.dispatch('hideLoading')
                var result = data.interests;
                if(result.length){
                    for(var i=0;i<result.length;i++){
                        if(!result[i].rating){
                            result[i].rating = {
                                value:0
                            }
                        }
                        var start = Math.round(result[i].rating.value);
                        if(start==0){
                            result[i].isOff = false
                        }else{
                            result[i].isOff = true
                        }
                        result[i].index = start;
                    }
                }
                result = result.slice(count-2);
                store.commit('setMusicCommentsList',result);
                resolve();
            })
        })
    },
    //首页
    getCards(store){
        store.dispatch('showLoading');
        JSONP.getJSON('https://m.douban.com/rexxar/api/v2/recommend_feed?callback=json1',null,function (data) {
            store.dispatch('hideLoading');
            var resulte = data.recommend_feeds;
            store.commit('setMovieCards',resulte)
        })
    },
    setIsLogin({commit},username){
        commit('setIsLogin',username)
    },
    setActive({commit},active){
        commit('setActive',active);
    },
    setFooter({commit}){
        commit('setFooter')
    },
    //喜欢
    setBookCollection({commit},bookCollection){
        commit('setBookCollection',bookCollection)
    },
    setMovieCollection({commit},movieCollection){
        commit('setMovieCollection',movieCollection)
    },
    setMusicCollection({commit},musicCollection){
        commit('setMusicCollection',musicCollection)
        commit('setMusicCollection',musicCollection)
    },
    //图书购买
    setBuyBook({commit},buyBook){
        commit('setBuyBook',buyBook)
    },
    //充值金额
    setRechargePrice({commit},price){
        commit('setRechargePrice',price)
    },
    updatePrice(store,price){

        return new Promise(function (relove,reject) {
            if(store.getters.RechargePrice<price){
                reject()
            }else{
                store.commit('updatePrice',price)
                relove();
            }
        })

    },
    //处理结算后
    updateRechargePrice({commit},val){
        commit('updateRechargePrice',val)
    },
    getArrLists(store){
        store.dispatch('showLoading');
        JSONP.getJSON('https://m.douban.com/rexxar/api/v2/subject_collection/book_fiction/items?os=ios&callback=jsonp1&start=0&count=8&loc_id=0&_=1504696246739',null,function (data) {
            var result = data.subject_collection_items;
            store.commit('getArrlist1',result)
        })
        JSONP.getJSON('https://m.douban.com/rexxar/api/v2/subject_collection/book_nonfiction/items?os=ios&callback=jsonp2&start=0&count=8&loc_id=0&_=1504696246742',null,function (data) {
            store.dispatch('hideLoading');
            var result = data.subject_collection_items;
            store.commit('getArrlist2',result)
        })
    }
}

