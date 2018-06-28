<template>
	<div>
		<div class="foucsList" v-for="list in foucsListArr">
			<div class="author">
				<img :src="list.userImgSrc" /></a>
				<span class="userName">{{list.useName}}</span>
				<el-button round>+关注</el-button>
				<br />
				<time>{{list.time}}</time>
			</div>
			<div @click="showDetails(list)">
				<ul>
					<li v-for="imgSrc in list.imgSrcArr"><img :src="imgSrc" /></li>
				</ul>
				<h2>
					<span>{{list.type}}</span>{{list.content}}
				</h2>
			</div>
			<h3><span><i class="el-icon-location-outline">1</i><i class="el-icon-star-off">1</i></span></h3>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'foucsList',
		props:['foucsListArr'],
		data() {
			return {
				
			};
		},
		methods: {
			showDetails(item){
				this.$emit('toShow',true);
				this.bus.$emit('showListDetails', item)
			}
		}
	};
</script>

<style scoped>
	.foucsList{
		padding: 10px;
	}
	.foucsList .author{
		padding: 10px 0;
	}
	.foucsList .author img {
		width: 58px;
		height: 50px;
		border-radius: 50%;
		float: left;
		margin: 10px;
	}
	.foucsList .author .userName {
		font-size: 16px;
		color: #262626;
	}
	.foucsList .author time{
		font-size:14px;
		color: #888888;
	}
	.foucsList .author .el-button{
		float: right;
		margin: 10px;
		background: #fc5b00;
		color: #fff;
	}
	.foucsList a{
		width: 100%;
	}
	.foucsList ul{
		overflow: hidden;
		/*padding: 8px;*/
		width: 100%;
		margin-bottom: 10px;
	}
	.foucsList ul li{
		float: left;
		margin-right: 6px;
	}
	.foucsList ul li:last-child{
		margin-right: 0;
	}
	.foucsList ul li img{
		width: 96px;
	}
	.foucsList h2{
		font-size: 14px;
		color: #151515;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.foucsList h2 span{
		color:#526a9b;
	}
	.foucsList h3{
		border-top: 1px solid #ccc;
		margin-top: 10px;
		height: 34px;
		line-height: 34px;
		margin-bottom: 10px;
	}
	.foucsList h3 span{
		color:#d8d8d8;
		font-size: 18px;
		float: right;
		margin-right: 15px;
	}
	.foucsList h3 span i{
		margin-right: 10px;
	}
</style>