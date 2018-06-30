<template>
	<div id="yuyue_fw" v-html="">
		<div class="yuyue_hid">
			<p>内容为空</p>
			<span>还没有相关的订单哦</span>
		</div>
	</div>
</template>

<script>
</script>

<style scoped>
	#yuyue_fw {
		position: fixed;
		width: 100%;
		height: 100%;
		background-color: #F8F8F8;
		overflow-x: hidden;
		text-align: center;
	}
	.yuyue_hid{
		position: absolute;
		top:50%;
		left:50%;
		margin-left: -72px;
		margin-top: -25px;
	}
	.yuyue_hid span{
		color: #ccc;
	}
</style>