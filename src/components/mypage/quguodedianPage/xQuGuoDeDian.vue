<template>
	<div>
		<div class="youhui_box_h">
			<p>
				<a href="myhome" class="iconfont icon-arrow-left-copy"></a><span>去过的店</span></p>
			<i></i>
		</div>
		<div class="youhui_box_panel" v-hmtl="">
			<p class="youhui_box_ps">{{isShowData}}</p>
			<p class="youhui_box_ps1">探索的附近好吃好玩的吧</p>
			<p class="youhui_box_ps2">去逛逛></p>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				isShowData: '还没去过任何的店铺哦'
			}
		}
	}
</script>

<style scoped>
	@import url("../../../assets/iconfont/iconfont.css");
	.youhui_box_h {
		height: 40px;
		line-height: 40px;
		display: flex;
		justify-content: space-between;
		padding: 0 20px;
	}
	
	.youhui_box_h p span {
		margin-left: 20px;
	}
	
	.youhui_box_panel {
		position: fixed;
		width: 100%;
		height: 100%;
		background-color: #F8F8F8;
		overflow-x: hidden;
		text-align: center;
	}
	
	.youhui_box_ps {
		padding: 0 20px;
		margin-top: 300px;
		color: #999;
		font-size: 13px;
	}
	.youhui_box_ps1{
		color: #999;
		margin-top: 5px;
		font-size: 13px;
	}
	.youhui_box_ps2{
		width: 100px;
		position: absolute;
		top: 360px;
		left: 50%;
		margin-left: -50px;
		border:1px solid orangered;
		color: orangered;
		border-radius: 20px;
	}
</style>