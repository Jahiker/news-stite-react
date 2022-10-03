import { Home } from "./pages/Home"
import { News } from "./pages/News"
import { Search } from "./pages/Search"

export const router = [
    {
        id: 1,
        path: '/',
        element: Home,
        name: 'Home'
    },
    {
        id: 2,
        path: '/news',
        element: News,
        name: 'News'
    },
    {
        id: 3,
        path: '/search/:q',
        element: Search,
        name: 'Search'
    }
]