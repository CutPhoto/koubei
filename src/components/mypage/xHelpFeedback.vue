<template>
	<div id="help_box">
		<div id="help_header">
			<a @click="hidHelpFeedback" class="iconfont icon-arrow-left-copy"></a> 帮助与反馈
		</div>
		<div :style="{
				height:'10px',
				backgroundColor:'#F8F8F8'
			}"></div>
		<div class="page__category js_categoryInner" data-height="225" style="">
			<div class="weui-cells page__category-content">
				<a class="weui-cell weui-cell_access js_item" data-id="actionsheet" href="javascript:;">
					<div class="weui-cell__bd">
						<p>口碑在线帮助</p>
					</div>
					<div class="weui-cell__ft"></div>
				</a>
				<a class="weui-cell weui-cell_access js_item" data-id="dialog" href="javascript:;">
					<div class="weui-cell__bd">
						<p :style="{
						display:'flex',
						justifyContent: 'space-between'
					}"><span>口碑客服热线</span><span style="color:#ccc;font-size:12px">400-826-7710</span></p>
					</div>
					<div class="weui-cell__ft"></div>
				</a>
				<div :style="{
					height:'10px',
					backgroundColor:'#F8F8F8'
				}"></div>
				<a class="weui-cell weui-cell_access js_item" data-id="msg" href="javascript:;">
					<div class="weui-cell__bd">
						<p>口碑学院</p>
					</div>
					<div class="weui-cell__ft"></div>
				</a>
				<a class="weui-cell weui-cell_access js_item" data-id="picker" href="javascript:;">
					<div class="weui-cell__bd">
						<p>我是商家，我要入驻</p>
					</div>
					<div class="weui-cell__ft"></div>
				</a>
				<a class="weui-cell weui-cell_access js_item" data-id="toast" href="javascript:;">
					<div class="weui-cell__bd">
						<p>口碑用协议</p>
					</div>
					<div class="weui-cell__ft"></div>
				</a>
				<a class="weui-cell weui-cell_access js_item" data-id="toast" href="javascript:;">
					<div class="weui-cell__bd">
						<p>知识产权声明</p>
					</div>
					<div class="weui-cell__ft"></div>
				</a>
				<a class="weui-cell weui-cell_access js_item weui-cellss" data-id="toast" href="javascript:;">
					<div class="weui-cell__bd">
						<p>产品意见反馈</p>
					</div>
					<div class="weui-cell__ft"></div>
				</a>
			</div>
		</div>
		<div id="help_provide">口碑服务由张老板集团口口相传网络技术有限公司提供</div>
	</div>

</template>

<script>
	import bus from "../../bus.js";
	export default {
		methods:{
			hidHelpFeedback(){
				bus.$emit("to_myheader",{
					isShowHelpFeedback:false
				})
			}
		}
	}
	
</script>

<style scoped>
	@import "../../assets/iconfont/iconfont.css";
	#help_box{
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: #fff;
		z-index: 1000;
	}
	#help_header {
		height: 40px;
		line-height: 40px;
		padding-left: 15px;
		font-size: 14px;
		font-weight: bold;
	}
	
	#help_header a {
		margin-right: 10px;
	}
	
	.weui-cell:before {
		border-top: 1px solid transparent;
	}
	
	.weui-cellss {
		border-top: 1px solid #e5e5e5;
	}
	
	.page__category a {
		font-size: 14px;
	}
	
	.weui-cells {
		margin-top: 0;
	}
	
	#help_provide {
		font-size: 10px;
		text-align: center;
		margin-top: 10px;
		color: #CCC;
	}
</style>