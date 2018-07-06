<template>
	<div>
		<div class="youhui_box_h">
			<p><router-link to="/myhome"><i class="iconfont icon-arrow-left-copy"></i></router-link><span>券</span></p>
			<i class="iconfont icon-youhuiquan"></i>
		</div>
		<div class="youhui_box_panel"><p class="youhui_box_ps">暂时没有可用的券</p></div>
	</div>
</template>

<script>
</script>

<style scoped>
	@import url("../../../assets/iconfont/iconfont.css");
	.youhui_box_h{
		height: 40px;
		line-height: 40px;
		display: flex;
		justify-content: space-between;
		padding:0 20px;
		background-color: #fff;
	}
	.youhui_box_h p span{
		margin-left: 20px;
	}
	.youhui_box_panel{
		position:fixed;
		width:100%;
		height:100%;
		background-color: #F8F8F8;
		overflow-x: hidden;
		text-align: center;
	}
	.youhui_box_ps{
		margin-top: 180px;
	}
</style>