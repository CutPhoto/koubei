<template>
	<div id="Goods_Ding_Dan">
		<div class="Goods_dd_tc">
			<p @click="ShowDingDanDetail" :style="{color:colorJ,borderBottom:bdJ}">进行中</p>
			<p @click="ShowDingDanTotal" :style="{color:colorT,borderBottom:bdT}">全部</p>
		</div>
		
		<div class="goods_content" v-show="!isShowDingDanDetail">
			<p class="no_dingdan" v-show="!isShowOrder">没有进行中的订单哦</p>
			<div v-show="isShowOrder" class="orderGoods">
				<h1><i class="fl">{{orderGoods.shopName}}</i><i class="el-icon-arrow-right"></i><span class="fr">去付款</span></h1>
				<img :src="orderGoods.src" class="fl"/>
				<h2>{{orderGoods.title}}</h2>
				<h4><span class="fl">共{{orderGoods.qty}}份</span></h4>
				
				<h5>实付款：{{orderGoods.price}}元</h5>
				
			</div>
		</div>
		<div class="goods_content" v-show="isShowDingDanDetail">
			<p class="no_dingdan">在门店买到的宝贝会出现在这里</p>
			<p class="no_dingdan1">看看附近的门店在卖啥</p>
		</div>
		<xLoader :data-loader="loaderPage" v-if="isShowLoaderPage==='0'"/>
	</div>
</template>

<script>
	import xLoader from "../xLoader"
	export default {
		data() {
			return {
				isShowDingDanDetail: false,
				colorJ: 'red',
				colorT: '',
				bdJ: '1px solid red',
				bdT: '',
				isShowLoaderPage:'0',
				isShowOrder:true,
				orderGoods:{}
			}
		},
		computed: {
			loaderPage() {
				setTimeout(() => {
					this.isShowLoaderPage = ''
				}, 2000)
			}
		},
		mounted() {
			var str=localStorage.getItem(`myOrder`);
			this.orderGoods =JSON.parse(str);
			console.log(this.orderGoods)
		},
		components:{
			xLoader
		},
		methods: {
			ShowDingDanDetail() {
				this.isShowDingDanDetail = !this.isShowDingDanDetail
				this.colorJ = 'red'
				this.colorT = ''
				this.bdJ = "1px solid red"
				this.bdT = ""
			},
			ShowDingDanTotal() {
				this.isShowDingDanDetail = !this.isShowDingDanDetail
				this.colorJ = ''
				this.colorT = 'red'
				this.bdT = "1px solid red"
				this.bdJ = ""
			},
		}
	}
</script>

<style>
	#Goods_Ding_Dan {
		width: 100%;
		height: 100%;
	}
	
	.Goods_dd_tc {
		display: flex;
		border-top: 1px solid #F8F8F8;
	}
	
	.Goods_dd_tc p {
		flex: 1;
		height: 45px;
		line-height: 45px;
		text-align: center;
	}
	
	.weui-loadmore {
		margin-top: 180px;
	}
	
	#Goods_Ding_Dan .goods_content {
		position: fixed;
		align-content: center;
		width: 100%;
		height: 100%;
		background-color: #F8F8F8;
		overflow-x: hidden;
		text-align: center;
	}
	
	.no_dingdan {
		margin-top: 180px;
		color: #999;
	}
	
	.no_dingdan1 {
		margin: 10px 20px 0 20px;
		border: 1px solid #ccc;
		background-color: #fff;
	}
	
	.look_T {
		margin-top: 40px;
		margin-left: -160px;
		background-color: #fff;
		padding: 5px 80px;
		border: 1px solid #ccc
	}
	.orderGoods{
		padding: 10px;
	}
	.orderGoods img{
		width: 60px;
		height: 60px;
		margin: 10px;
	}
	.orderGoods h1,h2,h5,h4{
		overflow: hidden;
		font-size: 14px;
		text-align: left;
	}
	.orderGoods h1 span{
		color: red;
		
	}
	.orderGoods h2{
		margin-top: 10px;
		width: 60%;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.orderGoods h5,h4{
		color: #C0BFC4;
		font-size: 12px;
	}
</style>