// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import lifeCircleList from './components/lifeCircleList.vue'
import lifeCircleHeader from './components/lifeCircleHeader.vue'
import lifeCircleListDetails from './components/lifeCircleListDetails.vue'
import messageBoard from './components/messageBoard.vue'
import liftCircle from './pages/liftCircle.vue'

Vue.use(ElementUI)
Vue.config.productionTip = false
let bus = new Vue()
Vue.prototype.bus = bus

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	components: {
		App,
		lifeCircleList,
		lifeCircleHeader,
		lifeCircleListDetails,
		messageBoard,
		liftCircle
	}
})