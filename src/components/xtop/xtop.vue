<template>
	<div class="top">
		<a href="#" class="top_l">
			<span @click="dianji">广州</span><i class="el-icon-caret-bottom"></i>
		</a>
		<a href="#" class="top_c">
			<i class="el-icon-menu"></i><span>扫码</span>
		</a>
		<a href="#" class="top_r">
			<i class="el-icon-tickets"></i><span>付款</span>
		</a>
		<a href="#" class="top_b">
			<i class="el-icon-search"></i>
			<span>肯德基狂欢价不止5着</span>
			<i class="el-icon-phone"></i>
		</a>
		<xchenshi v-show="isShow"></xchenshi>
	</div>
</template>

<script>
	import xchenshi from '../xchenshi/xchenshi'
	export default{
		name:'top',
		components:{
			xchenshi
		},
		data(){
			return {
				isShow:false
			}
		},
		methods:{
			dianji(){
				var self=this
				var xhr = new XMLHttpRequest();
				//console.log(xhr)
				xhr.onreadystatechange = function() {
					if(xhr.readyState == 4) {
						var xjson=JSON.parse(xhr.responseText)
						self.bus.$emit('to-xchenshi-json', {
							xjson:xjson,
							isShow: true
						})
					}
				}
				xhr.open("get", "../../../static/index.json", true);
				xhr.send(null);
				
			}
		}
	}
	
</script>

<style>
	.top{
		height: 73px;
		background: orangered;
		width: 100%;
		overflow: hidden;
		padding-top:5px;
	}
	.top a{
		color:white;
		display: block;
		width: 60px;
		height: 24px;
		line-height: 24px;
		float: left;
	}
	.top .top_l{
		font-size: 18px;
		margin-left:14px;
	}
	.top .top_l .el-icon-caret-bottom{
		font-size: 12px;
	}
	.top .top_r{
		font-size: 16px;
		margin-left:14px;
	}
	.top .top_c{
		font-size: 16px;
		margin-left:147px;
		border-right:1px solid #cccccc;
	}
	.top .top_b{
		display: block;
		width: 90%;
		height: 20px;
		border-radius: 10px;
		background: white;
		margin: 15px 5%;
		color:orangered;
		font-size: 12px;
		line-height: 20px;
		text-align: center;
	}
	.top .top_b .el-icon-phone{
		float:right;
		line-height: 20px;
		margin-right:4px;
	}
	
</style>