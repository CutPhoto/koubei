<template>
	<div>
		<div class="lifeCircleList" v-for="item in lifeCircleArr">
			<div @click="showDetails(item)">
				<img class="indexImg" :src="item.imgSrc" />
				<h2 class="title"><span>{{item.type}}</span>{{item.content}}</h2>
			</div>
			<div class="author">
				<img :src="item.userImgSrc" />
				<span class="userName">{{item.useName}}</span>
				<div class="listCollect">
					<i class="el-icon-star-off"></i>
					<span>{{item.num}}</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'lifeCircleList',
		props:['lifeCircleArr'],
		data() {
			return {
			};
		},
		computed:{
			
		},
		methods: {
			showDetails(item){
				this.$emit('toShow',true);
				this.bus.$emit('showListDetails', item);
			}
		}
	};
</script>

<style scoped>
	.lifeCircleList {
		width: 147px;
		margin-bottom: 10px;
		float: left;
	}
	
	.lifeCircleList:nth-child(2n-1) {
		margin-right: 10px;
		margin-left: 7px;
	}
	
	.lifeCircleList .indexImg {
		width: 147px;
	}
	
	.lifeCircleList .title {
		font-size: 12px;
		display: -webkit-box;
		overflow: hidden;
		text-overflow: ellipsis;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		color: #040404;
		margin: 10px 0;
		line-height: 20px;
	}
	
	.lifeCircleList .title span {
		color: #4d5c90;
	}
	
	.lifeCircleList .author {
		margin: 10px 0;
	}
	
	.lifeCircleList .author img {
		float: left;
		width: 38px;
		height: 33px;
		border-radius: 50%;
		vertical-align: middle;
		margin-right: 10px;
	}
	
	.lifeCircleList .author .userName {
		font-size: 14px;
		color: #262626;
		line-height: 38px;
	}
	
	.lifeCircleList .author .listCollect {
		/*width: 126px;*/
		float: right;
		height: 38px;
		line-height: 38px;
		color: #acacac;
		font-size: 14px;
	}
	
	a {
		text-decoration: none;
	}
	
	li {
		list-style: none;
	}
</style>