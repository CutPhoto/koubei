import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import liftCircle from '../pages/liftCircle.vue'
import liftDetails from '../pages/liftDetails.vue'

import nearby from '@/components/nearby/nearby'


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
	},{
      path: '/nearby',
      name: 'nearby',
      component: nearby
  	}]

})

