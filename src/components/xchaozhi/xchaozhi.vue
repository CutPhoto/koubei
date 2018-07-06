<template>
	<div class="chaozhi">
		<div class="chaozhi_t">
			<i></i><span>{{text}}</span><i></i>
		</div>
		<div class="chaozhi_c">
			<img :src="img" alt="" />
		</div>
		<router-link to="/shopDetails" class="chaozhi_b">
			
			<div class="chaozhi_b_t">
				<img :src="commodity[0].src" alt="" />
				<p v-text="commodity[0].name"></p>
				<p><span v-text="commodity[0].price"></span><del v-text="commodity[0].del"></del></p>
			</div>
			<div class="chaozhi_b_c">
				<img :src="commodity[1].src" alt="" />
				<p v-text="commodity[1].name"></p>
				<p><span v-text="commodity[1].price"></span><del v-text="commodity[1].del"></del></p>
			</div>
			<div class="chaozhi_b_b">
				<img :src="commodity[2].src" alt="" />
				<p v-text="commodity[2].name"></p>
				<p><span v-text="commodity[2].price"></span><del v-text="commodity[2].del"></del></p>
			</div>
		</router-link>
	</div>
</template>

<script>
	export default {
		name:'xaimei',
		data(){ 
			return{
				text:'潮玩惠',
				img:require('../../assets/chaozhi1.jpg'),
				commodity:[{
					'id':16,
					'name':'三个辣椒牛肉粉',
					'names':'【心机染】...',
					'src':require('../../assets/chaozhi2.jpg'),
					'price':'199元',
					'del':'888元'
				},{
					'id':17,
					'name':'藤野造型',
					'names':'49元，价值...',
					'src':require('../../assets/chaozhi3.jpg'),
					'price':'49元',
					'del':'128元'
				},{
					'id':18,
					'name':'藤野造型',
					'names':'49元，价值...',
					'src':require('../../assets/chaozhi4.jpg'),
					'price':'49元',
					'del':'128元'
				}]
			}
		}
	}
</script>

<style>
	.chaozhi{
		width:90%;
		height: 218px;
		margin: 10px auto;
	}
	.chaozhi_t{
		height: 36px;
		line-height: 36px;
		text-align: center;
	}
	.chaozhi_c{
		height: 50px;
	}
	.chaozhi_c img{
		height: 50px;
		width: 100%;
	}
	.chaozhi_b{
		width: 100%;
		height: 140px;
		display: flex;
		flex-direction: row;
		margin-top: 2px;
	
	}
	.chaozhi_b img{
		width: 98%;
		height: 77px;
	}
	.chaozhi_b p{
		font-size: 14px;
		color: #262626;
		text-align: center;
		line-height: 20px;
	}
	.chaozhi_b span{
		font-size: 16px;
		color:red;
	}
	.chaozhi_b del{
		font-size: 12px;
		color: #ACACAC;
	}
	.chaozhi_b .chaozhi_b_t{
		flex: 1;
	}
	.chaozhi_b .chaozhi_b_c{
		flex: 1;
		
	}
	.chaozhi_b .chaozhi_b_b{
		flex: 1;
	}
</style>