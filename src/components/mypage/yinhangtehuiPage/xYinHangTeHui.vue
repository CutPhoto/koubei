<template>
	<div>
		<div class="yinhang_box_h">
			<p>
				<a href="myhome" class="iconfont icon-arrow-left-copy"></a><span>银行卡特惠活动</span></p>
			<i></i>
		</div>
		<div class="yinhang_box_panel" v-hmtl="">
			<div class="yinhang_panel_c">
				<div></div>
				<p></p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				isShowData: ''
			}
		}
	}
</script>

<style scoped>
	@import url("../../../assets/iconfont/iconfont.css");
	.yinhang_box_h {
		height: 40px;
		line-height: 40px;
		display: flex;
		justify-content: space-between;
		padding: 0 20px;
	}
	
	.yinhang_box_h p span {
		margin-left: 20px;
	}
	
	.yinhang_box_panel {
		position: fixed;
		width: 100%;
		height: 100%;
		background-color: #F8F8F8;
		overflow-x: hidden;
		text-align: center;
	}
	.yinhang_panel_c{
		padding: 0 20px;
	}
</style>