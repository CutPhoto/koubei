<template>
	<div>
		<lifeCircleListDetails>
			<div slot="messageBoard">
				<messageBoard/>
			</div>
		</lifeCircleListDetails>
	</div>
</template>

<script>
	import lifeCircleListDetails from '../components/lifeCircleListDetails.vue'
	import messageBoard from '../components/messageBoard.vue'
	export default {
		data() {
			return {
				
			}
		},
		components: {
			lifeCircleListDetails,
			messageBoard
		},
		methods: {

		}
	}
</script>

<style>

</style>