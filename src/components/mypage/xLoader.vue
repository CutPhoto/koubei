<template>
	<div class="page loadmore js_show" :style="{
		width:'100%',
		height:'100%',
		position:'fixed',
		top:0,
		left:0,
		backgroundColor:'#fff',
		zIndex:'1000'
	}">
		<div class="left_arror">
			<i class="iconfont icon-arrow-left-copy"></i>
		</div>
		<div class="page__bd">
			<div class="weui-loadmore">
				<i class="weui-loading"></i>
				<span class="weui-loadmore__tips">加载中</span>
			</div>
		</div>
		<div class="page__ft j_bottom">
			<a href="javascript:home()"><img src=""></a>
		</div>
	</div>
</template>

<script>
</script>

<style>
	.left_arror {
		width: 100%;
		height: 50px;
		line-height: 50px;
		padding:0 20px;
	}
	.weui-loadmore {
		margin-top: 180px;
	}
</style>