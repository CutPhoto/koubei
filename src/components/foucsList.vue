<template>
	<div>
		<div class="foucsList" v-for="list in foucsListArr">
			<div class="author">
				<img :src="list.userImgSrc" /></a>
				<span class="userName">{{list.useName}}</span>
				<el-button round>+关注</el-button>
				<br />
				<time>{{list.time}}</time>
			</div>
			<a href="/liftDetails">
			<ul>
				<li v-for="imgSrc in list.imgSrcArr"><img :src="imgSrc" /></li>
			</ul>
			<h2>
				<span>{{list.type}}</span>{{list.content}}
			</h2>
			</a>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'foucsList',
		data() {
			return {
				foucsListArr: [{
					imgSrcArr: [require('../../static/img/indexImg.png'), require('../../static/img/indexImg.png'), require('../../static/img/indexImg.png')],
					type: '#美食',
					content: '龙虎烩，老鼠份你敢来尝尝吗？切换标签之前的钩子，若返回 false 或者返回 Promise 且被 reject，则阻止切换。',
					userImgSrc: require('../../static/img/rentouxiang.png'),
					useName: 'zjzhi',
					num: '0',
					time: '2018-06-25'
				},{
					imgSrcArr: [require('../../static/img/indexImg.png'), require('../../static/img/indexImg.png'), require('../../static/img/indexImg.png')],
					type: '#美食',
					content: '龙虎烩，老鼠份你敢来尝尝吗？切换标签之前的钩子，若返回 false 或者返回 Promise 且被 reject，则阻止切换。',
					userImgSrc: require('../../static/img/rentouxiang.png'),
					useName: 'zjzhi',
					num: '0',
					time: '2018-06-25'
				},{
					imgSrcArr: [require('../../static/img/indexImg.png'), require('../../static/img/indexImg.png'), require('../../static/img/indexImg.png')],
					type: '#美食',
					content: '龙虎烩，老鼠份你敢来尝尝吗？切换标签之前的钩子，若返回 false 或者返回 Promise 且被 reject，则阻止切换。',
					userImgSrc: require('../../static/img/rentouxiang.png'),
					useName: 'zjzhi',
					num: '0',
					time: '2018-06-25'
				},{
					imgSrcArr: [require('../../static/img/indexImg.png'), require('../../static/img/indexImg.png'), require('../../static/img/indexImg.png')],
					type: '#美食',
					content: '龙虎烩，老鼠份你敢来尝尝吗？切换标签之前的钩子，若返回 false 或者返回 Promise 且被 reject，则阻止切换。',
					userImgSrc: require('../../static/img/rentouxiang.png'),
					useName: 'zjzhi',
					num: '0',
					time: '2018-06-25'
				},{
					imgSrcArr: [require('../../static/img/indexImg.png'), require('../../static/img/indexImg.png'), require('../../static/img/indexImg.png')],
					type: '#美食',
					content: '龙虎烩，老鼠份你敢来尝尝吗？切换标签之前的钩子，若返回 false 或者返回 Promise 且被 reject，则阻止切换。',
					userImgSrc: require('../../static/img/rentouxiang.png'),
					useName: 'zjzhi',
					num: '0',
					time: '2018-06-25'
				},{
					imgSrcArr: [require('../../static/img/indexImg.png'), require('../../static/img/indexImg.png'), require('../../static/img/indexImg.png')],
					type: '#美食',
					content: '龙虎烩，老鼠份你敢来尝尝吗？切换标签之前的钩子，若返回 false 或者返回 Promise 且被 reject，则阻止切换。',
					userImgSrc: require('../../static/img/rentouxiang.png'),
					useName: 'zjzhi',
					num: '0',
					time: '2018-06-25'
				}]
			};
		},
		methods: {

		}
	};
</script>

<style>
	.foucsList .author img {
		width: 48px;
		height: 48px;
		border-radius: 50%;
		float: left;
		vertical-align: top;
	}
	.foucsList .author .userName {
		font-size: 16px;
		color: #262626;
		/*line-height: 38px;*/
	}
	.foucsList .author .el-button{
		float: right;
		vertical-align: bottom;
	}
	.foucsList ul{
		overflow: hidden;
		padding: 0;
	}
	.foucsList ul li{
		float: left;
		margin-right: 8px;
	}
	.foucsList ul li:last-child{
		margin-right: 0;
	}
	.foucsList ul li img{
		width: 96px;
	}
	.foucsList h2{
		font-size: 16px;
		color: #151515;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.foucsList h2 span{
		color:#526a9b;
	}
</style>