<template>
	<div class="aimei">
		<div class="aimei_k"></div>
		<div class="aimei_t">
			<i class="el-icon-goods"></i><span>爱美嗨玩</span><span>买多次更省钱</span>
		</div>
		<a href="shopDetails" class="aimei_b">
			<div class="aimei_b_l">
				<img img :src="commodity[0].src" alt="" />
				<p v-text="commodity[0].name"></p>
				<p><span v-text="commodity[0].price"></span><del v-text="commodity[1].del"></del></p>
			</div>
			<div class="aimei_b_c">
				<img :src="commodity[1].src" alt="" />
				<p v-text="commodity[1].name"></p>
				<p><span v-text="commodity[1].price"></span><del v-text="commodity[1].del"></del></p>
			</div>
			<div class="aimei_b_r">
				<img :src="commodity[2].src" alt="" />
				<p v-text="commodity[2].name"></p>
				<p><span v-text="commodity[2].price"></span><del v-text="commodity[2].del"></del></p>
			</div>
		</a>
		<div class="aimei_k"></div>
	</div>
</template>

<script>
	export default {
		name:'xaimei',
		data(){
			return{
				text1:'爱美嗨玩',
				text2:'买多次更省钱',
				commodity:[{
					'id':11,
					'name':'清颜堂专业祛痘',
					'src':require('../../assets/aimei1.jpg'),
					'price':'9元',
					'del':'456元'
				},{
					'id':12,
					'name':'发意达脱发白...',
					'src':require('../../assets/aimei2.jpg'),
					'price':'41.90元',
					'del':'769元'
				},{
					'id':13,
					'name':'藤野造型',
					'src':require('../../assets/aimei3.jpg'),
					'price':'98元',
					'del':'192元'
				}]
			}
		}
	}
</script>

<style>
	.aimei{
		height: 175px;
		
	}
	.aimei_k{
		height: 5px;
		background: #CCCCCC;
	}
	.aimei_t{
		height: 40px;
		text-align: center;
		line-height: 40px;
	}
	.aimei_t .el-icon-goods{
		color: red;
	}
	.aimei_t span:nth-child(2){
		color:red;
		font-size: 14px;
	}
	.aimei_t span:nth-child(3){
		padding: 3px;
		width:100px;
		height: 20px;
		font-size: 10px;
		margin-left: 20px;
		background: #CCCCCC;
		border-radius: 20px;
	}
	.aimei_b{
		width: 90%;
		margin: 0 auto;
		height: 120px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	.aimei_b img{
		width: 94%;
	}
	.aimei_b p{
		line-height: 20px;
		font-size: 14px;
		text-align: center;
	}
	.aimei_b span{
		line-height: 20px;
		font-size: 12px;

		color: red;
	}
	.aimei_b del{
		line-height: 20px;
		font-size: 12px;
		color: #ACACAC;
	}
</style>