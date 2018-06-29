<template>
	<div>
		<div class="details" v-for="del in lifeCircleListArr">
			{{getlistArr}}
			<div class="detailsTop">
				<i class="el-icon-arrow-left goBack" @click="showDetails"></i>
				<i class="el-icon-news toShare"></i>
				<img :src="del.imgSrc?del.imgSrc:del.imgSrcArr[0]" />
				<div class="detailsImgPages">
					<span>1</span>/<span>1</span>
				</div>
			</div>
			<div class="author">
				<img :src="del.userImgSrc" />
				<span class="userName">{{del.useName}}</span>
				<el-button round>+关注</el-button>
				<br />
				<time>{{del.time}}</time>
			</div>
			<h2 class="detailsContent"><span>{{del.type}}</span>{{del.content}}</h2>
			<h3><i class="el-icon-location"></i><span>万达中心</span><i class="el-icon-arrow-right"></i></h3>
			<h5>成为第一个为ta点赞的人吧 <i class="el-icon-bell"><span>赞</span></i></h5>
			<slot name="messageBoard"></slot>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'lifeCircleListDetails',
		data() {
			return {
				lifeCircleListArr: [{
					imgSrc: '../../static/img/indexImg.png',
					type: '#美食',
					content: '龙虎烩，老鼠份你敢来尝尝吗？切换标签之前的钩子，若返回 false 或者返回 Promise 且被 reject，则阻止切换。',
					userImgSrc: '../../static/img/rentouxiang.png',
					useName: 'zjzhi',
					num: '0',
					time: '2018-06-25 09:54'
				}]
			};
		},
		computed: {
			getlistArr() {
				this.bus.$on('showListDetails', (item) => {
					this.lifeCircleListArr.splice(0,1,item);
				})
			}
		},
		methods: {
			showDetails(){
				this.$emit('toShow',false);
			}
		}
	};
</script>

<style scoped>
	.details{
		font-size: 14px;
		width: 100%;
		padding: 10px;
	}
	.details .detailsTop{
		position: relative;
		margin-bottom: 10px;
		width: 100%;
	}
	.details .detailsTop img{
		height: 250px;
		width: 100%;
	}
	.details .detailsTop .goBack{
		position: absolute;
		color: #fff;
		font-size: 28px;
		left: 10px;
		top: 10px;
	}
	.details .detailsTop .toShare{
		position: absolute;
		color: #fff;
		font-size: 28px;
		right: 10px;
		top: 10px;
	}
	.details .detailsTop .detailsImgPages{
		position: absolute;
		right: 5px;
		bottom: 15px;
		padding:5px 10px;
		background: #796347;
		opacity: 0.6;
		border-radius: 20px;
		color: #fff;
	}
	.details .detailsTop .detailsImgPages span{
		display: inline-block;
		width: 20px;
		text-align: center;
		
	}
	.details .author{
		width: 100%;
		margin-bottom: 10px;
		font-size: 12px;
		margin:10px 0;
		height: 50px;
	}
	.details .author img {
		width: 54px;
		height: 48px;
		border-radius: 50%;
		float: left;
		vertical-align: top;
		margin: 0 10px;
	}
	.details .author .userName {
		font-size: 16px;
		color: #262626;
		margin-bottom: 10px;
		line-height: 34px;
	}
	.details .author .el-button{
		float: right;
		vertical-align: bottom;
		background: #fc5b00;
		color: #fff;
		margin-top: 10px;
	}
	.details h2{
		color: #353535;
		line-height:28px;
		font-size: 14px;
		margin: 10px 0;
		
	}
	.details h2 span{
		color:#526a9b;
	}
	.details h3{
		font-size: 12px;
		color: #8a8a8a;
		background: #f2f2f2;
		line-height: 18px;
		padding: 5px 10px;
	}
	.details h3 i:first-child{
		color:#fc5b00 ;
	}
	.details h3 i:last-child{
		color:#d8d8d8 ;
		float: right;
		line-height: 18px;
	}
	.details h5{
		font-size: 12px;
		color: #ccc;
		border-bottom: 1px solid #ccc;
		line-height: 50px;
		margin: 0;
	}
	.details h5 i{
		float: right;
		line-height:30px;
	}
</style>