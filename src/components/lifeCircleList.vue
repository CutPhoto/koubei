<template>
	<div>
		<div class="lifeCircleList" v-for="item in lifeCircleListArr">
			<img class="indexImg" :src="item.imgSrc" />
			<h2 class="title"><span>{{item.type}}</span>{{item.content}}</h2>
			<div class="author">
				<img :src="item.userImgSrc" />
				<span class="userName">{{item.useName}}</span>
				<div class="listCollect">
					<i class="el-icon-star-off"></i>
					<span>{{item.num}}</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'lifeCircleList',
		data() {
			return {
				lifeCircleListArr: [{
					imgSrc: require('../../static/img/indexImg.png'),
					type: '#美食',
					content: '龙虎烩，老鼠份你敢来尝尝吗？切换标签之前的钩子，若返回 false 或者返回 Promise 且被 reject，则阻止切换。',
					userImgSrc: require('../../static/img/rentouxiang.png'),
					useName: 'zjzhi',
					num: '0',
					time: '2018-06-25 09:54'
				}]
			};
		},
		methods: {
			showDetails() {
			}
		}
	};
</script>

<style>
	.lifeCircleList {
		width: 496px;
		margin-bottom: 30px;
	}
	
	.lifeCircleList:nth-child(2n-1) {
		margin-right: 30px;
	}
	
	.lifeCircleList .indexImg {
		width: 496px;
	}
	
	.lifeCircleList .title {
		font-size: 36px;
	}
	
	.lifeCircleList .author img {
		width: 68px;
		height: 68px;
		border-radius: 50%;
	}
	
	.lifeCircleList .author .userName {
		font-size: 33px;
		color: #262626;
		line-height: 68px;
	}
	
	.lifeCircleList .author i {
		font-size: 45px;
	}
	
	.lifeCircleList .author .listCollect {
		width: 126px;
		float: right;
		height: 46px;
		line-height: 46px;
		color: #acacac;
	}
</style>