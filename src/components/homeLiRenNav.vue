<template>
	<div class="homeLiRenNav">
		<router-link to="/home"><i class="el-icon-arrow-left"></i></router-link>
		<span>口碑-丽人</span>
		<i class="el-icon-search fr"></i>
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
	};
</script>

<style>
	.homeLiRenNav{
		height: 50px;
		line-height: 50px;
		font-size: 18px;
		padding: 0 10px;
		background: #fc6291;
		color: #fff;
	}
	.homeLiRenNav .fr{
		line-height: 50px;
		font-size: 27px;
	}
</style>