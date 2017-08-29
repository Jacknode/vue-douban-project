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
    }
}
