<template>
	<div>
	<div class="shopAddress" v-for="i in shopDetail">

		<i class="el-icon-location-outline"></i>
		<div class="shopAddressDetail">{{i.shopAddress}}</div>
		<ul>
			<li><i class="el-icon-loading"></i><br />打车</li>
			<li><i class="el-icon-phone-outline"></i><br />电话</li>
		</ul>

	</div>
	</div>
</template>

<script>
	export default {
		props:['shopDetail'],
		data() {
			return {

			};
		},
		methods: {

		}
	}
</script>

<style scoped>
	.shopAddress {
		width: 100%;
		height: 70px;
		color: #303030;
		padding: 10px 0;
		border-top: 1px solid #ccc;
		margin: 10px 0;
	}
	
	.shopAddress .el-icon-location-outline {
		display: inline-block;
		width: 50px;
		height: 50px;
		font-size: 32px;
		float: left;
		line-height: 50px;
		text-align: center;
	}
	
	.shopAddress .shopAddressDetail {
		width: 170px;
		height: 50px;
		float: left;
		font-size: 18px;
	}
	
	.shopAddress ul {
		float: right;
		padding-right: 10px;
	}
	
	.shopAddress ul li {
		float: left;
		height: 24px;
		padding-left: 10px;
		font-size: 14px;
		line-height: 14px;
		height: 50px;
		padding-top: 6px;
	}
	
	.shopAddress ul li i {
		font-size: 24px;
	}
	
	.shopAddress ul li:first-child {
		padding-right: 10px;
		border-right: 1px solid #ccc;
	}
</style>