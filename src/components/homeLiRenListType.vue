<template>
	<div class="homeLiRenListType ">
		<ul>
			<li>
				<h2>虚拟试发</h2>
				<span>挑选最适合发型</span><br />
				<img src="../../static/img/xinrenfuli.png" />
			</li>
			<li>
				<h2>多次套餐</h2>
				<span>单次8折封顶</span><br />
				<img src="../../static/img/duocitaocang.png" />
			</li>
			<li>
				<h2>新人福利</h2>
				<span>首单优惠5元起</span><br />
				<img src="../../static/img/xinrenfuli.png" />
			</li>
		</ul>
	</div>
</template>

<script>
</script>

<style scoped>
	.homeLiRenListType{
		overflow: hidden;
		margin-top: 10px;
	}
	.homeLiRenListType ul li {
		padding-top: 10px;
		float: left;
		width: 30%;
		margin-right: 3%;
		font-size: 12px;
	}
	.homeLiRenListType ul li h2{
		font-size: 14px;
		font-weight: normal;
		text-align: center;
	}
	.homeLiRenListType ul li span{
		margin-top: 6px;
		display: block;
		text-align: center;
		border: 1px solid #ccc;
		font-size: 12px;
	}
	.homeLiRenListType ul li img{
		width: 100%;
	}
	.homeLiRenListType ul li:last-child{
		margin-right: 0;
	}
	.homeLiRenListType ul li:first-child{
		margin-left: 6px;
	}
</style>