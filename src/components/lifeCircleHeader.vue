<template>
	<div>
		<el-tabs v-model="activeName" @tab-click="handleClick">
			<el-tab-pane label="关注" name="first">
				<slot name="focus"></slot>
			</el-tab-pane>
			<el-tab-pane label="推荐" name="second">
				<slot name="recommend"></slot>
			</el-tab-pane>
		</el-tabs>
	</div>
</template>
<script>
	export default {
		name: 'lifeCircleHeader',
		data() {
			return {
				activeName: 'second'
			};
		},
		methods: {
			handleClick(tab, event) {

				
			}
		}
	};
</script>
<style scoped>
	.el-tabs__header{
		margin: 0;
	}
	#tab-first{
		margin-left: 110px;
		padding-right: 0;
	}
	#tab-first,#tab-second{
		font-size: 16px;
		color: #fff;
	}
	.el-tabs__nav-wrap::after{
		display: none;
	}
	.el-tabs__active-bar{
		display: none;
	}
	.el-tabs__nav-scroll{
		background: #ff6402;
	}
</style>
