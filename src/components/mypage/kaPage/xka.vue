<template>
	<div>
		<div class="ka_box_h">
			<p>
				<a href="myhome" class="iconfont icon-arrow-left-copy"></a><span>券</span></p>
			<i class="iconfont icon-youhuiquan"></i>
		</div>
		<div class="ka_box_panel"><span class="ka_box_ps">暂时没有可用的券</span></div>
	</div>
</template>

<script>
</script>

<style scoped>
	@import url("../../../assets/iconfont/iconfont.css");
	.ka_box_h {
		height: 40px;
		line-height: 40px;
		display: flex;
		justify-content: space-between;
		padding: 0 20px;
	}
	
	.ka_box_h p span {
		margin-left: 20px;
	}
	
	.ka_box_panel {
		position: fixed;
		width: 100%;
		height: 100%;
		background-color: #F8F8F8;
		overflow-x: hidden;
		text-align: center;
	}
	
	.ka_box_ps {
		position: absolute;
		top: 50%;
		left: 50%;
		margin-left: -64px;
		margin-top: -10px;
	}
</style>