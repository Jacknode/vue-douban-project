/**
 * Created by leibo on 17/8/21.
 */

import getters from './getters'



const state = {
    loadingShow:false,
    reviews:[],
    details:null,
    headerShow:true,
    lists:[],
    newLists:[],
    //搜索
    inputList:[],
    showLoadAll:true,
    BookList:[],
    showBookLoadAll:true,
    newDetails:[],
    BookReviews:[],
    BookDetails:null,
    newBookReviews:[],
    //音乐
    MusicDetails:null,
    musicComments:[],
    newMusicReviews:[],
    //首页
    movieCards:[],
    isLogin:false,
    username:{},
    activeName:'/',
    isBook:false,
    isMovie:false,
    isMusic:false,
    isAdmin:false,
    isHome:false,
    showFooter:true,
    //收藏
    BookCollection:[],
    MovieCollection:[],
    MusicCollection:[],
    //购买图书
    BuyBooks:[],
    //充值金额
    RechargePrice:0,
    //已购买
    Purchased:[],
    newArrList:[],
    newArrList2:[],
    NewMovieCards:{},
    GameReviews:[],
    // 电影首页
    bannerList:[],
    UpcomingList:[],
    newMoveList:[],
    TopList:[],
};
const mutations = {
    showLoading(state){
        state.loadingShow = true
    },
    hideLoading(state){
        state.loadingShow = false;
    },
    setReviews(state,reviews){
        state.reviews = reviews;
    },
    pushReviews(state,pushViews){
        state.newDetails = [...state.newDetails,...pushViews]
    },
    setDetails(state,details){
        state.details = details
    },
    hideHeader(state){
        state.headerShow = false
    },
    setLists(state,lists){
        state.lists = lists;
    },
    setNewLists(state,newLists){
        state.newLists = newLists
    },
    //搜索
    setInputList(state,inputList){
        state.inputList = inputList;
    },
    hideLoadAll(state){
        state.showLoadAll = false;
    },
    hideBookLoadAll(state){
        state.showBookLoadAll = false;
    },
    setBookList(state,bookList){
        state.BookList = bookList;
    },
    setBookDetails(state,bookDetails){
        state.BookDetails = bookDetails;
    },
    setBookReviews(state,bookReviews){
        state.BookReviews = bookReviews;
    },
    setBookReviewsLists(state,bookDetailList){
        state.newBookReviews = [...state.BookReviews,...bookDetailList]
    },
    //音乐
    setMusicDetails(state,MusicDetails){
        state.MusicDetails = MusicDetails
    },
    setMusicComments(state,MusicComments){
        state.musicComments = MusicComments;
    },
    setMusicCommentsList(state,MusicCommentsList){
        state.newMusicReviews = [...state.musicComments,...MusicCommentsList]
    },
    setMovieCards(state,movieCards){
        state.movieCards = movieCards;
    },
    setIsLogin(state,username){
        state.isLogin = true;
        state.username = username;
    },
    setActive(state,name){
        state.activeName = name;
    },
    setFooter(state){
        state.showFooter = false;
    },
    //收藏
    setBookCollection(state,bookCollection){
        state.BookCollection.push(bookCollection);
    },
    setMovieCollection(state,movieCollection){
        state.MovieCollection.push(movieCollection)
    },
    setMusicCollection(state,musicCollection){
        state.MusicCollection.push(musicCollection);
    },
    //图书购买
    setBuyBook(state,data){
        state.BuyBooks.push(data);
    },
    //充值金额
    setRechargePrice(state,price){
        state.RechargePrice+=price;
    },
    //扣款
    updatePrice(state,price){
        state.RechargePrice -=price;
    },
    updateRechargePrice(state,data){
        var newData = Array.from(data);
        state.Purchased = state.BuyBooks;

        state.BuyBooks = state.BuyBooks.filter((item)=>{
            newData.forEach(dataId=>{
                if(item.id==dataId){
                    return true
                }
            })
            return false
        })
    },
    //清空已购买
    clearPurchased(state){
        state.Purchased = [];
    },
    getArrlist1(state,data){
        state.newArrList = data
    },
    getArrlist2(state,data){
        state.newArrList2 = data
    },
    //首页详情
    getNewMovieCards(state,id){
        state.NewMovieCards = state.movieCards.filter(item=>{
            if(item.id == id){
                return true;
            }
        })[0]
    },
    getGameReviews(state,data){
        for(var i=0;i<data.length;i++){
            if(!data[i].rating){
                data[i].rating = {
                    value:0
                }
            }
            var start = Math.floor(data[i].rating.value/2);
            if(start==0){
                data[i].isOff = false
            }else{
                data[i].isOff = true
            }
            data[i].index = start;
        }
        state.GameReviews = data;
    },
    //首页
    getBannerlist(state,data){
        state.bannerList = data
    },
    getUpcomingList(state,data){
        state.UpcomingList = data;
    },
    getNewMoveList(state,data){
        state.newMoveList = data
    },
    getTopList(state,data){
        state.TopList = data
    }
};

export default {
    state,
    mutations,
    getters
}
