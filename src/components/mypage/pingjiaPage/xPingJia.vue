<template>
	<div>
		<div class="pingjia_box_h">
			<p>
				<router-link to="/myhome"><i class="iconfont icon-arrow-left-copy"></i></router-link>
				<span>我的评价</span>
			</p>
			<i class="iconfont icon-xinfeng"></i>
		</div>
		<div id="Goods_Ding_Dan">
			<div class="pingjia_banner">
				<img src="../../../../static/img/pjBanner.jpg" alt="" />
			</div>
			<div class="Goods_dd_tc">
				<p @click="ShowDingDanDetail" :style="{color:colorJ,borderBottom:bdJ}">待评价</p>
				<p @click="ShowDingDanTotal" :style="{color:colorT,borderBottom:bdT}">已平价</p>
			</div>
			<div class="goods_content" v-show="!isShowDingDanDetail">
				<p class="no_dingdan">暂无待评价的商家哦~</p>
			</div>
			<div class="goods_content" v-show="isShowDingDanDetail">
				<p class="no_dingdan">还没发表过任何评价</p>
			</div>
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

<style scoped>
	@import url("../../../assets/iconfont/iconfont.css");
	.pingjia_box_h {
		height: 50px;
		line-height: 50px;
		display: flex;
		justify-content: space-between;
		padding: 0 20px;
	}
	
	.pingjia_box_h p span {
		margin-left: 20px;
	}
	
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
		padding: 0 60px;
		margin-top: 180px;
	}
	.pingjia_banner {
		height: 70px;
		width: 100%;
	}
	
	.pingjia_banner img {
		height: 70px;
		width: 100%;
	}
</style>