<template>
	<div id="zhifu_dd" v-html="">
		<div class="zhifu_hid">
			<p>内容为空</p>
			<p>这可能是个假页面,看看其他吧</p>
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
		margin-top: 180px;
	}
	.zhifu_hid span{
		color: #ccc;
	}
</style>