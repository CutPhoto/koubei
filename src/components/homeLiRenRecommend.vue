<template>
	<div class="homeLiRenRecommend">
		<ul>
			<li><span @click="showList(1)">美发推荐</span></li>
			<li><span @click="showList(2)">美甲推荐</span></li>
			<li><span @click="showList(3)">美容推荐</span></li>
			<li><span @click="showList(4)">全部推荐</span></li>
		</ul>
		<slot name="LiRenRecommendList"></slot>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				showLiRenRecommendList:''
			};
		},
		methods: {
			showList(index){
				this.showLiRenRecommendList = index;
				var spanArr =document.querySelectorAll('.homeLiRenRecommend span')
				for(var i =0;i<spanArr.length;i++){
					spanArr[i].style.borderBottom='0'
				}
				event.target.style.borderBottom="2px solid #ff1e26";
			}
			
		}
	};
</script>

<style scoped>
	.homeLiRenRecommend ul{
		margin-top: 10px;
		overflow: hidden;
	}
	.homeLiRenRecommend ul li {
		float: left;
		font-size: 14px;
		padding: 0px 12px;
		border-bottom: 1px solid #ccc;
		color: #000;
		margin-bottom: 20px;
	}
	.homeLiRenRecommend ul li span{
		display: inline-block;
		height: 36px;
		line-height: 36px;
	}
</style>