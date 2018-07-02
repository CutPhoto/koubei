<template>
	<div id="home_box">
		<xMyHeader/>
		<xMyPanel/>
		<xtarbar/>
	</div>
</template>

<script>
	import Vue from 'vue'
	//我的页面
	import xMyHeader from './xMyHeader'
	
	import xMyPanel from './xMyPanel'
	
	import xtarbar from '../xtarbar/xtarbar'
	
	
	export default{
		components:{
			xMyHeader,
			xMyPanel,
			xtarbar
		}
	}
	
</script>

<style>
a{color:#000}
#home_box{
	display:flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
}
</style>