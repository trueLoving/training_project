import Vue from 'vue'
import VueRouter from 'vue-router'
import movieRouter from './movie'
import cinemaRouter from './cinema'
import mineRouter from './mine'
import realTimeInfoRouter from "./realTimeInfo";

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    movieRouter,
    cinemaRouter,
    realTimeInfoRouter,
    mineRouter,
    // 不匹配重定向
    {
      path : '/*',
      redirect : '/movie'
    }
  ]
})

export default router
