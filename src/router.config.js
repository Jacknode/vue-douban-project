/**
 * Created by leibo on 17/8/21.
 */
import Home from './components/Home.vue'
import List from './components/List.vue'
import Detail from './components/Detail.vue'
import Search from './components/Search.vue'
import Book from './components/Book.vue'
import NewList from './components/newList.vue'
import BookDetail from './components/BookDetail.vue'
import Login from './components/Login.vue'
import  Registration from './components/Registration.vue'
import MusicInfo from './components/MusicInfo.vue'
import MusicDetail from './components/MusicDetail.vue'
import Movie from './components/Movie.vue'
import MovieDetail from './components/MovieDetail.vue'
import BookList from './components/BookList.vue'
import Game from './components/Game.vue'
import GameDetail from './components/GameDetail.vue'
import Admin from './components/Admin.vue'
import Collection from './components/Collection.vue'
import Orders from './components/Orders.vue'
import Recharge from './components/Recharge.vue'
import Wallet from './components/Wallet.vue'
import Purchased from './components/Purchased.vue'



export default [
    {
        path:'/',
        component:Movie
    },
    {
        path:'/movie',
        component:Home
    },
    {
        path:'/list/:title',
        component:List
    },
    {
        path:'/newList/detail/movie/:id',
        component:Detail
    },
    {
        path:'/detail/movie/:name/:id',
        component:Detail
    },
    {
        path:'/list/detail/:id',
        component:Detail
    },
    {
        path:'/list/all',
        component:List
    },
    {
        path:'/search',
        component:Search
    },
    {
        path:'/detail/search/:id',
        component:Detail
    },
    {
        path:'/detail/movie/:id',
        component:Detail
    },
    {
        path:'/book',
        component:Book
    },
    {
        path:'/newList/:name',
        name:'newList',
        component:NewList
    },
    {
        path:'/newList/detail/:id',
        name:'newListDetail',
        component:Detail
    },
    {
        path:'/detail/book/:id',
        name:'BookDetail',
        component:BookDetail
    },
    {
        path:'/newList/detail/book/:id',
        name:'newListBookDetail',
        component:BookDetail
    },
    //登录
    {
        path:'/login',
        name:'Login',
        component:Login
    },
    //注册
    {
        path:'/Registration',
        name:'Registration',
        component:Registration
    },
    {
        path:'/music',
        name:'MusicInfo',
        component:MusicInfo
    },
    {
        path:'/detail/music/:id',
        name:'MusicDetail',
        component:MusicDetail
    },
    {
        path:'/home/detail',
        name:'MovieDetail',
        component:GameDetail
    },
    {
        path:'/booklist/:name',
        component:BookList
    },
    {
        path:'/booklist/detail/book/:id',
        component:BookDetail
    },
    {
        path:'/game',
        name:'Game',
        component:Game
    },
    {
        path:'/newList/detail/music/:id',
        name:'newListMusicDetail',
        component:MusicDetail
    },
    {
        path:'/newList/detail/game/:id',
        name:'newListGameDetail',
        component:GameDetail
    },
    {
        path:'/admin',
        name:'Admin',
        component:Admin
    },
    //收藏
    {
        path:'/collection',
        name:'Collection',
        component:Collection
    },
    //订单
    {
        path:'/orders',
        name:'Orders',
        component:Orders
    },
    //充值
    {
        path:'/recharge',
        name:'Recharge',
        component:Recharge
    },
    //钱包
    {
        path:'/wallet',
        name:'Wallet',
        component:Wallet
    },
    //已购买
    {
        path:'/purchased',
        name:'Purchased',
        component:Purchased
    }
]

