/**
 * Created by leibo on 17/8/21.
 */
import Home from './components/Home.vue'
import List from './components/List.vue'
import Detail from './components/Detail.vue'
import Search from './components/Search.vue'
import Book from './components/Book.vue'

export default [
    {
        path:'/',
        component:Home
    },
    {
        path:'/list/:title',
        component:List
    },
    {
        path:'/detail/:name/:id',
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
    }
]
