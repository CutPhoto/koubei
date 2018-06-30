import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import liftCircle from '../pages/liftCircle.vue'
import liftDetails from '../pages/liftDetails.vue'
import Home from '@/components/home'
import shopDetails from '@/pages/shopDetails.vue'
import homeLiRen from '@/pages/homeLiRen.vue'

import nearby from '@/components/nearby/nearby'

import nearbyDetail from '@/components/nearbyDetail/nearbyDetail'

import orderCommit from '@/components/orderCommit/orderCommit'
//我的页面
import xMyHome from '../components/mypage/xMyHome'

import xDingDanHome from '../components/mypage/dingdanPage/xDingDanHome'

import xZhiFuDingDan from '../components/mypage/dingdanPage/xZhiFuDingDan'

import xYouHuiQuan from '../components/mypage/youhuiPage/xYouHuiQuan'

import xka from '../components/mypage/kaPage/xka'

import xPingJia from '../components/mypage/pingjiaPage/xPingJia'

import xCollectPage from '../components/mypage/collectPage/xCollectPage'

import xQuGuoDeDian from '../components/mypage/quguodedianPage/xQuGuoDeDian'

import xYinHangTeHui from '../components/mypage/yinhangtehuiPage/xYinHangTeHui'

Vue.use(Router)

export default new Router({

	mode: 'history',
	routes: [{
			path: '/',
			name: 'HelloWorld',
			component: HelloWorld
		}, {
			path: '/liftCircle',
			name: 'liftCircle',
			component: liftCircle
		}, {
			path: '/liftDetails',
			name: 'liftDetails',
			component: liftDetails
		},
		{
			path: '/home',
			name: 'Home',
			component: Home
		},
		{
			path: '/nearby',
			name: 'nearby',
			component: nearby
		}, {
			path: '/nearbyDetail',
			name: 'nearbyDetail',
			component: nearbyDetail
		}, {
			path: '/shopDetails',
			name: 'shopDetails',
			component: shopDetails
		}, {
			path: '/orderCommit',
			name: 'orderCommit',
			component: orderCommit
		}, {
			path: '/homeLiRen',
			name: 'homeLiRen',
			component: homeLiRen
		}, {
			path: '/myhome',
			name: 'Myhome',
			component: xMyHome
		}, {
			path: '/dingdanhome',
			name: 'DingDanHome',
			component: xDingDanHome
		}, {
			path: '/zhifudingdan',
			name: 'ZhiFuDingDan',
			component: xZhiFuDingDan
		}, {
			path: '/youhuiquan',
			name: 'YouHuiQuan',
			component: xYouHuiQuan
		}, {
			path: '/ka',
			name: 'ka',
			component: xka
		}, {
			path: '/pingjia',
			name: 'pingjia',
			component: xPingJia
		}, {
			path: '/collect',
			name: 'Collect',
			component: xCollectPage
		}, {
			path: '/quguodedian',
			name: 'QuGuoDeDian',
			component: xQuGuoDeDian
		}, {
			path: '/yinhangtehui',
			name: 'YinHangTeHui',
			component: xYinHangTeHui
		}
	]

})