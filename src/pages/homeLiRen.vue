<template>
	<div class="homeLiRen">
		<homeLiRenNav/>
		<div class="main">
			<homeLiRenListNav/>
			<xtoutiao></xtoutiao>
			<xbanners></xbanners>
			<homeLiRenDaySale/>
			<homeLiRenListType/>
			<homeLiRenRecommend/>
			<xpanel></xpanel>
		</div>
	</div>
</template>

<script>
	import homeLiRenNav from '../components/homeLiRenNav.vue'
	import homeLiRenListNav from '../components/homeLiRenListNav.vue'
	import homeLiRenDaySale from '../components/homeLiRenDaySale.vue'
	import homeLiRenListType from '../components/homeLiRenListType.vue'
	import homeLiRenRecommend from '../components/homeLiRenRecommend.vue'
	import xtoutiao from '../components/xtoutiao/xtoutiao'
	import xbanners from '../components/xbanners/xbanners'
	import xpanel from '@/components/xpanel/xpanel'
	export default {
		data() {
			return {}
		},
		components: {
			homeLiRenNav,
			homeLiRenListNav,
			xtoutiao,
			xbanners,
			homeLiRenDaySale,
			homeLiRenListType,
			homeLiRenRecommend,
			xpanel
		},
		methods: {

		}
	}
</script>

<style>
	.homeLiRen{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
	}
	.homeLiRen .main{
		flex: 1;
		overflow-x: hidden;
		
	}
</style>