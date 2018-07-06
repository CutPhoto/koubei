<template>
	<div id="panel_box" :style="{
		flex:1,
		overflowX:'hidden',
		backgroundColor:'#fff'
	}">
		<div id="panel" :style="{
				marginBottom:'74px'
			}">
			<div id="person" :data-imgsrc="Toimgsrc">
				<a class="person_l">
					<i :data-userMessage="userMessage" class="person_ll" :style="{backgroundImage: `url(${imgsrc})`}"></i>
					<span class="person_lr" v-text="username">organization</span>
				</a>
				<a @click="Loader" :data-showpersonpage="hidPersonPage" class="person_r">
					<span>个人主页</span>
					<i class="iconfont icon-jiantou2"></i>
				</a>
			</div>

			<div id="my_banner" @click="KouBeiKaPage">
				<img src="../../../static/img/myBanner.jpg" />
			</div>

			<ul id="my_dyk">
				<li>
					<i class="my_d iconfont icon-icon- "></i>
					<router-link to="/dingdanhome"><span>订单</span></router-link>
				</li>
				<li>
					<i class="my_d iconfont icon-youhuiquan "></i>
					<router-link to="/youhuiquan"><span>优惠券</span></router-link>
				</li>
				<li>
					<i class="my_d iconfont icon-card "></i>
					<router-link to="/ka"><span>卡包</span></router-link>
				</li>
			</ul>

			<div id="my_bg">
				<div class="my_bgg"></div>
				<img src="../../../static/img/wuzhe.jpg" />
			</div>

			<section id="my_section">
				<router-link to="/pingjia">
					<a class="my_pingjia">
						<i class="my_preI iconfont icon-xinxi"></i>
						<div class="my_pj">
							<span>我的评价</span>
							<p><i class="my_hb iconfont icon-hongbao"></i>立即评价,赢50元现金红包<i class="my_jt iconfont icon-jiantou2"></i></p>
						</div>
					</a>
				</router-link>
				<router-link to="/collect">
					<a class="my_pingjia">
						<i class="my_preI iconfont icon-shoucang"></i>
						<div class="my_pj">
							<span>我的收藏</span>
							<p><i class="my_jt iconfont icon-jiantou2"></i></p>
						</div>
					</a>
				</router-link>
				<router-link to="/quguodedian">
					<a class="my_pingjia">
						<i class="my_preI iconfont icon-icon-"></i>
						<div class="my_pj my_pj1">
							<span>去过的店</span>
							<p><i class="my_jt iconfont icon-jiantou2"></i></p>
						</div>
					</a>
				</router-link>
				<div class="my_yhbg"></div>
				<router-link to="/yinhangtehui">
					<a class="my_pingjia">
						<i class="my_preI iconfont icon-lihe"></i>
						<div class="my_pj my_pjLast">
							<span>银行卡特惠</span>
							<p><i class="my_jt iconfont icon-jiantou2"></i></p>
						</div>
					</a>
				</router-link>
				<div class="my_yhbg"></div>
			</section>
		</div>
		<xLoader v-show="isShowLoaderPage" />
		<xPersonPage v-show="isShowPersonPage" />
		<xKouBeiKa v-show="isShowKouBeiKaPage" />
	</div>
</template>

<script>
	import bus from "../../bus.js";
	import xPersonPage from "./xPersonPage";
	import xLoader from "./xLoader";
	import xKouBeiKa from "./KouBeiKa/xKouBeiKa";
	export default {
		data() {
			return {
				isShowPersonPage: false,
				isShowLoaderPage: false,
				isShowKouBeiKaPage: false,
				username: '',
				imgsrc: ''
			}
		},
		computed: {
			hidPersonPage() {
				const self = this
				bus.$on('to-hidPersonPage', (data) => {
					self.isShowPersonPage = data.isShowPersonPage
					self.isShowLoaderPage = data.isShowLoaderPage
				})
			},
			Toimgsrc() {
				const self = this
				bus.$emit("to-imgsrc", {
					imgsrc: self.imgsrc,
					username: self.username
				})
			},
			userMessage() {
				var stor=JSON.parse(localStorage.getItem('getUserMessage'))
				stor.map((item) => {
					this.username = item.username
					this.imgsrc = item.imgsrc
				})

			}
		},
		components: {
			xPersonPage,
			xLoader,
			xKouBeiKa
		},
		methods: {
			Loader() {
				this.isShowLoaderPage = !this.isShowLoaderPage
				setTimeout(() => {
					this.isShowPersonPage = !this.isShowPersonPage
				}, 200)
			},
			KouBeiKaPage() {
				var self = this;
				self.isShowKouBeiKaPage = !self.isShowKouBeiKaPage
				bus.$on("To-KouBieKaPage", (data) => {
					self.isShowKouBeiKaPage = data.isShowKouBeiKaPage
				})
			}
		}
	}
</script>

<style>
	@import "../../assets/iconfont/iconfont.css";
	a {
		text-decoration: none;
	}
	
	.js_show {
		top: 0;
		left: 0;
	}
	
	#person {
		height: 51px;
		display: flex;
		justify-content: space-between;
		padding: 10px 20px;
	}
	
	.person_ll {
		display: block;
		float: left;
		width: 30px;
		height: 30px;
		background-size: cover;
		background-position: center;
		border-radius: 50%;
	}
	
	.person_lr {
		float: left;
		line-height: 30px;
		margin-left: 10px;
	}
	
	.person_r {
		line-height: 30px;
		font-size: 13px;
	}
	
	#my_banner {
		padding: 0 20px;
		background-color: #FDFDFD;
	}
	
	#my_banner img {
		width: 100%;
		height: 80px;
	}
	
	#my_dyk {
		display: flex;
		justify-content: space-around;
		padding: 10px 0;
	}
	
	#my_dyk li {
		width: 33.33%;
		display: flex;
		flex-direction: column;
		text-align: center;
		border-right: 1px solid #ECECEC;
		font-size: 12px;
	}
	
	#my_dyk .my_d {
		font-size: 20px;
		color: #FF6500;
	}
	
	#my_dyk li:nth-child(3) {
		border-right: 1px solid transparent;
	}
	
	#my_bg .my_bgg {
		height: 10px;
		background-color: #EDEDED;
	}
	
	#my_bg img {
		width: 100%;
		height: 60px;
	}
	
	#my_section .my_pingjia {
		position: relative;
	}
	
	#my_section .my_preI {
		position: absolute;
		top: 7px;
		left: 20px;
	}
	
	#my_section .my_pj {
		margin-left: 50px;
		overflow: hidden;
		font-size: 13px;
		border-bottom: 1px solid #ccc;
		padding: 10px 0;
	}
	
	#my_section .my_pj1 {
		border-bottom: 1px solid transparent;
	}
	
	#my_section .my_pj span {
		float: left;
	}
	
	#my_section .my_pj p {
		float: right;
		margin-right: 20px;
		position: relative;
		color: #A4A4A4;
	}
	
	#my_section .my_pj p .my_hb {
		color: orangered;
		margin-right: 5px;
		margin-top: 5px;
	}
	
	#my_section .my_yhbg {
		height: 10px;
		background-color: #ECECEC;
	}
	
	#my_section .my_pjLast {
		border-bottom: 1px solid transparent;
		border-top: 1px solid #ccc;
	}
</style>