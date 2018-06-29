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
				//      console.log(tab, event);
			}
		}
	};
</script>