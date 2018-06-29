<template>
	<div id="zhifu_dd" v-html="">
		<div class="zhifu_hid">
			<p>内容为空</p>
			<span>这可能是个假页面,看看其他吧</span>
		</div>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				html: '这是个html'
			}
		}
	}
</script>

<style>
	#zhifu_dd {
		position: fixed;
		width: 100%;
		height: 100%;
		background-color: #F8F8F8;
		overflow-x: hidden;
		text-align: center;
	}
	.zhifu_hid{
		position: absolute;
		top:50%;
		left:50%;
		margin-left: -106px;
		margin-top: -25px;
	}
	.zhifu_hid span{
		color: #ccc;
	}
</style>