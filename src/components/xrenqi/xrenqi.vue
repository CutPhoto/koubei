<template>
	<div class="renqi">
		<div class="renqi_t">
			<i class="el-icon-view"></i><span>人气眼</span><span>美食佳肴</span>
		</div>
		<div class="renqi_b">
			<router-link to="/shopDetails" class="renqi_b_l">
				<img src="../../assets/renqi1.jpg" alt="" />
				<p>麦当劳（天源路..</p>
				<p><span>人气88</span><del>456元</del></p>
			</router-link>
			<router-link to="/shopDetails" class="renqi_b_c">
				<img src="../../assets/renqi2.jpg" alt="" />
				<p>星巴克（天河新..</p>
				<p><span>人气95</span><del>769元</del></p>
			</router-link>
			<router-link to="/shopDetails" class="renqi_b_r">
				<img src="../../assets/renqi3.jpg" alt="" />
				<p>百果园（合一潮...</p>
				<p><span>人气89</span><del>192元</del></p>
			</router-link>
		</div>
		
	</div>
</template>

<script>
</script>

<style>
	.renqi{
		height: 170px;
		
	}
	.renqi_t{
		height: 40px;
		text-align: center;
		line-height: 40px;
	}
	.renqi_t .el-icon-view{
		color: red;
	}
	.renqi_t span:nth-child(2){
		color:red;
		font-size: 14px;
	}
	.renqi_t span:nth-child(3){
		padding: 3px;
		width:60px;
		height: 20px;
		font-size: 10px;
		margin-left: 20px;
		background: #CCCCCC;
		border-radius: 20px;
	}
	.renqi_b{
		width: 90%;
		margin: 0 auto;
		height: 120px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	.renqi_b img{
		width: 94%;
	}
	.renqi_b p{
		line-height: 20px;
		font-size: 14px;
		text-align: center;
	}
	.renqi_b span{
		line-height: 20px;
		font-size: 12px;

		color: red;
	}
	.renqi_b del{
		line-height: 20px;
		font-size: 12px;
		color: #ACACAC;
	}
</style>