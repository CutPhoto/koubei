<template>
	<div class="chaowan">
		<div class="chaowan_l">
			<div class="chaowan_l_t">
				<p>
					<i class="el-icon-phone" style="color: pink;"></i>
					 <span style="width: 40px; background: white;color: pink;">潮玩惠</span>
					  <span >品质好货推荐</span>
				</p>
			</div>
			<div class="chaowan_l_b">
				<div class="chaowan_l_b1">
					<p>88潮牌造型</p>
					<p>【心机染】...</p>
					<p><span style="color:red">199元</span> <del>888元</del></p>
				</div>
				<div class="chaowan_l_b2">
					<img src="../../assets/chaowan1.jpg" alt="" />
				</div>
			</div>
		</div>
		<div class="chaowan_r">
			<div class="chaowan_r_t">
				<p>
					<i class="el-icon-phone" style="color: lightgreen;"></i>
					 <span style="width: 40px; background: white;color: lightgreen;">潮玩惠</span>
					  <span >品质好货推荐</span>
				</p>
			</div>
			<div class="chaowan_r_b">
				<div class="chaowan_r_b1">
					<p>88潮牌造型</p>
					<p>【心机染】...</p>
					<span style="font-size: 14px;color:red;">199元</span> <del>888元</del>
				</div>
				<div class="chaowan_r_b2">
					<img src="../../assets/chaowan2.jpg" alt="" />
				</div>
			</div>
		</div>
		
	</div>
	

</template>

<script>
</script>

<style>
	.chaowan{
		width:100%;
		height: 120px;
		display: flex;
		flex-direction: row;
	}
	.chaowan_l{
		flex: 1;
		border-top:1px solid #ccc;
		border-right:1px solid #ccc;
		
		padding: 5px;
	}
	.chaowan_r{
		flex: 1;
		padding: 5px;
		border-top: 1px solid #ccc;
	}
	.chaowan_l_t p{
		line-height: 40px;
	}
	.chaowan_l_t p span{
		display: inline-block;
		text-align: center;
		width:100px;
		line-height: 16px; 
		background: #CCCCCC;
		font-size: 12px;
		border-radius: 6px;
	}
	.chaowan_l_b1{
		float: left;
	}
	.chaowan_l_b1 p{
		font-size: 14px;
	}
	.chaowan_l_b2{
		float: left;
		margin-top: 2px;
		margin-left:18px;
	}
	.chaowan_l_b2 img{
		width: 60px;
	}
	.chaowan_r_t p{
		line-height: 40px;
	}
	.chaowan_r_t p span{
		display: inline-block;
		text-align: center;
		width:100px;
		line-height: 16px; 
		background: #CCCCCC;
		font-size: 12px;
		border-radius: 6px;
	}
	.chaowan_r_b1{
		float: left;
	}
	.chaowan_r_b1 p{
		font-size: 14px;
	}
	.chaowan_r_b2{
		float: left;
		margin-top: 2px;
		margin-left:18px;
	}
	.chaowan_r_b2 img{
		width: 60px;
	}
</style>