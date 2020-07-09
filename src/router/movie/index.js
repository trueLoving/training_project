export default {
    path: '/movie',
    component: () => import('@/views/Movie'),
    children: [
        {
            path: 'nowPlaying',
            component: () => import('@/components/NowPlaying')
        },
        {
            path: 'comingSoon',
            component: () => import('@/components/ComingSoon')
        },
        {
            path: '/movie',
            redirect: '/movie/nowPlaying'
        }
    ]
}