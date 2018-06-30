<template>
	<div id="Goods_Ding_Dan">
		<div class="Goods_dd_tc">
			<p @click="ShowDingDanDetail" :style="{color:colorJ,borderBottom:bdJ}">进行中</p>
			<p @click="ShowDingDanTotal" :style="{color:colorT,borderBottom:bdT}">全部</p>
		</div>
		<div class="goods_content" v-show="!isShowDingDanDetail">
			<p class="no_dingdan">没有进行中的订单哦</p>
		</div>
		<div class="goods_content" v-show="isShowDingDanDetail">
			<p class="no_dingdan">在门店买到的宝贝会出现在这里</p>
			<p class="no_dingdan1">看看附近的门店在卖啥</p>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				isShowDingDanDetail: false,
				colorJ: 'red',
				colorT: '',
				bdJ: '1px solid red',
				bdT: ''
			}
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
			}
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
		color:#999;
	}
	.no_dingdan1{
		margin:10px 20px 0 20px;
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
</style>