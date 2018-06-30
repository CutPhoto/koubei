<template>
	<div>
		<div class="pingjia_box_h">
			<p>
				<a href="myhome" class="iconfont icon-arrow-left-copy"></a>
				<span>我的收藏</span>
			</p>
			<i class="iconfont icon-xinfeng"></i>
		</div>
		<div id="Goods_Ding_Dan">
			<div class="Goods_dd_tc">
				<p @click="ShowDingDanDetail" :style="{borderBottom:bdJ}">店铺</p>
				<p @click="ShowDingDanTotal" :style="{borderBottom:bdT}">商品</p>
				<p @click="ShowArticle" :style="{borderBottom:bdW}">文章</p>
			</div>
			<div class="goods_content" v-if="isShowContent === 'dianpu'">
				<p class="no_dingdan">{{dianpuContent}}</p>
				<a href="" class="collect_shuanxin">刷新</a>
			</div>
			<div class="goods_content" v-else-if="isShowContent === 'goods'">
				<p class="no_dingdan">{{goodsContent}}</p>
			</div>
			<div class="goods_content" v-else="isShowContent === 'article'">
				<p class="no_dingdan">{{collectContent}}</p>
				<a href="" class="collect_shuanxin">刷新</a>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				dianpuContent: '还没收藏任何店铺哦 探索附近的好友吃好玩的吧~',
				goodsContent: '还没发表过任何评价',
				collectContent: '还没收藏任何文章哦看看生活圈里大家都在讨论什么',
				isShowContent: 'dianpu',
				bdJ: '1px solid red',
				bdT: '',
				bdW: '1px solid red',
				bdW: ''
			}
		},
		methods: {
			ShowDingDanDetail() {
				this.isShowContent = 'dianpu'
				this.bdJ = "1px solid red"
				this.bdT = ""
				this.bdW = ""
			},
			ShowDingDanTotal() {
				this.isShowContent = 'goods'
				this.bdT = "1px solid red"
				this.bdJ = ""
				this.bdW = ""
			},
			ShowArticle() {
				this.isShowContent = 'article'
				this.bdT = ""
				this.bdJ = ""
				this.bdW = "1px solid red"
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
		margin-top: 300px;
	}
	
	.pingjia_banner {
		height: 70px;
		width: 100%;
	}
	
	.pingjia_banner img {
		height: 70px;
		width: 100%;
	}
	.collect_shuanxin{
		display: block;
		padding:20px 0;
	}
</style>