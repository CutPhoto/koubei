<template>
	<div class="homeLiRen">
		<homeLiRenNav/>
		<homeLiRenListNav/>
		<homeLiRenDaySale/>
		<homeLiRenListType/>
		<homeLiRenRecommend/>
	</div>
</template>

<script>
	import homeLiRenNav from '../components/homeLiRenNav.vue'
	import homeLiRenListNav from '../components/homeLiRenListNav.vue'
	import homeLiRenDaySale from '../components/homeLiRenDaySale.vue'
	import homeLiRenListType from '../components/homeLiRenListType.vue'
	import homeLiRenRecommend from '../components/homeLiRenRecommend.vue'
	export default {
		data() {
			return {}
		},
		components: {
			homeLiRenNav,
			homeLiRenListNav,
			homeLiRenDaySale,
			homeLiRenListType,
			homeLiRenRecommend
		},
		methods: {
			
		}
	}
</script>

<style>
</style>