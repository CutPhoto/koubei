<template>
	<div id="diingdan_box">
		<div id="dingdan_header">
			<router-link to="/myhome"><i class="dingdan_centent_i iconfont icon-arrow-left-copy"></i></router-link>
			<div class="dingdan_centent">
				<span @click="GoodsDingDan" :style="{backgroundColor:gbgColor,color:gfontColor}">商品订单</span>
				<span  @click="ZhiFuDingDan" :style="{backgroundColor:zbgColor,color:zfontColor}">支付订单</span>
				<span @click="YuYueFuWu" :style="{backgroundColor:ybgColor,color:yfontColor}">预约服务</span>
			</div>
			<p class="dingdan_centent_p"></p>
		</div>
		<xGoodsDingDan v-if= "isShowPanel === 'goods'"/>
		<xZhiFuDingDan v-else-if = "isShowPanel === 'zhifu'"/>
		<xYuYueFuWu v-else = "isShowPanel === 'yuyue'"/>
	</div>

</template>

<script>
	import xGoodsDingDan from "./xGoodsDingDan"
	import xZhiFuDingDan from "./xZhiFuDingDan"
	import xYuYueFuWu from "./xYuYueFuWu"
	export default {
		data(){
			return {
				gbgColor:'red',
				gfontColor:'#fff',
				zbgColor:'',
				zfontColor:'',
				ybgColor:'',
				yfontColor:'',
				isShowPanel:'goods'
			}
		},
		components: {
			xGoodsDingDan,
			xZhiFuDingDan,
			xYuYueFuWu
		},
		methods:{
			GoodsDingDan(){
				this.isShowPanel = 'goods'
				this.gbgColor = "red"
				this.gfontColor = "#fff"
				this.zbgColor = ""
				this.zfontColor = ""
				this.ybgColor = ""
				this.yfontColor = ""
			},
			ZhiFuDingDan(){
				this.isShowPanel = 'zhifu'
				this.gbgColor = ""
				this.gfontColor = ""
				this.zbgColor = "red"
				this.zfontColor = "#fff"
				this.ybgColor = ""
				this.yfontColor = ""
			},
			YuYueFuWu(){
				this.isShowPanel = 'yuyue'
				this.gbgColor = ""
				this.gfontColor = ""
				this.zbgColor = ""
				this.zfontColor = ""
				this.ybgColor = "red"
				this.yfontColor = "#fff"
			}
		}
	}
</script>

<style scoped>
	@import "../../../assets/iconfont/iconfont.css";
	#dingdan_header {
		display: flex;
		justify-content: space-between;
		height: 40px;
		line-height: 40px;
		background-color: #fff;
	}
	
	#dingdan_header .dingdan_centent {
		display: flex;
	}
	
	#dingdan_header .dingdan_centent span {
		height: 22px;
		line-height: 10px;
		display: block;
		padding: 5px 10px;
		border: 1px solid red;
		text-align: center;
		margin-top: 10px;
		color: red;
	}
	
	.dingdan_centent_i {
		margin-left: 20px;
	}
	
	.dingdan_centent_p {
		margin-right: 20px;
	}
</style>