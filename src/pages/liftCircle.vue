<template>
		<lifeCircleHeader class="liftCircleIndex">
			<div slot="focus">
				<h2 class="liftCircleIndexTitle">关注感兴趣的人，丰富你的动态</h2>
				<foucsList/>

			</div>
			<div slot="recommend">
				<a href="#" class="liftCircleHref"><img src="../../static/img/liftCirclehuati.png"/></a>
				<lifeCircleList class="liftCircleMain"/>

			</div>
		</lifeCircleHeader>
</template>

<script>
	import lifeCircleList from '../components/lifeCircleList.vue'
	import lifeCircleHeader from '../components/lifeCircleHeader.vue'
	import foucsList from '../components/foucsList.vue'

	export default {
		data() {
			return {
				isShowDetails: false
			}
		},
		components: {
			lifeCircleList,
			lifeCircleHeader,
			foucsList
		},
		methods: {

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
</style>