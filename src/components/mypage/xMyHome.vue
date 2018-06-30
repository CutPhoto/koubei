<template>
	<div>
		<xMyHeader/>
		<xMyPanel/>
		<xMyTabbar/>
	</div>
</template>

<script>
	import Vue from 'vue'
	//我的页面
	import xMyHeader from './xMyHeader'
	
	import xMyPanel from './xMyPanel'
	
	import xMyTabbar from './xMyTabbar'
	
	
	export default{
		components:{
			xMyHeader,
			xMyPanel,
			xMyTabbar
		}
	}
	
</script>

<style>
</style>