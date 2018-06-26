<template>
	<div>
		<div class="foucsList" v-for="list in foucsListArr">
			<div class="author">
				<img :src="list.userImgSrc" />
				<span class="list.userName">{{list.useName}}</span>
				<time>{{list.time}}</time>
				<el-button round>+关注</el-button>
			</div>
			<ul>
				<li v-for="imgSrc in list.imgSrcArr"><img :src="imgSrc" /></li>
			</ul>
			<h2>
				<span>{{list.type}}</span>{{list.content}}
			</h2>
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
					time: '2018-06-25 09:54'
				}]
			};
		},
		methods: {

		}
	};
</script>

<style>

</style>