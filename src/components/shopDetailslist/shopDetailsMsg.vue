<template>
	<div>
	<div class="shopDetailsMsg" v-for="i in shopDetails">
		<img :src="i.shopImg" />
		<h2 class="shopDetailsName">{{i.shopName}}</h2>
		<h3 class="shopDetailsHot">人气<span>{{i. shopHot}}</span>
			<el-rate v-model="value" show-text style="display: inline-block;">
			</el-rate>
		</h3>
		<h4>{{i.shopType}} 人均{{i.shopAverageConsumption}}元</h4>
	</div>
	</div>
</template>

<script>
	export default {
		props:['shopDetails'],
		data() {
			return {
				value: 3.5
			};
		},
		methods: {

		}
	}
</script>

<style scoped>
	.shopDetailsMsg {
		width: 100%;
		min-height: 120px;
	}
	
	.shopDetailsMsg img {
		width: 100px;
		height: 100px;
		margin: 10px;
		float: left;
		margin-right: 10px;
	}
	.shopDetailsMsg .shopDetailsName{
		margin-top: 10px;
		font-size: 18px;
		color: #000;
		line-height: 26px;
	}
	.shopDetailsMsg .shopDetailsHot{
		color: #ff3503;
		font-size: 16px;
		line-height: 26px;
	}
	.shopDetailsMsg h4{
		color: #868686;
		font-size: 14px;
		line-height: 26px;
	}
</style>