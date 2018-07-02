<template>
	<div id="my_header">
		<header>
			<div></div>
			<div class="header_right">
				<i :data-message="hidMessageCenter" @click="toggleMessageCenter" class="header_right_xin iconfont icon-xinfeng"></i>
				<i :data-hidHelpFeedback="hidHelpFeedback" @click="toggleGallery" class="header_right_dian iconfont icon-diandiandian"></i>
			</div>
		</header>

		<div @click="toggleGallery" id="my_zzc" v-show="isShowGallery"></div>
		<div class="my_gallery_txt" v-show="isShowGallery">
				<i class="my_sanjiao"></i>
				<a @click="toggleHelpFeedback" class="my_h"><i class="my_hs iconfont icon-bangzhuyufankui"></i>帮助与反馈</a>
				<a @click="toggleSeting"><i class="my_hs iconfont icon-shezhi"></i>设置</a>
			</div>
		<xMessageCenter v-show="isShowMessage" />
		<xHelpFeedback v-show="isShowHelpFeedback" />
		<xSeting :data-hidseting="hidSeting" v-show="isShowSeting" />
	</div>

</template>

<script>
	import bus from "../../bus.js";
	import xMessageCenter from './xMessageCenter';
	import xHelpFeedback from './xHelpFeedback';
	import xSeting from './xSeting';
	export default {
		data() {
			return {
				isShowGallery: false,
				isShowMessage: false,
				isShowHelpFeedback: false,
				isShowSeting: false
			}
		},
		computed: {
			hidMessageCenter() {
				const self = this
				bus.$on("to_myheader_message", (data) => {
					self.isShowMessage = data.isShowMessage
				})
			},
			hidHelpFeedback() {
				const self = this
				bus.$on("to_myheader", (data) => {
					self.isShowHelpFeedback = data.isShowHelpFeedback
				})
			},
			hidSeting() {
				const self = this
				bus.$on("to_myheader_seting", (data) => {
					self.isShowSeting = data.isShowSeting
				})
			}
		},
		components: {
			xHelpFeedback,
			xSeting,
			xMessageCenter
		},
		methods: {
			toggleGallery() {
				this.isShowGallery = !this.isShowGallery
			},
			toggleHelpFeedback() {
				this.isShowHelpFeedback = !this.isShowHelpFeedback;
				this.isShowGallery = !this.isShowGallery;
			},
			toggleSeting() {
				this.isShowSeting = !this.isShowSeting;
				this.isShowGallery = !this.isShowGallery;
			},
			toggleMessageCenter() {
				this.isShowMessage = !this.isShowMessage;
			}
		}
	}
</script>

<style scoped>
	@import "../../assets/iconfont/iconfont.css";
	header {
		display: flex;
		justify-content: space-between;
		width: 100%;
		height: 60px;
		line-height: 60px;
		text-align: center;
		background-color: #FF6300;
		position: fixed;
		top: 0;
		left: 0;
	}
	
	.header_right {
		margin-right: 20px;
		color: #fff;
	}
	
	.header_right_xin {
		margin-right: 20px;
		font-size: 25px;
	}
	
	.header_right_dian {
		font-size: 25px;
	}
	
	#my_header {
		position: relative;
	}
	
	.my_gallery_txt {
		position: fixed;
		top: 60px;
		right: 20px;
		background-color: #fff;
		width: 100px;
		height: 50px;
		color: #000;
		z-index: 10000;
		font-size: 12px;
		padding: 5px 5px;
		border-radius: 5%;
	}
	
	.my_gallery_txt .my_sanjiao {
		border-top: 5px solid transparent;
		border-bottom: 5px solid #fff;
		border-left: 5px solid transparent;
		border-right: 5px solid transparent;
		position: absolute;
		top: -10px;
		right: 10px;
	}
	
	.my_gallery_txt a {
		display: block;
		height: 20px;
		line-height: 20px;
		text-align: left;
	}
	
	.my_gallery_txt .my_hs {
		margin-right: 10px;
	}
	
	.my_gallery_txt .my_h {
		border-bottom: 1px solid #ccc;
	}
	
	#my_zzc {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: #000;
		z-index: 600;
		opacity: 0.1;
	}
</style>