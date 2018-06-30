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
import home from './components/home'
import xtop from './components/xtop/xtop'
import xbanner from './components/xbanner/xbanner'
import xnav from './components/xnav/xnav'
import xtoutiao from './components/xtoutiao/xtoutiao'
import xbanners from './components/xbanners/xbanners'
import xtarbar from './components/xtarbar/xtarbar'
import xchaozhi from './components/xchaozhi/xchaozhi'
import xchaowan from './components/xchaowan/xchaowan'
import xaimei from './components/xaimei/xaimei'
import xrenqi from './components/xrenqi/xrenqi'
import xpanel from './components/xpanel/xpanel'
import Swiper from 'swiper'
import '../node_modules/swiper/dist/css/swiper.min.css'
import weui from 'weui'
import './components/animate.css'
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
		liftCircle,
		home,
	  	xtop,
	  	ElementUI,
	  	xbanner,
	  	xnav,
	  	xtoutiao,
	  	xbanners,
	  	xtarbar,
	  	xchaozhi,
	  	xchaowan,
	  	Swiper,
	  	xaimei,
	  	xrenqi,
	  	xpanel
	}
})
