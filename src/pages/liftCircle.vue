<template>
	<div>
		<lifeCircleHeader>
			<div slot="focus">

				<foucsList/>

			</div>
			<div slot="recommend">

				<lifeCircleList/>

			</div>
		</lifeCircleHeader>
	</div>
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

<style>

</style>