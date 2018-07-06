<template>
	<div id="nearbyDetail">
		<div class="detailImg">
			<img src="../../../static/img/detailImg0.png">
			<i @click="goBack"></i>
		</div>
		<div class="detailDivOwo">
			<h3>稻家香|鲜鲍猪骨节瓜窝套餐</h3>
			<p><span class="detailPrice">48<i>元</i></span><span class="detailQty">已售套餐<i>47份</i></span></p>
			<p class="detailPromise"><span> <i class="el-icon-success"></i> 随时退</span><span><i class="el-icon-success"></i> 过期退</span></p>	
		</div>	
		<div class="detailDivTwo">
			<p>适用门店</p>
			<p>稻香酒家</p>
			<p>宝华路133号恒宝广场3楼xxx铺</p>
		</div>
		<div class="detailDivFhree">
			<h3>详细内容</h3>
			<ul>
				<li>鲜鲍猪骨节瓜窝（1份）<span>68元</span></li>
				<li>25头鲜鲍鱼子（10只）<span>98元</span>	</li>
				<el-row>
					<el-button>查看图文详情&gt;</el-button>
				</el-row>	
			</ul>
		</div>	
		<div class="detailDivFour" :style="{marginBottom:'60px'}">
			<h3>更多本店宝贝详情</h3>
			<shopCard class="shopCard" v-for = "card in cardList"/>
		</div>
		<buttomButton :btnsendsrc="'../../../static/img/detailImg0.png'"/>	
	</div>
</template>
<script type="text/javascript">
	import shopCard from './shopCard'
	import buttomButton from './buttomButton'
	export default{
		data(){
			return{
				cardList:['1','2','3']
			}
		},
		components:{shopCard,buttomButton},
		methods: {
			goBack(){
				history.back()
			}
		}
	
	}
</script>
<style type="text/css">
	html,body{
		width: 100%;
		height: 100%;
	}
	#app{
		width: 100%;
		height: 100%;
	}
	#nearbyDetail{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		background-color: #ccc;
	}
	.detailImg{
		position: relative;
	}
	.detailImg i{
		width: 60px;
		height: 60px;
		position: absolute;
		top:0;
	}
	.detailImg img{
		width: 100%;
		height: 100%;
	}
	#nearbyDetail div:nth-of-type(2),#nearbyDetail div:nth-of-type(3),#nearbyDetail div:nth-of-type(4){
		padding: 10px;
		background-color: #fff;
		margin-bottom: 10px;
	}
	#nearbyDetail div:nth-of-type(2) h3{
		font-size: 18px;
		line-height: 36px;
	}
	#nearbyDetail .detailPrice{
		display: inline-block;
		color:red;
		font-weight: bolder;
		margin-bottom: 14px;

	}
	#nearbyDetail .detailPrice i{
		font-size: 16px;
		font-weight: normal;

	}
	#nearbyDetail .detailQty{
		font-size: 16px;
		float:right;
	}
	#nearbyDetail .detailPromise{
		border-top: 1px solid #ccc;
		font-size: 16px;
		color:#37B594;
		line-height: 50px;
		height: 50px;
	}
	#nearbyDetail .detailPromise span{
		padding-right: 10px;
	}
	#nearbyDetail .detailDivTwo > p{
		line-height: 45px;
		font-size: 16px;
		line-height: 45px;
		border-bottom: 1px solid #ccc;
	}
	#nearbyDetail .detailDivTwo > p:last-child{
		border-bottom: none;
	}
	#nearbyDetail .detailDivFhree h3{
		font-size: 18px;
		line-height: 36px;
		height: 36px;
		border-bottom: 1px solid #ccc;
	}
	#nearbyDetail .detailDivFhree ul{
		font-size: 16px;

	}
	#nearbyDetail .detailDivFhree ul li{
		line-height: 36px;
		margin-top: 10px;

	}
	#nearbyDetail .detailDivFhree ul li p{
		text-align: center;
		border:1px solid #ccc;
	}
	#nearbyDetail .detailDivFhree ul li span{
		float:right;

	}
	#nearbyDetail .detailDivFhree .el-row{
		text-align: center;
		margin-top: 10px;
	}
	#nearbyDetail .detailDivFour h3{
		width: 100%;
		font-size: 18px;
		line-height: 36px;
		height: 36px;
		border-bottom: 1px solid #ccc;
	}
	#nearbyDetail .detailDivFour .el-row{
		padding: 0;
	}
	#nearbyDetail .detailDivFour .shopCard{
		float:left;
		width: 40%;
		margin: 15px 15px;
	}


</style>