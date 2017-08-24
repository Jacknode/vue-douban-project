/**
 * Created by leibo on 17/8/21.
 */

import getters from './getters'

const state = {
    loadingShow:false,
    reviews:[],
    details:{},
    headerShow:true,
    lists:[],
    //搜索
    inputList:[],
    showLoadAll:true,
    BookList:[],
    showBookLoadAll:true
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
    setDetails(state,details){
        state.details = details
    },
    hideHeader(state){
        state.headerShow = false
    },
    setLists(state,lists){
        state.lists = lists;
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
    }

};
export default {
    state,
    mutations,
    getters
}
