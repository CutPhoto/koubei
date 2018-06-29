import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import liftCircle from '../pages/liftCircle.vue'
import liftDetails from '../pages/liftDetails.vue'

//我的页面
import xMyHome from '../components/mypage/xMyHome'

import xDingDanHome from '../components/mypage/dingdanPage/xDingDanHome'

import xZhiFuDingDan from '../components/mypage/dingdanPage/xZhiFuDingDan'

import xYouHuiQuan from '../components/mypage/youhuiPage/xYouHuiQuan'

import xka from '../components/mypage/kaPage/xka'

import xPingJia from '../components/mypage/pingjiaPage/xPingJia'

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
	},{
		path: '/ka',
		name: 'ka',
		component: xka
	},{
		path: '/pingjia',
		name: 'pingjia',
		component: xPingJia
	}]
})