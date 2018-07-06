<template>
	<div class="orderCommit">
		<h3><i class="el-icon-arrow-left" @click="goBack"></i> 提交订单</h3>
		<div>
			<img :src="src">
			<span>{{goodsList[0].title}}<br><span><i class="el-icon-success"></i>仅支持整单退</span></span>
			<span><span>{{goodsList[0].price}}元</span><br><span :style="{textDecoration:'line-through'}">52元</span></span>
		</div>
		<div>
			<p>数量
				<inputNumber @emitQty="inputQty" />
			</p>
			<p>小计 <span class="subtotal">{{goodsList[0].qty*goodsList[0].price}}元</span></p>
			<p>实付款<span class="payment">{{goodsList[0].qty*goodsList[0].price}}元</span></p>
		</div>
		<div class="clientPhone">
			<label for="telNumber">手机号</label>
			<input type="phone" id="telNumber" name="telNumber" placeholder="请填写手机号，以便商家提供服务">
		</div>
		<span class="clientAgreement"><i class="el-icon-success"></i>我已经阅读并同意《口碑在线购买服务用户协议》</span>
		<div class="playBtn">
			<router-link to="/dingdanhome"><button @click="toAcount">提交订单</button></router-link>
		</div>
	</div>
</template>
<script type="text/javascript">
	import inputNumber from './inputNumber'
	export default {
		data() {
			return {
				src:'#',
				goodsList: [{
					shopName:'肯德基',
					title: '4份薰衣草风味冰淇淋花筒/华夫筒兑换券',
					price: 28,
					qty: 1,
					src: '../../../static/img/detailImg0.png'
				}]

			}
		},
		components: {
			inputNumber
		},
		methods: {
			inputQty(data) {
				this.qty = data
			},
			goBack() {
				location.href = '/nearbyDetail'
			},
			toAcount() {
				
				var goodsObject = Object.assign({},this.goodsList[0])
				localStorage.setItem(`myOrder`, JSON.stringify(goodsObject));
			}
		},
		mounted() {
			this.src = location.search.replace('?', '').replace(/%2F/g, '/');
			console.log(this.src)
		},

	}
</script>
<style type="text/css">
	body,
	html {
		height: 100%;
		width: 100%;
		background-color: #ccc;
	}
	
	#app {
		height: 100%;
		width: 100%;
	}
	
	.orderCommit {
		font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
		background-color: #ccc;
		font-size: 16px;
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
	}
	
	.orderCommit div {
		background-color: #fff;
		padding-left: 10px;
	}
	
	h3 {
		padding: 0 10px;
		background-color: #fff;
		height: 50px;
		font-size: 16px;
		line-height: 50px;
		font-weight: 700;
		border-bottom: 1px solid #ccc;
	}
	
	.orderCommit div:nth-of-type(1) {
		padding: 30px 10px;
		height: 120px;
		margin-bottom: 15px;
		display: flex;
		font-size: 14px;
	}
	
	.orderCommit div:nth-of-type(1) img {
		width: 40px;
		height: 40px;
	}
	
	.orderCommit div:nth-of-type(1) span:nth-of-type(1) {
		flex: 1;
		padding-left: 10px;
	}
	
	.orderCommit div:nth-of-type(1) span:nth-of-type(1)>span {
		color: green;
		padding-top: 8px;
		padding-left: 0;
	}
	
	.orderCommit div:nth-of-type(1) span:nth-of-type(2) span {
		width: 40px;
		/*text-align: center;*/
		padding: 0;
	}
	
	.orderCommit div:nth-of-type(2) {
		line-height: 40px;
	}
	
	.orderCommit div:nth-of-type(2)>p {
		height: 50px;
		line-height: 50px;
	}
	
	.subtotal {
		float: right;
		margin-right: 20px;
	}
	
	.payment {
		float: right;
		margin-right: 20px;
		color: #DB3920;
	}
	
	.orderCommit div:nth-of-type(2)>p:nth-of-type(3) {
		border-top: 1px solid #ccc;
		height: 60px;
		font-size: 20px;
		font-weight: 500;
		line-height: 60px;
	}
	
	.orderCommit .clientPhone {
		margin-top: 15px;
		display: flex;
		width: 100%;
		height: 50px;
		line-height: 50px;
	}
	
	.orderCommit .clientPhone label {
		width: 25%;
	}
	
	.orderCommit .clientPhone input {
		flex: 1;
		border: none;
	}
	
	.clientAgreement {
		margin-top: 10px;
		font-size: 12px;
		padding-left: 10px;
	}
	
	.orderCommit .playBtn {
		background-color: #ccc;
	}
	
	.playBtn {
		text-align: center;
	}
	
	.playBtn button {
		margin-top: 20px;
		width: 85%;
		background-color: #FD5A00;
		border: none;
		border-radius: 5px;
		height: 30px;
		color: white;
	}
</style>