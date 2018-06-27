<template>
	<div class="czzHeader">
		<div></div>
		<div>
			<i class="el-icon-location-outline"></i>
			<span>{{czzHeader_title}}</span>
			<i class="el-icon-caret-bottom"></i>
		</div>
		<div><i class="el-icon-search"></i></div>
	</div>
</template>	
<script type="text/javascript">
	export default{
		data(){
			return{
				czzHeader_title:'景晖苑小区',
			}
		}
	}	
</script>
<style type="text/css" scoped>
	.czzHeader{
		
		background-color: #FF5E00;
		display: flex;
	}
	.czzHeader>div{
		/*flex:1;*/
		text-align: center;
		width: 65px;
		
	}
	.czzHeader div:nth-of-type(2){
		color:#fff;
		font-size: 20px;
		line-height: 60px;
		height: 60px;
		flex:1;
	}
	.czzHeader div:nth-of-type(3)>i{
		font-size: 25px;
		line-height: 60px;
		height: 60px;	
		color:#fff;
	}
</style>