<template>
	<div id="yuyue_fw" v-html="">
		<div class="yuyue_hid">
			<p>内容为空</p>
			<p>还没有相关的订单哦</p>
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
		margin-top: 180px;
	}
	.yuyue_hid span{
		color: #ccc;
	}
</style>