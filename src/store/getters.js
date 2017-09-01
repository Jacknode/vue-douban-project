/**
 * Created by leibo on 17/8/21.
 */
export default {
    loadingShow(state){
        return state.loadingShow
    },
    reviews(state){
        return state.reviews;
    },
    details(state){
        return state.details;
    },
    headerShow(state){
        return state.headerShow
    },
    lists(state){
        return state.lists;
    },
    inputList(state){
        return state.inputList;
    },
    showLoadAll(state){
        return state.showLoadAll;
    },
    BookList(state){
        return state.BookList;
    },
    showBookLoadAll(state){
        return state.showBookLoadAll;
    },
    newDetails(state){
        return state.newDetails;
    },
    BookDetails(state){
        return state.BookDetails
    },
    BookReviews(state){
        return state.BookReviews;
    },
    newLists(state){
        return state.newLists;
    },
    newBookReviews(state){
        return state.newBookReviews;
    },
    //音乐
    MusicDetails(state){
        return state.MusicDetails;
    },
    musicComments(state){
        return state.musicComments
    },
    newMusicReviews(state){
        return state.newMusicReviews;
    },
    movieCards(state){
        return state.movieCards;
    },
    isLogin(state){
        return state.isLogin;
    },
    username(state){
        return state.username
    },
    //处理切换路由添加active
    isHome(state){
        var name = state.activeName;
        if(name.endsWith('/')){
            return !state.isHome;
        }

    },
    isBook(state){
        var name = state.activeName;
        if(name.includes('/book')){
            return !state.isBook
        }
    },
    isMovie(state){
        var name = state.activeName;
        if(name.includes('/movie')){
            return !state.isMovie
        }
    },
    isMusic(state){
        var name = state.activeName;
        if(name.includes('/music')){
            return !state.isMusic
        }
    },
    isAdmin(state){
        var name = state.activeName;
        if(name.includes('/admin')||name.includes('/orders')||name.includes('/recharge')||name.includes('/collection')||name.includes('/wallet')){
            return !state.isAdmin
        }
    },
    showFooter(state){
        return state.showFooter;
    },
    //喜欢
    BookCollection(state){
        return state.BookCollection;
    },
    MovieCollection(state){
        return state.MovieCollection;
    },
    MusicCollection(state){
        return state.MusicCollection
    },
    //购物车
    BuyBooks(state){
        return state.BuyBooks;
    },
    //充值金额
    RechargePrice(state){
        return state.RechargePrice;
    }
}
