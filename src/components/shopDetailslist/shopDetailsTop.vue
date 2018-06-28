<template>
	<h2 class="shopDetailsTop">
		<i class="el-icon-arrow-left"></i>
		<span>
			<i class="el-icon-star-off"></i>
			<i class="el-icon-share"></i>
			<i class="el-icon-more"></i>
		</span>
	</h2>
</template>

<script>
	export default {
		data() {
			return {
				activeIndex: '1',
				activeIndex2: '1'
			};
		},
		methods: {
			handleSelect(key, keyPath) {
				console.log(key, keyPath);
			}
		}
	}
</script>

<style scoped>
	.shopDetailsTop{
		width: 100%;
		color: red;
		font-size: 22px;
	}
	.shopDetailsTop span{
		float: right;
	}
</style>