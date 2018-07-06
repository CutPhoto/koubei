<template>
	<div :style="{position:'fixed',bottom:'0'}">
		<span><i></i @click="collect">收藏</span><span><a :href="`/orderCommit?${btnsendsrc}`">立即购买</a>	</span>
	</div>
</template>
<script type="text/javascript">
	export default{
		props:['btnsendsrc'],
		data(){
			return{
				
			}
		}
	}
</script>
<style type="text/css" scoped>
	div{
		width: 100%;
		height: 60px;
	}
	span{
		color:white;
		font-size: 16px;
		line-height: 60px;
		text-align: center;
		display: inline-block;
	}
	div span:nth-of-type(1){
		width: 35%;
		background-color: #353A41;
	}
	div span:nth-of-type(2){
		width: 65%;
		background-color: #FF5900;
	}
	a{
		color:white;
		font-size: 16px;
		line-height: 60px;
		text-align: center;
	}
</style>