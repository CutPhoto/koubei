<template>
	<div id="message_box">
		<div id="message_header">
			<a @click="toggleMessageCenter" class="iconfont icon-arrow-left-copy"></a> 消息中心
		</div>
		<div id="my_ms"><p class="message_xinxi">暂无消息</p></div>
	</div>
	
</template>

<script>
	import bus from "../../bus.js";
	export default {
		methods: {
			toggleMessageCenter() {
				bus.$emit("to_myheader_message", {
					isShowMessage: false
				})
			}
		}
	}
</script>

<style scoped>
	@import "../../assets/iconfont/iconfont.css";
	#message_box{
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: #F8F8F8;
		z-index: 1000;
	}
	#message_header {
		height: 40px;
		line-height: 40px;
		padding-left: 15px;
		font-size: 14px;
		font-weight: bold;
		background-color: #fff;
	}
	#my_ms{
		width: 100%;
		height:100%;
		text-align: center;
		overflow-x: hidden;
	}
	.message_xinxi {
		padding: 0 20px;
		margin-top: 180px;
		color: #999;
		font-size: 13px;
	}
</style>