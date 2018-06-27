<template>
	<div class="czzNavMainPart">
		<img :src="imgSrc.src">
		<p>{{imgSrc.title}}</p>
		<p><span>人气{{imgSrc.hot}}</span><span>{{imgSrc.kind}}</span></p>
		<p :style="{overflow:'hidden'}"><span :style="{float:'left',width:'70%'}">商家备注<i :style="{float:'right'}">购买</i></span><span :style="{float:'right'}">查看全部&gt;</span></p>
		<p>点餐</p>
	</div>
</template>
<script type="text/javascript">
	export default{
		props:['imgSrc'],

	}
</script>
<style type="text/css" scoped>
	img{
		width: 100%;
		height: 100px;
	}
	.czzNavMainPart{
		padding: 8px;
		background-color: #fff;
		margin-bottom: 10px;
	}
	.czzNavMainPart p:nth-of-type(1){
		height: 45px;
		line-height: 45px;
		font-size: 18px;
		font-weight: bolder;
	}
	.czzNavMainPart p:nth-of-type(2) span{
		height: 35px;
		line-height: 45px;
		font-size: 14px;
		padding-right: 26px;
		color:#ccc;
	}
	.czzNavMainPart p:nth-of-type(3) span{
		height: 45px;
		line-height: 45px;
		font-size: 16px;
		background-color: #FFF5F5;
		color:#FF6342;
		padding: 0 10px;

	}
	.czzNavMainPart p:nth-of-type(4){
		margin-top: 10px;
		text-align: center;
		font-size: 16px;
		border-top: 1px dashed #ccc;
		height: 32px;
		line-height: 32px;
	}
	i{
		margin-top: 10px;
		vertical-align: middle;
		background-color: #FD4B56;
		color:#fff;
		height: 25px;
		line-height: 25px;
		border-radius:8px;
		padding: 0 5px;
	}
</style>