<template>
	<div id="help_box">
		<div id="seting_header">
			<router-link to="/myhome">
				<a @click="hidSeting" class="iconfont icon-arrow-left-copy"></a>
			</router-link> 设置
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
						<p :style="{textAlign:'center',color:'#e63c52'}" @click="ShowButtom">退出登录</p>
					</div>
				</a>
			</div>
		</div>
		<div class="show_exitLion" v-show="isShowHidExitLogin">
			<p class="exitLionQ">是否确定退出登录？</p>
			<p class="exitLionXZ">
				<span class="first_s" @click="HidButtom">取消</span>
				<span @click="ExitLogin">退出登录</span>
			</p>
		</div>
		<div class="exitLion_box" v-show="isShowHidExitLogin"></div>
	</div>
</template>

<script>
	import bus from "../../bus.js";
	export default {
		data() {
			return {
				isShowHidExitLogin: false
			}
		},
		methods: {
			hidSeting() {
				bus.$emit("to_myheader_seting", {
					isShowSeting: false
				})
			},
			HidButtom() {
				this.isShowHidExitLogin = !this.isShowHidExitLogin
			},
			ShowButtom() {
				this.isShowHidExitLogin = !this.isShowHidExitLogin
			},
			ExitLogin() {
				location = 'login'
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
	
	#seting_header a {
		margin-right: 10px;
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
	
	.exitLion_box {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: #000;
		opacity: 0.2;
	}
	
	.show_exitLion {
		width: 300px;
		position: fixed;
		top: 50%;
		left: 50%;
		background-color: #fff;
		z-index: 1000;
		overflow: hidden;
		margin-left: -150px;
		margin-top: -35px;
		border-radius: 3px;
	}
	
	.show_exitLion .exitLionQ {
		height: 40px;
		line-height: 40px;
		border-bottom: 1px solid #ccc;
		padding: 0 10px;
	}
	
	.show_exitLion .exitLionXZ {
		height: 30px;
		display: flex;
	}
	
	.show_exitLion .exitLionXZ span {
		width: 150px;
		height: 30px;
		line-height: 30px;
		text-align: center;
	}
	
	.first_s {
		border-right: 1px solid #ccc;
	}
</style>