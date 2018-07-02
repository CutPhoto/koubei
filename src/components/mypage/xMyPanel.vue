<template>
	<div id="panel_box" :style="{
		flex:1,
		overflowX:'hidden'
	}">
		<div id="panel" :style="{
				marginBottom:'74px'
				
			}">
			<div id="person">
				<a class="person_l">
					<i class="person_ll" style="background-image: url('../../../static/img/indexImg.png')"></i>
					<span class="person_lr">organization</span>
				</a>
				<a @click="PersonPage" :data-showpersonpage="hidPersonPage" class="person_r">
					<span>个人主页</span>
					<i class="iconfont icon-jiantou2"></i>
				</a>
			</div>

			<div id="my_banner">
				<img src="../../../static/img/myBanner.jpg" />
			</div>

			<ul id="my_dyk">
				<a href="dingdanhome">
					<i class="my_d iconfont icon-icon- "></i>
					<span>订单</span>
				</a>
				<a href="youhuiquan">
					<i class="my_d iconfont icon-youhuiquan "></i>
					<span>优惠券</span>
				</a>
				<a href="ka">
					<i class="my_d iconfont icon-card "></i>
					<span>卡包</span>
				</a>
			</ul>

			<div id="my_bg">
				<div class="my_bgg"></div>
				<img src="../../../static/img/wuzhe.jpg" />
			</div>

			<section id="my_section">
				<a href="pingjia" class="my_pingjia">
					<i class="my_preI iconfont icon-xinxi"></i>
					<div class="my_pj">
						<span>我的评价</span>
						<p><i class="my_hb iconfont icon-hongbao"></i>立即评价,赢50元现金红包<i class="my_jt iconfont icon-jiantou2"></i></p>
					</div>
				</a>
				<a href="collect" class="my_pingjia">
					<i class="my_preI iconfont icon-shoucang"></i>
					<div class="my_pj">
						<span>我的收藏</span>
						<p><i class="my_jt iconfont icon-jiantou2"></i></p>
					</div>
				</a>
				<a href="quguodedian" class="my_pingjia">
					<i class="my_preI iconfont icon-icon-"></i>
					<div class="my_pj my_pj1">
						<span>去过的店</span>
						<p><i class="my_jt iconfont icon-jiantou2"></i></p>
					</div>
				</a>
				<div class="my_yhbg"></div>
				<a href="yinhangtehui" class="my_pingjia">
					<i class="my_preI iconfont icon-lihe"></i>
					<div class="my_pj my_pjLast">
						<span>银行卡特惠</span>
						<p><i class="my_jt iconfont icon-jiantou2"></i></p>
					</div>
				</a>
				<div class="my_yhbg"></div>
			</section>
		</div>
		<xLoader v-show="isShowLoaderPage" />
		<xPersonPage v-show="isShowPersonPage" />
	</div>
</template>

<script>
	import bus from "../../bus.js";
	import xPersonPage from "./xPersonPage";
	
	import xLoader from "./xLoader";
	export default {
		data() {
			return {
				isShowPersonPage: false,
				isShowLoaderPage:false
			}
		},
		computed: {
			hidPersonPage() {
				const self = this
				bus.$on('to-hidPersonPage', (data) => {
					self.isShowPersonPage = data.isShowPersonPage
					self.isShowLoaderPage = data.isShowLoaderPage
				})
			}
		},
		components: {
			xPersonPage,
			xLoader
		},
		methods: {
			PersonPage() {
				this.isShowLoaderPage = !this.isShowLoaderPage
				setTimeout(()=>{
					this.isShowPersonPage = !this.isShowPersonPage
				},1000)
			}
		}
	}
</script>

<style>
	@import "../../assets/iconfont/iconfont.css";
	a {
		text-decoration: none;
	}
	.js_show{
		top:0;
		left:0;
	}
	#person {
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
	
	#my_dyk a {
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