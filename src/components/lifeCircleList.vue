<template>
	<div>
		<div class="lifeCircleList" v-for="item in lifeCircleListArr">
			<a href="/liftDetails">
				<img class="indexImg" :src="item.imgSrc" />
				<h2 class="title"><span>{{item.type}}</span>{{item.content}}</h2>
			</a>
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
				},{
					imgSrc: require('../../static/img/indexImg.png'),
					type: '#美食',
					content: '龙虎烩，老鼠份你敢来尝尝吗？切换标签之前的钩子，若返回 false 或者返回 Promise 且被 reject，则阻止切换。',
					userImgSrc: require('../../static/img/rentouxiang.png'),
					useName: 'zjzhi',
					num: '0',
					time: '2018-06-25 09:54'
				},{
					imgSrc: require('../../static/img/indexImg.png'),
					type: '#美食',
					content: '龙虎烩，老鼠份你敢来尝尝吗？切换标签之前的钩子，若返回 false 或者返回 Promise 且被 reject，则阻止切换。',
					userImgSrc: require('../../static/img/rentouxiang.png'),
					useName: 'zjzhi',
					num: '0',
					time: '2018-06-25 09:54'
				},{
					imgSrc: require('../../static/img/indexImg.png'),
					type: '#美食',
					content: '龙虎烩，老鼠份你敢来尝尝吗？切换标签之前的钩子，若返回 false 或者返回 Promise 且被 reject，则阻止切换。',
					userImgSrc: require('../../static/img/rentouxiang.png'),
					useName: 'zjzhi',
					num: '0',
					time: '2018-06-25 09:54'
				},{
					imgSrc: require('../../static/img/indexImg.png'),
					type: '#美食',
					content: '龙虎烩，老鼠份你敢来尝尝吗？切换标签之前的钩子，若返回 false 或者返回 Promise 且被 reject，则阻止切换。',
					userImgSrc: require('../../static/img/rentouxiang.png'),
					useName: 'zjzhi',
					num: '0',
					time: '2018-06-25 09:54'
				},{
					imgSrc: require('../../static/img/indexImg.png'),
					type: '#美食',
					content: '龙虎烩，老鼠份你敢来尝尝吗？切换标签之前的钩子，若返回 false 或者返回 Promise 且被 reject，则阻止切换。',
					userImgSrc: require('../../static/img/rentouxiang.png'),
					useName: 'zjzhi',
					num: '0',
					time: '2018-06-25 09:54'
				},{
					imgSrc: require('../../static/img/indexImg.png'),
					type: '#美食',
					content: '龙虎烩，老鼠份你敢来尝尝吗？切换标签之前的钩子，若返回 false 或者返回 Promise 且被 reject，则阻止切换。',
					userImgSrc: require('../../static/img/rentouxiang.png'),
					useName: 'zjzhi',
					num: '0',
					time: '2018-06-25 09:54'
				},{
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
			showDetails() {}
		}
	};
</script>

<style>
	.lifeCircleList {
		width: 147px;
		margin-bottom: 10px;
		float: left;
	}
	
	.lifeCircleList:nth-child(2n-1) {
		margin-right: 10px;
	}
	
	.lifeCircleList .indexImg {
		width: 147px;
	}
	
	.lifeCircleList .title {
		font-size: 12px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		color:#040404;
	}
	.lifeCircleList .title span{
		color: #4d5c90;
	}
	
	.lifeCircleList .author img {
		width: 38px;
		height: 33px;
		border-radius: 50%;
		vertical-align: middle;
	}
	
	.lifeCircleList .author .userName {
		font-size: 16px;
		color: #262626;
		line-height: 38px;
	}
	
	.lifeCircleList .author i {
		font-size: 25px;
	}
	
	.lifeCircleList .author .listCollect {
		/*width: 126px;*/
		float: right;
		height: 38px;
		line-height: 38px;
		color: #acacac;
	}
	
	a {
		text-decoration: none;
	}
	li{
		list-style: none;
	}
</style>