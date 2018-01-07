import Vue from 'vue'
import Router from 'vue-router'
import IScrollView from 'vue-iscroll-view'
import IScroll from 'iscroll'
import index from '@/components/index'
import Shop from '../components/shop'
import Car from '../components/car'
import Success from '../components/success'
import Unsuccess from '../components/unsuccess'
import Vueresource from "vue-resource"
import Center from '../components/center'
import Detail from '../components/detail'
import Game from '../components/game'
import Risk from '../components/risk'
import Singer from '../components/singer'
import Room from '../components/room'
import Brain from '../components/brain'
import Guess from '../components/guess'
import Femalesinger from '../components/femalesinger'
import Songs from '../components/songs'
import Songsdetail from '../components/songsdetail'
import Paihang from '../components/paihang'
import Ordersongs from '../components/ordersongs'
import Orderedsongs from '../components/orderedsongs'
import Recommend from '../components/recommend'
import Song_recommendList from '../components/song_recommendList'

Vue.use(Router)
Vue.use(Recommend)
Vue.use(Vueresource)
Vue.use(Shop)
Vue.use(Success)
Vue.use(Unsuccess)
Vue.use(IScrollView, IScroll)
Vue.use(Center)
Vue.use(Detail)
Vue.use(Game)
Vue.use(Risk)
Vue.use(Singer)
Vue.use(Room)
Vue.use(Brain)
Vue.use(Guess)
Vue.use(Femalesinger)
Vue.use(Songs)
Vue.use(Songsdetail)
Vue.use(Paihang)
Vue.use(Ordersongs)
Vue.use(Orderedsongs)
Vue.use(Song_recommendList)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/shop',
      name: 'shop',
      component: Shop
    },
    {
      path: '/car',
      name: 'car',
      component: Car
    },
    {
      path: '/success',
      name: 'success',
      component: Success
    },
    {
      path: '/unsuccess',
      name: 'unsuccess',
      component: Unsuccess
    },
    {
      path: '/center',
      name: 'center',
      component:Center
    },
    {
      path: '/detail',
      name: 'detail',
      component:Detail
    },
    {
      path: '/game',
      name: 'game',
      component:Game
    },
    {
      path: '/risk',
      name: 'risk',
      component:Risk
    },
    {
      path: '/room',
      name: 'room',
      component:Room
    },
    {
      path: '/singer',
      name: 'singer',
      component:Singer
    },
    {
      path: '/brain',
      name: 'brain',
      component:Brain
    },
    {
      path: '/guess',
      name: 'guess',
      component:Guess
    },
    {
      path: '/femalesinger',
      name: 'femalesinger',
      component:Femalesinger
    },
    {
      path: '/songs',
      name: 'songs',
      component:Songs
    },
    {
      path: '/songsdetail',
      name: 'songsdetail',
      component:Songsdetail
    },
    {
      path: '/songsdetail',
      name: 'songsdetail',
      component:Songsdetail
    },
    {
      path: '/paihang',
      name: 'paihang',
      component:Paihang
    },
    {
      path: '/ordersongs',
      name: 'ordersongs',
      component:Ordersongs
    },
    {
      path: '/orderdsongs',
      name: 'orderdsongs',
      component:Orderedsongs
    },
    {
      path: '/recommend',
      name: 'recommend',
      component:Recommend
    },
    {
      path: '/song_recommendList',
      name: 'song_recommendList',
      component:Song_recommendList
    },
    
  ]
})
