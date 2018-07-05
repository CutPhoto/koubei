<template>
	<div class="chaowan">
		<div class="chaowan_l">
			<div class="chaowan_l_t">
				<p>
					<i class="el-icon-phone" style="color: pink;"></i>
					 <span style="width: 40px; background: white;color: pink;">{{text1}}</span>
					  <span >{{text2}}</span>
				</p>
			</div>
			<router-link to="/shopDetails" class="chaowan_l_b">
				<div class="chaowan_l_b1">
					<p v-text="commodity[0].name"></p>
					<p v-text="commodity[0].names"></p>
					<p><span style="color:red" v-text="commodity[0].price">199元</span> <del v-text="commodity[0].del"></del></p>
				</div>
				<div class="chaowan_l_b2">
					<img :src="commodity[0].src" alt="" />
				</div>
			</router-link>
		</div>
		<div class="chaowan_r">
			<div class="chaowan_r_t">
				<p>
					<i class="el-icon-phone" style="color: lightgreen;"></i>
					 <span style="width: 48px; background: white;color: lightgreen;">{{text3}}</span>
				
				</p>
			</div>
			<router-link to="/shopDetails" class="chaowan_r_b">
				<div class="chaowan_r_b1">
					<p v-text="commodity[1].name"></p>
					<p v-text="commodity[1].names"></p>
					<span style="font-size: 14px;color:red;" v-text="commodity[1].price"></span> <del v-text="commodity[1].del"></del>
				</div>
				<div class="chaowan_r_b2">
					<img :src="commodity[1].src" alt="" />
				</div>
			</router-link>
		</div>
		
	</div>
	

</template>

<script>
	export default {
		name:'xaimei',
		data(){ 
			return{
				text1:'潮玩惠',
				text2:'品质好货推荐',
				text3:'附近优惠',
				commodity:[{
					'id':14,
					'name':'88潮牌造型',
					'names':'【心机染】...',
					'src':require('../../assets/chaowan1.jpg'),
					'price':'199元',
					'del':'888元'
				},{
					'id':15,
					'name':'藤野造型仅售',
					'names':'49元，价值...',
					'src':require('../../assets/chaowan2.jpg'),
					'price':'49元',
					'del':'128元'
				}]
			}
		}
	}
</script>

<style>
	.chaowan{
		width:100%;
		height: 140px;
		display: flex;
		flex-direction: row;
	}
	.chaowan_l{
		flex: 1;
		border-top:1px solid #ccc;
		border-right:1px solid #ccc;
		
		padding: 5px;
	}
	.chaowan_r{
		flex: 1;
		padding: 5px;
		border-top: 1px solid #ccc;
	}
	.chaowan_l_t p{
		line-height: 40px;
	}
	.chaowan_l_t p span{
		display: inline-block;
		text-align: center;
		line-height: 16px; 
		background: #CCCCCC;
		font-size: 12px;
		border-radius: 6px;
	}
	.chaowan_r_b{
		overflow: hidden;
	}
	.chaowan_l_b1{
		float: left;
	}
	.chaowan_l_b1 p{
		font-size: 14px;
	}
	.chaowan_l_b2{
		float: right;
		margin-top: 10px;
		width: 30%;
		margin-right: 10px;
		
	}
	.chaowan_l_b2 img{
		width:100%;
	}
	.chaowan_r_t p{
		line-height: 40px;
	}
	.chaowan_r_t p span{
		display: inline-block;
		text-align: center;
		width:100px;
		line-height: 16px; 
		background: #CCCCCC;
		font-size: 12px;
		border-radius: 6px;
	}
	.chaowan_r_b1{
		float: left;
	}
	.chaowan_r_b1 p{
		font-size: 14px;
	}
	.chaowan_r_b2{
		float: right;
		margin-top: 10px;
		margin-right: 10px;
		
		width: 30%;
	}
	.chaowan_r_b2 img{
		width: 100%;
	}
</style>