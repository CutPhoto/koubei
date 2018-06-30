import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import liftCircle from '../pages/liftCircle.vue'
import liftDetails from '../pages/liftDetails.vue'
import Home from '@/components/home'
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
    }]
})

