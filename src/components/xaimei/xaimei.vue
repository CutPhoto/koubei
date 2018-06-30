<template>
	<div class="aimei">
		<div class="aimei_k"></div>
		<div class="aimei_t">
			<i class="el-icon-goods"></i><span>爱美嗨玩</span><span>买多次更省钱</span>
		</div>
		<div class="aimei_b">
			<div class="aimei_b_l">
				<img src="../../assets/aimei1.jpg" alt="" />
				<p>清颜堂专业祛痘</p>
				<p><span>9元</span><del>456元</del></p>
			</div>
			<div class="aimei_b_c">
				<img src="../../assets/aimei2.jpg" alt="" />
				<p>发意达脱发白...</p>
				<p><span>41.90元</span><del>769元</del></p>
			</div>
			<div class="aimei_b_r">
				<img src="../../assets/aimei3.jpg" alt="" />
				<p>藤野造型</p>
				<p><span>98元</span><del>192元</del></p>
			</div>
		</div>
		<div class="aimei_k"></div>
	</div>
</template>

<script>
</script>

<style>
	.aimei{
		height: 175px;
		
	}
	.aimei_k{
		height: 5px;
		background: #CCCCCC;
	}
	.aimei_t{
		height: 40px;
		text-align: center;
		line-height: 40px;
	}
	.aimei_t .el-icon-goods{
		color: red;
	}
	.aimei_t span:nth-child(2){
		color:red;
		font-size: 14px;
	}
	.aimei_t span:nth-child(3){
		padding: 3px;
		width:100px;
		height: 20px;
		font-size: 10px;
		margin-left: 20px;
		background: #CCCCCC;
		border-radius: 20px;
	}
	.aimei_b{
		width: 90%;
		margin: 0 auto;
		height: 120px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	.aimei_b img{
		width: 94%;
	}
	.aimei_b p{
		line-height: 20px;
		font-size: 14px;
		text-align: center;
	}
	.aimei_b span{
		line-height: 20px;
		font-size: 12px;

		color: red;
	}
	.aimei_b del{
		line-height: 20px;
		font-size: 12px;
		color: #ACACAC;
	}
</style>