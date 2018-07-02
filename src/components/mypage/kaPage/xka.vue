<template>
	<div>
		<div class="ka_box_h">
			<p>
				<a href="myhome" class="iconfont icon-arrow-left-copy"></a><span>卡</span></p>
			<i class="iconfont icon-youhuiquan"></i>
		</div>
		<div class="ka_box_panel"><p class="ka_box_ps">暂时没有卡</p></div>
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
		margin-top: 180px;
	}
</style>