<template>
	<div class="czzSpot">
		<img :src="src">
	</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return{
				src : require('../../../static/img/czzNavTopImg.png')
			}
		}
	}
</script>
<style type="text/css" scoped>
	.czzSpot{
		height: 157px;
		background-color: #fff;
		padding: 11px;
	}
	img{
		width: 100%;
		height: 100%;
	}
</style>