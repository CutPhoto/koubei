import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import liftCircle from '../pages/liftCircle.vue'
import shopDetails from '@/pages/shopDetails.vue'

import nearby from '@/components/nearby/nearby'

import nearbyDetail from '@/components/nearbyDetail/nearbyDetail'

import orderCommit from '@/components/orderCommit/orderCommit'
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
	},{
      path: '/nearby',
      name: 'nearby',
      component: nearby
  	},{
      path: '/nearbyDetail',
      name: 'nearbyDetail',
      component: nearbyDetail
  	},{
      path: '/shopDetails',
      name: 'shopDetails',
      component: shopDetails
  	},{
      path: '/orderCommit',
      name: 'orderCommit',
      component: orderCommit
    }]

})

