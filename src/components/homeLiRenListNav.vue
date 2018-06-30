<template>
	<div class="homeLiRenListNav">
		<ul>
			<li><i></i><span>美发</span></li>
			<li><i></i><span>美甲</span></li>
			<li><i></i><span>美容spa</span></li>
			<li><i></i><span>祛痘</span></li>
			<li><i></i><span>彩妆造型</span></li>
			<li><i></i><span>产后朔形</span></li>
			<li><i></i><span>美睫</span></li>
			<li><i></i><span>全部</span></li>
		</ul>
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

<style scoped>
	.homeLiRenListNav{
		padding: 15px;
		color: #2d2d2d;
		overflow: hidden;
	}
	.homeLiRenListNav ul li{
		float: left;
		font-size: 14px;
		margin-right: 15px;
		text-align: center;
		margin-bottom: 10px;
	}
	.homeLiRenListNav ul li:nth-child(4n){
		margin-right: 0;
	}
	.homeLiRenListNav ul li i{
		display: block;
		width: 60px;
		height: 60px;
		border-radius: 50%;
		background: url(../../static/img/fenleitouxiang.png) no-repeat;
		background-position: center;
		background-size: 80%;
		box-shadow:1px 1px 1px #ccc,-1px -1px 1px #ccc,1px -1px 1px #ccc,-1px 1px 1px #ccc;
		margin: 8px 0;
	}
</style>