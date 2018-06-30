<template>
	<div>
		<div><lifeCircleHeader class="liftCircleIndex" v-show="!isShowDetails">
			<div slot="focus">
				<h2 class="liftCircleIndexTitle">关注感兴趣的人，丰富你的动态</h2>
				<foucsList :foucsListArr="foucsListArr" @toShow="getBool"/>

			</div>
			<div slot="recommend">
				<a href="#" class="liftCircleHref"><img src="../../static/img/liftCirclehuati.png"/></a>
				<lifeCircleList class="liftCircleMain" :lifeCircleArr = "lifeCircleListArr" @toShow="getBool"/>

			</div>
		</lifeCircleHeader>
		</div>
		<lifeCircleListDetails v-show="isShowDetails" @toShow="getBool">
			<div slot="messageBoard">
				<messageBoard/>
			</div>
		</lifeCircleListDetails>
		<xtarbar class="liftCircleBottom"></xtarbar>
	</div>	
</template>

<script>
	import lifeCircleList from '../components/lifeCircleList.vue'
	import lifeCircleHeader from '../components/lifeCircleHeader.vue'
	import foucsList from '../components/foucsList.vue'
	import lifeCircleListDetails from '../components/lifeCircleListDetails.vue'
	import messageBoard from '../components/messageBoard.vue'
	import xtarbar from '../components/xtarbar/xtarbar'

	export default {
		data() {
			return {
				isShowDetails: false,
				lifeCircleListArr: [{
					imgSrc: require('../../static/img/indexImg.png'),
					type: '#美食1111111',
					content: '龙虎烩，老鼠份你敢来尝尝吗？切换标签之前的钩子，若返回 false 或者返回 Promise 且被 reject，则阻止切换。',
					userImgSrc: require('../../static/img/rentouxiang.png'),
					useName: 'zjzhi',
					num: '0',
					time: '2018-06-25 09:54'
				}, {
					imgSrc: require('../../static/img/indexImg.png'),
					type: '#美食',
					content: '龙虎烩，老鼠份你敢来尝尝吗？切换标签之前的钩子，若返回 false 或者返回 Promise 且被 reject，则阻止切换。',
					userImgSrc: require('../../static/img/rentouxiang.png'),
					useName: 'zjzhi',
					num: '0',
					time: '2018-06-25 09:54'
				}, {
					imgSrc: require('../../static/img/indexImg.png'),
					type: '#美食',
					content: '龙虎烩，老鼠份你敢来尝尝吗？切换标签之前的钩子，若返回 false 或者返回 Promise 且被 reject，则阻止切换。',
					userImgSrc: require('../../static/img/rentouxiang.png'),
					useName: 'zjzhi',
					num: '0',
					time: '2018-06-25 09:54'
				}, {
					imgSrc: require('../../static/img/indexImg.png'),
					type: '#美食',
					content: '龙虎烩，老鼠份你敢来尝尝吗？切换标签之前的钩子，若返回 false 或者返回 Promise 且被 reject，则阻止切换。',
					userImgSrc: require('../../static/img/rentouxiang.png'),
					useName: 'zjzhi',
					num: '0',
					time: '2018-06-25 09:54'
				}, {
					imgSrc: require('../../static/img/indexImg.png'),
					type: '#美食',
					content: '龙虎烩，老鼠份你敢来尝尝吗？切换标签之前的钩子，若返回 false 或者返回 Promise 且被 reject，则阻止切换。',
					userImgSrc: require('../../static/img/rentouxiang.png'),
					useName: 'zjzhi',
					num: '0',
					time: '2018-06-25 09:54'
				}, {
					imgSrc: require('../../static/img/indexImg.png'),
					type: '#美食',
					content: '龙虎烩，老鼠份你敢来尝尝吗？切换标签之前的钩子，若返回 false 或者返回 Promise 且被 reject，则阻止切换。',
					userImgSrc: require('../../static/img/rentouxiang.png'),
					useName: 'zjzhi',
					num: '0',
					time: '2018-06-25 09:54'
				}, {
					imgSrc: require('../../static/img/indexImg.png'),
					type: '#美食',
					content: '龙虎烩，老鼠份你敢来尝尝吗？切换标签之前的钩子，若返回 false 或者返回 Promise 且被 reject，则阻止切换。',
					userImgSrc: require('../../static/img/rentouxiang.png'),
					useName: 'zjzhi',
					num: '0',
					time: '2018-06-25 09:54'
				}, {
					imgSrc: require('../../static/img/indexImg.png'),
					type: '#美食',
					content: '龙虎烩，老鼠份你敢来尝尝吗？切换标签之前的钩子，若返回 false 或者返回 Promise 且被 reject，则阻止切换。',
					userImgSrc: require('../../static/img/rentouxiang.png'),
					useName: 'zjzhi',
					num: '0',
					time: '2018-06-25 09:54'
				}],
				foucsListArr: [{
					imgSrcArr: [require('../../static/img/indexImg.png'), require('../../static/img/indexImg.png'), require('../../static/img/indexImg.png')],
					type: '#美食',
					content: '龙虎烩，老鼠份你敢来尝尝吗？切换标签之前的钩子，若返回 false 或者返回 Promise 且被 reject，则阻止切换。',
					userImgSrc: require('../../static/img/rentouxiang.png'),
					useName: '苏梓萌cando',
					num: '0',
					time: '4天前'
				},{
					imgSrcArr: [require('../../static/img/indexImg.png'), require('../../static/img/indexImg.png'), require('../../static/img/indexImg.png')],
					type: '#美食',
					content: '龙虎烩，老鼠份你敢来尝尝吗？切换标签之前的钩子，若返回 false 或者返回 Promise 且被 reject，则阻止切换。',
					userImgSrc: require('../../static/img/rentouxiang.png'),
					useName: '苏梓萌cando',
					num: '0',
					time: '4天前'
				},{
					imgSrcArr: [require('../../static/img/indexImg.png'), require('../../static/img/indexImg.png'), require('../../static/img/indexImg.png')],
					type: '#美食',
					content: '龙虎烩，老鼠份你敢来尝尝吗？切换标签之前的钩子，若返回 false 或者返回 Promise 且被 reject，则阻止切换。',
					userImgSrc: require('../../static/img/rentouxiang.png'),
					useName: '苏梓萌cando',
					num: '0',
					time: '4天前'
				},{
					imgSrcArr: [require('../../static/img/indexImg.png'), require('../../static/img/indexImg.png'), require('../../static/img/indexImg.png')],
					type: '#美食',
					content: '龙虎烩，老鼠份你敢来尝尝吗？切换标签之前的钩子，若返回 false 或者返回 Promise 且被 reject，则阻止切换。',
					userImgSrc: require('../../static/img/rentouxiang.png'),
					useName: '苏梓萌cando',
					num: '0',
					time: '4天前'
				},{
					imgSrcArr: [require('../../static/img/indexImg.png'), require('../../static/img/indexImg.png'), require('../../static/img/indexImg.png')],
					type: '#美食',
					content: '龙虎烩，老鼠份你敢来尝尝吗？切换标签之前的钩子，若返回 false 或者返回 Promise 且被 reject，则阻止切换。',
					userImgSrc: require('../../static/img/rentouxiang.png'),
					useName: '苏梓萌cando',
					num: '0',
					time: '4天前'
				}]
			}
		},
		components: {
			lifeCircleList,
			lifeCircleHeader,
			foucsList,
			lifeCircleListDetails,
			messageBoard,
			xtarbar
		},
		methods: {
			getBool(msg){
				this.isShowDetails=msg;
			}
		}
	}
</script>

<style scoped>
	.liftCircleIndex .liftCircleIndexTitle{
		font-size: 14px;
		text-align: center;
		color: #9e9e9e;
		background: #f5f5f5;
		height: 36px;
		line-height: 36px;
	}
	.liftCircleHref img{
		width: 100%;
		padding: 10px;
	}
	.liftCircleBottom{
		position:fixed ;
		bottom: 0;
	}
</style>