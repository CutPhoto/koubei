<template>
	<div class="shopOnSale">
		<h2><i class="el-icon-sold-out"></i>本店在售</h2>
		<ul>
			<li v-for="item in goodsArr">
				<img :src="item.indexImg" />
				<div class="shopOnSaleTitle">
					<h3>{{item.goodsTitle}}</h3>
					<h4><span>{{item.goodsSale}}元</span><del>{{item.goodPrice}}元</del></h4>
					<div class="zhekoucard">
						口碑卡<span>折上8.8折</span>
					</div>
				</div>
				<div class="shopOnSaleTobuy">
					<router-link to="/nearbyDetail"><i>购买</i></router-link>
					<br />
					<span> 已售{{item.toSale}}份</span>
				</div>

			</li>
		</ul>
		<h2 class="shopOnSaleMore">查看全部</h2>
	</div>
</template>

<script>
	export default {
		props:['goodsArr'],
		data() {
			return {

			};
		},
		methods: {

		}
	}
</script>

<style scoped>
	.shopOnSale {
		width: 100%;
		
	}
	
	.shopOnSale h2 {
		font-size: 14px;
		line-height: 46px;
		margin-left: 10px;
		border-bottom: 1px solid #ccc;
		color: #000;
	}
	.shopOnSale h2 i{
		font-size: 18px;
		color: #ff5200;
	}
	.shopOnSale ul{
		overflow: hidden;
		
	}
	.shopOnSale ul li{
		overflow: hidden;
	}
	.shopOnSale ul li img {
		float: left;
		width: 80px;
		height: 80px;
		margin: 10px;
	}
	
	.shopOnSale ul li .shopOnSaleTitle {
		float: left;
		width: 42%;
	}
	
	.shopOnSale ul li .shopOnSaleTitle h3 {
		color: #000;
		font-size: 12px;
		width: 100%;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		margin-top: 8px;
	}
	
	.shopOnSale ul li .shopOnSaleTitle h4 span {
		font-size: 12px;
		color: #ff2f0b;
		margin-right: 10px;
	}
	
	.shopOnSale ul li .shopOnSaleTitle h4 del {
		font-size: 12px;
		color: #838383;
	}
	
	.shopOnSale ul li .shopOnSaleTitle .zhekoucard {
		width: 92px;
		color: #ac8c32;
		background: #f6fadc;
		font-size: 12px;
		border: 1px solid #c2c2b5;
	}
	
	.shopOnSale ul li .shopOnSaleTitle .zhekoucard span {
		background: #c68f38;
		color: #fcfeca;
	}
	
	.shopOnSale ul li .shopOnSaleTobuy {
		font-size: 12px;
		float: right;
		width: 70px;
		padding-left: 10px;
	}
	
	.shopOnSale ul li .shopOnSaleTobuy span {
		margin-top: 10px;
	}
	
	.shopOnSale ul li .shopOnSaleTobuy i {
		padding: 7px;
		width: 52px;
		display: inline-block;
		text-align: center;
		border-radius: 7px;
		background: #fc5b00;
		color: #fff;
		margin-bottom: 10px;
		margin-top: 10px;
	}
	.shopOnSale .shopOnSaleMore {
		text-align: center;
		border-top: 1px solid #ccc;
		color: #7f7f7f;
		margin-left: 0px;
		border-bottom: 0;
	}
</style>