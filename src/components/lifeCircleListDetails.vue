<template>
	<div>
		<div class="details" v-for="del in lifeCircleListArr">
			<div class="detailsTop">
				<i class="el-icon-arrow-left goBack"></i>
				<i class="el-icon-news toShare"></i>
				<img :src="del.imgSrc" />
				<div class="detailsImgPages">
					<i>1</i>\/<span>1</span>
				</div>
			</div>
			<div class="author">
				<img :src="del.userImgSrc" />
				<span class="userName">{{del.useName}}</span>
				<time>{{del.time}}</time>
				<el-button round>+关注</el-button>
			</div>
			<h3 class="detailsContent" v-text="del.content"></h3>
			<slot name="messageBoard"></slot>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'lifeCircleListDetails',
		data() {
			return {
				lifeCircleListArr: [{
					imgSrc: '../../static/img/indexImg.png',
					type: '#美食',
					content: '龙虎烩，老鼠份你敢来尝尝吗？切换标签之前的钩子，若返回 false 或者返回 Promise 且被 reject，则阻止切换。',
					userImgSrc: '../../static/img/rentouxiang.png',
					useName: 'zjzhi',
					num: '0',
					time: '2018-06-25 09:54'
				}]
			};
		},
		computed: {
			getlistArr() {
				var self = this;
				this.lifeCircleListArr = [];
				bus.$on('showListDetails', (data) => {
					self.lifeCircleListArr = data.lifeCircleListArr;
				})
			}
		},
		methods: {

		}
	};
</script>

<style>

</style>