<template>
	<div class="homeLiRenDaySale">
		<div class="fl">
			<h2>天天特价</h2>
			<h3>麻吉造型 星级设计师烫/染2选1套餐！</h3>
			<span>145</span><del>688</del>
		</div>

		<img src="../../static/img/tiantiantejia.png" class="fr" />
	</div>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		methods: {

		}
	}
</script>

<style>
	.homeLiRenDaySale {
		padding: 10px;
		width: 100%;
		font-size: 12px;
		background: #fdf7f4;
		overflow: hidden;
	}
	.homeLiRenDaySale h2{
		color: #fa6363;
		font-size: 28px;
	}
	.homeLiRenDaySale h3 {
		width: 178px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		color: #3b3839;
		font-size: 13px;
	}
	.homeLiRenDaySale span{
		color: #ff2949;
		font-size: 26px;
	}
	.homeLiRenDaySale span::after{
		content: '元';
		font-size: 12px;
	}
	.homeLiRenDaySale del{
		color: #d5d2d3;
		margin-left: 10px;
	}
	.homeLiRenDaySale del::after{
		content: '元';
	}
	
	.homeLiRenDaySale img {
		width: 120px;
		height: 90px;
	}
</style>