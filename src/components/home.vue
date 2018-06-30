<template>
	<div id="box">
		<xtop></xtop>
		
		<div class="box_main">
			<xbanner></xbanner>
			<xnav></xnav>
			<xtoutiao></xtoutiao>
			<xbanners></xbanners>
			<xchaozhi></xchaozhi>
			<xchaowan></xchaowan>
			<xzhenxuan></xzhenxuan>
			<xaimei></xaimei>
			<xrenqi></xrenqi>
			<xpanel></xpanel>
		</div>
		<!--<xtarbar></xtarbar>-->
		
	</div>
</template>

<script>
	import xtop from './xtop/xtop'
	import xbanner from './xbanner/xbanner'
	import xnav from './xnav/xnav'
	import xtoutiao from './xtoutiao/xtoutiao'
	import xbanners from './xbanners/xbanners'
	import xtarbar from './xtarbar/xtarbar'
	import xchaozhi from './xchaozhi/xchaozhi'
	import xchaowan from './xchaowan/xchaowan'
	import xzhenxuan from './xzhenxuan/xzhenxuan'
	import xaimei from './xaimei/xaimei'
	import xrenqi from './xrenqi/xrenqi'
	import xpanel from './xpanel/xpanel'
	
	
	
	export default {
		name: 'home',
		components:{
			xtop,
			xbanner,
			xnav,
			xtoutiao,
			xbanners,
			xtarbar,
			xchaozhi,
			xchaowan,
			xzhenxuan,
			xaimei,
			xrenqi,
			xpanel
		}
	}
</script>

<style>
	#box{
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 100%;
			}
	*{
		padding: 0;
		margin: 0;
	}
	html{
		width: 100%;
		height: 100%;
	}
	body{
		width: 100%;
		height: 100%;
	}
	#app{
		width: 100%;
		height: 100%;
	}
	.box_main{
		flex:1;
		overflow-x: hidden;
	}
	a{
		text-decoration:none;
	}
	ul{
		list-style:none
	}
</style>