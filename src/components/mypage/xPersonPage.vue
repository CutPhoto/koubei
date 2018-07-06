<template>
	<div :style="{
			position:'fixed',
			top:0,
			bottom:0,
			left:0,
			right:0,
			zIndex:'1000'
		}">
		<div id="person_header">
			<div id="person_header_top">
				<a @click="PersonPage"><i class="iconfont icon-arrow-left-copy"></i></a>
				<div class="person_header_top_r"><span class="person_header_top_s iconfont icon-life-circle"></span><span class="iconfont icon-shezhi"></span></div>
			</div>
			<div id="person_header_bottom">
				<div class="person_header_bottom_l" :data-imgsrc="ToimgsrcUserName">
					<img :src="imgsrc" alt="" />
				</div>
				<div class="person_header_bottom_r">
					<span v-text="username">organization</span>
					<p><span class="person_hbr1">关注<i>0</i></span><span class="person_hbr2">粉丝<i>0</i></span></p>
				</div>
			</div>
		</div>
		<div id="person_status">
			<p class="person_status">暂无动态</p>
		</div>
		<div v-show="isShowSpan" class="person_opa"></div>
		<span @click="showSpan" id="person_tj" class="person_s"><i class="iconfont icon-life-circle"></i></span>
		<div v-show="isShowSpan" id="person_sanSpan">
			<span @click="showSpan" class="person_s person_s1">X</span>
			<span class="person_s"><i class="iconfont icon-xinxi"></i></span>
			<span class="person_s"><i class="iconfont icon-icon-"></i></span>
		</div>
	</div>
</template>

<script>
	import bus from "../../bus.js";
	export default {
		data() {
			return {
				isShowSpan: false,
				imgsrc: '',
				username: '',
				gzUserName: '',
				gzNum: 0
			}

		},
		computed: {
			ToimgsrcUserName() {
				const self = this
				bus.$on("to-imgsrc", (data) => {
					self.imgsrc = data.imgsrc;
					self.username = data.username;
				})
			}
		},
		methods: {
			PersonPage() {
				bus.$emit("to-hidPersonPage", {
					isShowPersonPage: false,
					isShowLoaderPage: false
				})
			},
			showSpan() {
				this.isShowSpan = !this.isShowSpan
			}
		}

	}
</script>

<style scoped>
	@import url("../../assets/iconfont/iconfont.css");
	#person_header {
		background-color: orangered;
		padding: 0 20px;
	}
	
	#person_header_top {
		display: flex;
		justify-content: space-between;
		height: 50px;
		line-height: 50px;
	}
	
	#person_header_top .person_header_top_s {
		margin-right: 15px;
	}
	
	.person_header_top_r {
		color: #fff;
	}
	
	#person_header_bottom {
		height: 50px;
		padding: 5px 0;
	}
	
	.person_header_bottom_l {
		float: left;
		width: 40px;
		height: 40px;
		overflow: hidden;
		border-radius: 50%;
		margin-right: 10px;
	}
	
	.person_header_bottom_l img {
		width: 40px;
		height: 40px;
	}
	
	.person_header_bottom_r {
		float: left;
		font-size: 13px;
		color: #fff;
	}
	
	.person_header_bottom_r .person_hbr1 {
		border-right: 1px solid #fff;
		padding-right: 10px;
	}
	
	.person_header_bottom_r .person_hbr1 i {
		margin-left: 5px;
	}
	
	.person_header_bottom_r .person_hbr2 {
		padding-left: 10px;
	}
	
	.person_header_bottom_r .person_hbr2 i {
		margin-left: 5px;
	}
	
	#person_status {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 100%;
		background-color: #F8F8F8;
		text-align: center;
		overflow-x: hidden;
	}
	
	#person_tj {
		position: fixed;
		left: 20px;
		bottom: 30px;
	}
	
	#person_sanSpan {
		width: 150px;
		position: fixed;
		left: 20px;
		bottom: 30px;
		display: flex;
		justify-content: space-between;
	}
	
	.person_s {
		width: 35px;
		height: 35px;
		border-radius: 50%;
		background-color: red;
		line-height: 35px;
		font-size: 16px;
		text-align: center;
		color: #fff;
	}
	
	#person_sanSpan .person_s1 {
		background-color: #999;
	}
	
	.person_opa {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: #ccc;
		opacity: 0.1;
	}
	
	.person_status {
		padding: 0 20px;
		margin-top: 150px;
		color: #999;
		font-size: 13px;
	}
</style>