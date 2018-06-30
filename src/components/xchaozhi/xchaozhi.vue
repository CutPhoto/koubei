<template>
	<div class="chaozhi">
		<div class="chaozhi_t">
			<i></i><span>超值抢购</span><i></i>
		</div>
		<div class="chaozhi_c">
			<img src="../../assets/chaozhi1.jpg" alt="" />
		</div>
		<div class="chaozhi_b">
			<div class="chaozhi_b_t">
				<img src="../../assets/chaozhi2.jpg" alt="" />
				<p>三个辣椒牛肉粉</p>
				<p><span>10元</span><del>21元</del></p>
			</div>
			<div class="chaozhi_b_c">
				<img src="../../assets/chaozhi3.jpg" alt="" />
				<p>藤野造型</p>
				<p><span>29.90元</span><del>139元</del></p>
			</div>
			<div class="chaozhi_b_b">
				<img src="../../assets/chaozhi4.jpg" alt="" />
				<p>三个辣椒牛肉粉</p>
				<p><span>18元</span><del>36元</del></p>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style>
	.chaozhi{
		width:90%;
		height: 218px;
		margin: 10px auto;
	}
	.chaozhi_t{
		height: 36px;
		line-height: 36px;
		text-align: center;
	}
	.chaozhi_c{
		height: 50px;
	}
	.chaozhi_c img{
		height: 50px;
		width: 100%;
	}
	.chaozhi_b{
		width: 100%;
		height: 140px;
		display: flex;
		flex-direction: row;
		margin-top: 2px;
	
	}
	.chaozhi_b img{
		width: 98%;
		height: 77px;
	}
	.chaozhi_b p{
		font-size: 14px;
		color: #262626;
		text-align: center;
		line-height: 20px;
	}
	.chaozhi_b span{
		font-size: 16px;
		color:red;
	}
	.chaozhi_b del{
		font-size: 12px;
		color: #ACACAC;
	}
	.chaozhi_b .chaozhi_b_t{
		flex: 1;
	}
	.chaozhi_b .chaozhi_b_c{
		flex: 1;
		
	}
	.chaozhi_b .chaozhi_b_b{
		flex: 1;
	}
</style>