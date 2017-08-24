/**
 * Created by leibo on 17/8/21.
 */
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
    }
}
