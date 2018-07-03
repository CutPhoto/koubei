<template>
	<div class="chao">
		<div class="chao1">
			<h3>
				<i class="el-icon-share"></i><span>大牌甄选</span>
			</h3>
		</div>
		<div class="zhenxuan">
			<a href="shopDetails" class="zhenxuan_l">
				<div class="zhenxuan_l_t">
					<p>
						<span style="width: 40px; background: white;color: pink;">肯德基</span><br />
						<span>421m</span>
					</p>
				</div>
				<div class="zhenxuan_l_b">
					<div class="zhenxuan_l_b1">
						<p>Y78-1份</p>
						<p>WOW双堡...</p>
						<p><span style="color:red">69元</span> <del>94元</del></p>
					</div>
					<div class="zhenxuan_l_b2">
						<img src="../../assets/zhenxuan1.jpg" alt="" />
					</div>
				</div>
			</a>
			<a href="shopDetails" class="zhenxuan_r">
				<div class="zhenxuan_r_t">
					<p class="zhen1">
						<span style="width: 40px; background: white;color: lightgreen;">必胜客</span><br />
						<span>1.9km</span>
					</p>
				</div>
				<div class="zhenxuan_r_b">
					<div class="zhenxuan_r_b1">
						<p>西西里风情肉</p>
						<p>酱满溢千层面</p>
						<span style="font-size: 14px;color:red;">36元</span> <del>46元</del>
					</div>
					<div class="zhenxuan_r_b2">
						<img src="../../assets/zhenxuan2.jpg" alt="" />
					</div>
				</div>
			</a>
		</div>
		<div class="zhenxuan">
			<a href="shopDetails" class="zhenxuan_l">
				<div class="zhenxuan_l_t">
					<p class="zhen2">
						<span style="width: 40px; background: white;color: pink;">周黑鸭</span><br />
						<span>1.6km</span>
					</p>
				</div>
				<div class="zhenxuan_l_b">
					<div class="zhenxuan_l_b1">
						<p>卤鸭脖【大</p>
						<p>盒】</p>
						<p><span style="color:red">31.89元</span> <del></del></p>
					</div>
					<div class="zhenxuan_l_b2">
						<img src="../../assets/zhenxuan3.jpg" alt="" />
					</div>
				</div>
			</a>
			<a href="shopDetails" class="zhenxuan_r">
				<div class="zhenxuan_r_t">
					<p class="zhen3">
					
						<span style="width: 40px; background: white;color: lightgreen;">真功夫</span><br />
						<span>1.2km</span>
					</p>
				</div>
				<div class="zhenxuan_r_b">
					<div class="zhenxuan_r_b1">
						<p>香菇鸡含汤套</p>
						<p>餐</p>
						<span style="font-size: 14px;color:red;">26元</span> <del>37元</del>
					</div>
					<div class="zhenxuan_r_b2">
						<img src="../../assets/zhenxuan4.jpg" alt="" />
					</div>
				</div>
			</a>
		</div>
		<div class="chao2">
			<span>更多品牌甄选</span>
			<div class="chao3">
				<i class="el-icon-info"></i>
				<i class="el-icon-success"></i>
				<i class="el-icon-warning"></i>
				<i class="el-icon-question"></i>
				<i class="el-icon-arrow-right"></i>
			</div>
		</div>
	</div>

</template>

<script>
	
</script>

<style>
	.chao1{
		line-height: 30px;
		text-align: center;
		font-size: 14px;
		color: sandybrown;
		border-top:4px solid #CCCCCC;
	}
	.chao2{
		line-height: 40px;
		font-size: 14px;
		height: 40px;
		padding: 0 10px;
	}
	.chao3{
		float: right;
	}
	.zhenxuan {
		width: 100%;
		height: 120px;
		display: flex;
		flex-direction: row;
		border-bottom: 1px solid #CCCCCC;
	}
	
	.zhenxuan_l {
		flex: 1;
		border-right: 1px solid #ccc;
		padding: 5px;
	}
	
	.zhenxuan_r {
		flex: 1;
		padding: 5px;
	}
	.zhenxuan_r_b {
		overflow: hidden;
	}
	.zhenxuan_l_b {
		overflow: hidden;
	}
	
	.zhenxuan_l_t p {
		height: 40px;line-height: 16px;
		padding-left:40px;
		background:url('../../assets/bg1.jpg') no-repeat;
		background-size: 34px;
	}
	.zhenxuan_r .zhenxuan_r_t .zhen1{
		background:url('../../assets/bg2.jpg') no-repeat;
		background-size: 34px;
	}
	.zhenxuan_l .zhenxuan_l_t .zhen2{
		background:url('../../assets/bg3.jpg') no-repeat;
		background-size: 34px;
	}
	.zhenxuan_r .zhenxuan_r_t .zhen3{
		background:url('../../assets/bg4.jpg') no-repeat;
		background-size: 34px;
	}
	.zhenxuan_l_t p span {
	
		font-size: 12px;
	}
	
	.zhenxuan_l_b1 {
		float: left;
	}
	
	.zhenxuan_l_b1 p {
		font-size: 14px;
	}
	
	.zhenxuan_l_b2 {
		float: right;
		margin-top: 10px;
		margin-right: 10px;
		width: 30%;
	}
	
	.zhenxuan_l_b2 img {
		width: 100%;
	}
	
	.zhenxuan_r_t p {
		height: 40px;line-height: 16px;
		padding-left:40px;
		background:url('../../assets/bg1.jpg') no-repeat;
		background-size: 34px;
	}
	
	.zhenxuan_r_t p span {
		font-size: 12px;
	}
	
	.zhenxuan_r_b1 {
		float: left;
	}
	
	.zhenxuan_r_b1 p {
		font-size: 14px;
	}
	
	.zhenxuan_r_b2 {
		float: right;
		margin-top: 10px;
		margin-right: 10px;
		
		width: 30%;
	}
	
	.zhenxuan_r_b2 img {
		width: 100%;
	}
</style>