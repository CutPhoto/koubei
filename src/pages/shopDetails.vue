<template>
	<div class="shopDetails">
		<shopDetailsTop/>
		<div class="main">
			<img src="../../static/img/shopDetailTitle.png" class="shopDetailsTitleImg" />
			<shopDetailsMsg :shopDetails="shopDetails" />
			<shopAddress :shopDetail="shopDetails" />
			<koubeiExclusive/>
			<ul class="shopDetailsNav">
				<li>
					<a href="#OnSale">优惠</a>
				</li>
				<li>
					<a href="#message">评价</a>
				</li>
				<li>
					<a href="#">商家信息</a>
				</li>
			</ul>
			<shopOnSale :goodsArr="goodsOnSaleArr" id="OnSale" />
			<messageBoard class="messageBorrdInShop" id="message" />
			<xpanel></xpanel>
		</div>

		<buttomButton/>
	</div>
</template>

<script>
	import shopDetailsTop from '@/components/shopDetailsList/shopDetailsTop.vue'
	import shopDetailsMsg from '@/components/shopDetailsList/shopDetailsMsg.vue'
	import shopAddress from '@/components/shopDetailsList/shopAddress.vue'
	import koubeiExclusive from '@/components/shopDetailsList/koubeiExclusive.vue'
	import shopOnSale from '@/components/shopDetailsList/shopOnSale.vue'
	import messageBoard from '@/components/messageBoard.vue'
	import xpanel from '@/components/xpanel/xpanel'
	import buttomButton from '@/components/nearbyDetail/buttomButton'
	export default {
		data() {
			return {
				shopDetails: [{
					shopName: '潮炎盛荟潮汕牛肉火锅(元岗店)',
					shopHot: '85',
					shopGrade: '3',
					shopType: '港式火锅',
					shopAverageConsumption: '122',
					shopAddress: '元岗横路16号A座103-104',
					shopImg: '../../static/img/shopDetailsMsg.png'
				}],
				goodsOnSaleArr: [{
					indexImg: '../../static/img/saleCard.png',
					goodsTitle: '工作日午餐券1张，可叠加使用2张',
					goodsSale: '50',
					goodPrice: '100',
					toSale: '25'
				}, {
					indexImg: '../../static/img/saleCard.png',
					goodsTitle: '工作日午餐券1张，可叠加使用2张',
					goodsSale: '50',
					goodPrice: '100',
					toSale: '25'
				}, {
					indexImg: '../../static/img/saleCard.png',
					goodsTitle: '工作日午餐券1张，可叠加使用2张',
					goodsSale: '50',
					goodPrice: '100',
					toSale: '25'
				}, {
					indexImg: '../../static/img/saleCard.png',
					goodsTitle: '工作日午餐券1张，可叠加使用2张',
					goodsSale: '50',
					goodPrice: '100',
					toSale: '24'
				}]
			}
		},
		components: {
			shopDetailsTop,
			shopDetailsMsg,
			shopAddress,
			koubeiExclusive,
			shopOnSale,
			messageBoard,
			xpanel,
			buttomButton
		},
		methods: {

		}
	}
</script>

<style scoped>
	.shopDetails{
		height: 100%;
		width: 100%;
		display: flex;
		flex-direction: column;
	}
	.shopDetails .main{
		flex: 1;
		overflow-x: hidden;
	}
	.shopDetailsTitleImg {
		height: 60px;
		width: 100%;
	}
	
	.shopDetailsNav {
		overflow: hidden;
		border-bottom: 1px solid #ccc;
	}
	
	.shopDetailsNav li {
		float: left;
		width: 33%;
		font-size: 14px;
		text-align: center;
		line-height: 50px;
		height: 50px;
	}
	
	.shopDetailsNav li a {
		display: inline-block;
		width: 60px;
		height: 50px;
		color: #cacaca;
	}
</style>