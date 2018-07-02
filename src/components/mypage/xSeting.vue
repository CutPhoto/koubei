<template>
	<div id="help_box">
		<div id="seting_header">
			<a @click="hidSeting" class="iconfont icon-arrow-left-copy"></a> 设置
		</div>
		<div class="page__category js_categoryInner" data-height="225" style="">
			<div class="weui-cells page__category-content">
				<a class="weui-cell weui-cell_access js_item" data-id="actionsheet" href="javascript:;">
					<div class="weui-cell__bd">
						<p>消息提示设置</p>
					</div>
					<div class="weui-cell__ft"></div>
				</a>
				<a class="weui-cell weui-cell_access js_item" data-id="actionsheet" href="javascript:;">
					<div class="weui-cell__bd">
						<p :style="{
							display:'flex',
							flexDirection:'column'
						}"><span>指纹/面容支付</span><span :style="{color:'#ccc'}">开启生物支付，安全又快捷</span></p>
					</div>
					<div class="weui-cell__ft"></div>
				</a>
				<a class="weui-cell weui-cell_access js_item" data-id="actionsheet" href="javascript:;">
					<div class="weui-cell__bd">
						<p>权限设置</p>
					</div>
					<div class="weui-cell__ft"></div>
				</a>
				<a class="weui-cell weui-cell_access js_item" data-id="actionsheet" href="javascript:;">
					<div class="weui-cell__bd">
						<p>清理缓存</p>
					</div>
					<div class="weui-cell__ft"></div>
				</a>
				<a class="weui-cell weui-cell_access js_item" data-id="actionsheet" href="javascript:;">
					<div class="weui-cell__bd">
						<p :style="{
							display:'flex',
							justifyContent:'space-between'
						}"><span>关于</span><span style="color:#ccc">6.1.26</span></p>
					</div>
					<div class="weui-cell__ft"></div>
				</a>
				<a class="weui-cell weui-cell_access js_item" data-id="actionsheet" href="javascript:;">
					<div class="weui-cell__bd">
						<p :style="{textAlign:'center',color:'#e63c52'}">退出登录</p>
					</div>
				</a>
			</div>
		</div>
	</div>
</template>

<script>
	import bus from "../../bus.js";
	export default {
		methods: {
			hidSeting() {
				bus.$emit("to_myheader_seting", {
					isShowSeting: false
				})
			}
		}
	}
</script>

<style scoped>
	@import "../../assets/iconfont/iconfont.css";
	#help_box {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: #F8F8F8;
		z-index: 1000;
	}
	
	#seting_header {
		height: 40px;
		line-height: 40px;
		padding-left: 15px;
		font-size: 14px;
		font-weight: bold;
		background-color: #fff;
	}
	
	.weui-cell:before {
		border-top: 1px solid transparent;
	}
	
	.page__category-content {
		background-color: transparent;
	}
	
	.page__category-content a {
		margin-bottom: 15px;
		background-color: #fff;
	}
	
	.weui-cells:before {
		border-top: 1px solid transparent;
	}
	
	.weui-cells:after {
		border-bottom: 1px solid transparent;
	}
	
	.page__category a {
		font-size: 14px;
	}
</style>